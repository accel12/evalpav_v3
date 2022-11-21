const XLSX = require("xlsx")
const _ = require('lodash');
var groupArray = require('group-array');
const obtenerDataBruta=async(e,setDataBruta,setCargaBrutaEstado,setDataFormulario,dataFormulario)=>{
  let [file] = e.target.files;
  let reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (evt) => {
      let bstr = evt.target.result;
      let wb = XLSX.read(bstr, { type: "binary" });
      let wsname = wb.SheetNames[0];
      let ws = wb.Sheets[wsname];
      let data = XLSX.utils.sheet_to_json(ws);
      setDataBruta(data)
      setDataFormulario({
        ...dataFormulario,
        'pini':data[0].ProgresivaInicial,
        'pfin':Math.round((data[data.length-1].ProgresivaFinal) * 100) / 100,
        'xyIni':`${data[0].InicioLatitud}, ${data[0].InicioLongitud}`,
        'xyFin':`${data[data.length-1].FinalLatitud}, ${data[data.length-1].FinalLongitud}`,
        'anchoCarril':data[0].AnchoDeCarril,
        'longitudTramo':Math.round((data[data.length-1].ProgresivaFinal-data[0].ProgresivaInicial) * 100) / 100,
      })
      setCargaBrutaEstado(true)
    }
}

const obtenerNumeroMayor=(array)=>{
  let mayor=0
  array.forEach(e=>{
    if(e.ProgresivaFinal>mayor){
      mayor=e.ProgresivaFinal
    }
  }
  )
  return mayor
}

const obtenerDatav2=async(data,distancia,setval,pci,setValRed,setValRedCorregido,setResultadoValDeducido)=>{
  let arrayImportado=[...data]  
  let arraySegmentado=[]
  let num=parseInt(distancia)
  let inicio=data[0].ProgresivaInicial
  let intervalos=0
  let arrayJuntado=[]


  let arrayOrdenado=arrayImportado.sort((a, b) => {
        return a.ProgresivaInicial - b.ProgresivaInicial;
      });
  
  //Creando nuevo array

  arrayOrdenado.map(itemArray=>{
    let copiaItemArray=_.cloneDeep(itemArray)
    let valorInicial=copiaItemArray.ProgresivaInicial
    let valorFinal=copiaItemArray.ProgresivaFinal
    let valorInicialIterable=valorInicial
    let longitud=valorFinal-valorInicial
    let valorFinalIterable=valorInicialIterable + num
    let cantidadDivisiones=Math.ceil((valorFinal-valorInicial)/num)
    for(let i=0;i<cantidadDivisiones;i++){
      let valorInsertar=_.cloneDeep(copiaItemArray)
      if((valorFinalIterable + (num*i))>valorFinal){
        valorInsertar.ProgresivaInicial=valorInicialIterable + (num*i)
        valorInsertar.ProgresivaFinal=valorFinal
        valorInsertar.Longitud=valorFinal-valorInsertar.ProgresivaInicial
        valorInsertar.Area=copiaItemArray.Ancho*longitud
      }else{
        valorInsertar.ProgresivaInicial=valorInicialIterable + (num*i)
        valorInsertar.ProgresivaFinal=valorFinalIterable + (num*i)
        valorInsertar.Longitud=valorInsertar.ProgresivaFinal-valorInsertar.ProgresivaInicial
        valorInsertar.Area=copiaItemArray.Ancho*(valorInsertar.ProgresivaFinal-valorInsertar.ProgresivaInicial)
      }
      arraySegmentado.push(valorInsertar)
    }
  })
  let clonArraySegmentado=_.cloneDeep(arraySegmentado)
  let nuevosArray=[]
  // acoplar por tamano
  const arraySegmentadoInicio=_.cloneDeep(arraySegmentado[0].ProgresivaInicial)
  const obtenerMayor=obtenerNumeroMayor(arraySegmentado)
  const nuevaDivision=Math.ceil((obtenerMayor-arraySegmentadoInicio)/num)
  for(let i=0;i<nuevaDivision;i++){
    let inicioJuntado= arraySegmentadoInicio + num*i
    let FinalJuntado= arraySegmentadoInicio + num*(i+1)
    let items=_.cloneDeep(arraySegmentado.filter(limite=>
      limite.ProgresivaInicial >= inicioJuntado && limite.ProgresivaInicial < FinalJuntado 
    ))
    items.forEach(item=>{
      let clonItem=_.cloneDeep(item)
      if(item.ProgresivaFinal>FinalJuntado){
        let nuevoArrayItem=_.cloneDeep(item)
        nuevoArrayItem.ProgresivaInicial=FinalJuntado
        nuevoArrayItem.ProgresivaFinal=clonItem.ProgresivaFinal
        nuevoArrayItem.Longitud=nuevoArrayItem.ProgresivaFinal-nuevoArrayItem.ProgresivaInicial
        nuevosArray.push(nuevoArrayItem)
      }
      if(item.ProgresivaInicial<inicioJuntado){
        item.ProgresivaInicial=inicioJuntado
        let nuevoArrayItem=_.cloneDeep(item)
        nuevoArrayItem.ProgresivaInicial=clonItem.ProgresivaInicial
        nuevoArrayItem.ProgresivaFinal=inicioJuntado
        nuevoArrayItem.Longitud=nuevoArrayItem.ProgresivaFinal-nuevoArrayItem.ProgresivaInicial
        nuevosArray.push(nuevoArrayItem)
      }
    })
  }
  // juntando arrays
  let arrayCombinado=clonArraySegmentado.concat(nuevosArray)

  //reordenando array juntado
  arrayCombinado.sort((a, b) => {
    return a.ProgresivaInicial - b.ProgresivaInicial;
  });
  console.log(arrayCombinado)
  //Volver a acoplar
  const arraySegmentadoInicio2=_.cloneDeep(arrayCombinado[0].ProgresivaInicial)
  const obtenerMayor2=obtenerNumeroMayor(arrayCombinado)
  const nuevaDivision2=Math.ceil((obtenerMayor2-arraySegmentadoInicio2)/num)
  for(let i=0;i<nuevaDivision2;i++){
    let inicioJuntado= arraySegmentadoInicio2 + num*i
    let FinalJuntado= arraySegmentadoInicio2 + num*(i+1)
    let items=_.cloneDeep(arrayCombinado.filter(limite=>
      limite.ProgresivaInicial >= inicioJuntado && limite.ProgresivaInicial < FinalJuntado 
    ))
    items.map(item=>{
      if(item.ProgresivaFinal>FinalJuntado){
        item.ProgresivaFinal=FinalJuntado
        item.Longitud=FinalJuntado-item.ProgresivaInicial
      }
      if(item.ProgresivaInicial<inicioJuntado){
        item.ProgresivaInicial=inicioJuntado
      }
    })
    arrayJuntado.push(items)
  }

  // eliminar array vacios
  let arrayFinal= []
  arrayJuntado.forEach(items=>{
    if (items.length>0){
      arrayFinal.push(items)
    }
  })
  arrayFinal.forEach(items=>{
    items.map(item=>{
      item.DS=item.Daño+item.Severidad
      item.AreaMuestra=num*item.AnchoDeCarril
      return item
    })
  })
  arrayFinal.forEach((items)=>{
    items.map((item,i,lista)=>{
      item.Yfalla=Math.round((item.ProgresivaInicial - lista[0].ProgresivaInicial)*100)/100
      return item
    })
  })
  setval(arrayFinal)
  calculoValorReducido(arrayFinal,pci,setValRed,setValRedCorregido,num,setResultadoValDeducido)
}

const calculoValorReducido = async (arrayFinal,pci,setValRed,setValRedCorregido,num,setResultadoValDeducido)=>{
  let valoresReducidos=[]
  let valorReducidoTotal=[]
  let agrupado=[]
  const listaPci= _.cloneDeep(pci)
  const copiaArray= _.cloneDeep(arrayFinal)
  copiaArray.forEach(items=>{
    let reagrupado=[]
    let filtrado=_.cloneDeep(items)
    let item=groupArray(filtrado,'DS')
    for(let i=0;i<20;i++){
      for(let k=0;k<3;k++){
        let letra=''
        if(k==0){
          letra='B'
        }
        if(k==1){
          letra='M'
        }
        if(k==2){
          letra='A'
        }
        let res=item[`${i}${letra}`]
        if(res !== undefined){
          let ele=[]
          for(let j=0;j<20;j++){
            if(item[`${i}${letra}`][j] !== undefined){
              let itemAgregar=item[`${i}${letra}`][j]
              ele.push(itemAgregar)
            }
          }
          reagrupado.push(ele)
        }
      }
    }
    valoresReducidos.push(reagrupado)
  })
  
  // ordenar valores internos
  valoresReducidos.map(items=>{
    return items.sort((a,b)=>a.ProgresivaInicial - b.ProgresivaInicial)
  })

  // ordenar valores 

  valoresReducidos.map(items=>{
    return items.sort((a,b)=>a[0].ProgresivaInicial - b[0].ProgresivaInicial)
  })

  valoresReducidos.forEach(items=>{
    let itemsPush=[]
    let ultimoObjeto=items[items.length-1]
    let progresivaFinal=ultimoObjeto[ultimoObjeto.length-1].ProgresivaFinal
    let primerObjeto=items[0]
    let progresivaInicial=primerObjeto[0].ProgresivaInicial
    let area=(progresivaFinal-progresivaInicial)*primerObjeto[0].Ancho
    items.forEach(item=>{
      let itemArmado={}
      let listaValores=[]
      let densidad=0
      let total=0
      let areaCarril=(num)*item[0].AnchoDeCarril
      Object.assign(itemArmado,{Dano:item[0].Daño})
      Object.assign(itemArmado,{Severidad:item[0].Severidad})
      item.forEach(e=>{
        console.log(e)
        if(e.Daño===4 || e.Daño===7 || e.Daño===8 || e.Daño===9 || e.Daño===10 || e.Daño===13){
          listaValores.push(e.Longitud)
          total=total+e.Longitud
        }else{
          listaValores.push(e.Area)
          total=total+e.Area
        }
        
      })
      densidad=Math.round((((total*100)/areaCarril))*10)/10
      let calcularVR=pci.filter(itemP=>{
        return itemP.DENSIDAD == densidad && itemP.NUMERO == item[0].Daño 
      })
      let vr=0
      if(calcularVR.length !== 0){
        vr=calcularVR[0]
      }
      Object.assign(itemArmado,{Valores:listaValores})
      Object.assign(itemArmado,{Total:total})
      Object.assign(itemArmado,{Area:area})
      Object.assign(itemArmado,{AreaCarril:areaCarril})
      Object.assign(itemArmado,{Densidad:densidad})
      if(vr==0){
        Object.assign(itemArmado,{Vr:0.00})
      }else{
        Object.assign(itemArmado,{Vr:vr[`${item[0].Severidad}`]})
      }
      itemsPush.push(itemArmado)
    })
    //mayor valor
    let listaValoresVr=[]
    let max=0
    let m=0
    itemsPush.forEach(e=>{
      listaValoresVr.push(e.Vr)
    })
    max=Math.max(Math.max(...listaValoresVr.map(o => o)))
    m=1+(9/98)*(100-max)
    Object.assign(itemsPush,{m:m})
    valorReducidoTotal.push(itemsPush)
  })
  setValRed(valorReducidoTotal)

  // armado calculo valor corregido
  const valorReducidoVal=_.cloneDeep(valorReducidoTotal)
  let valorReducidoCorregido=[]
  valorReducidoVal.forEach(items=>{
    //ordenar items por vr
    
    let itemsOrdenado=items.sort((a,b)=>b.Vr - a.Vr)
    let VRCItem=[]
    itemsOrdenado.forEach((item,i,lista)=>{
      let itemAgregar={}
      let copiaLista=_.cloneDeep(lista)
      let listaVr=[]
      let total=0
      let q=0
      let VRC=0
      copiaLista.forEach(vr=>{
        listaVr.push(vr.Vr)
      })
      listaVr.splice(listaVr.length-i)
      listaVr.forEach(e=>{
        total=total+e
      })
      q=listaVr.length
      switch(q){
        case 1:
          VRC= total
          break;
        case 2:
          VRC= -0.0017*Math.pow(total,2) + 0.894*total - 3.1496
          break;
        case 3:
          VRC= -0.0013*Math.pow(total,2) + 0.8314*total - 6.6193
          break;
        case 4:
          VRC= -0.0014*Math.pow(total,2) + 0.8392*total - 11.805
          break;
        case 5:
          VRC= -0.0011*Math.pow(total,2) + 0.7401*total - 11.072
          break;
        case 6:
          VRC= -0.0011*Math.pow(total,2) + 0.7469*total - 14.192
          break;
        case 7:
          VRC= -0.0016*Math.pow(total,2) + 0.8218*total - 16.808
          break;
      }
      Object.assign(itemAgregar,{listaVr:listaVr,total:total,q:q,vrc:VRC})
      VRCItem.push(itemAgregar)
    })
    valorReducidoCorregido.push(VRCItem)
  })
  setValRedCorregido(valorReducidoCorregido)
  
  let copiaValorReducidoCorregido=_.cloneDeep(valorReducidoCorregido)
  let resultadosValorDeducido=[]
  copiaValorReducidoCorregido.forEach(item=>{
    let max=0
    let pciVal=0
    let valorInsertar={}
    max=Math.max(Math.max(...item.map(o => o.vrc)))
    pciVal=100-max
    Object.assign(valorInsertar,{vdc:Math.round(max*100)/100,pci:Math.round(pciVal*100)/100})
    resultadosValorDeducido.push(valorInsertar)
  })
  console.log(resultadosValorDeducido)
  setResultadoValDeducido(resultadosValorDeducido)
}

export{
    obtenerDataBruta,
    obtenerDatav2
}