
import React, { useEffect, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
const CarreteraImage = () => {
  const canvas = useRef();
  let ctx = null;
  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = 1500;
    canvasEle.height = 300;
    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);
  useEffect(() => {
    const r1Info = { x: 20, y: 30, w: 100, h: 50 };
    const r1Style = { borderColor: "red", borderWidth: 10 };
    drawRect(r1Info, r1Style);
import React, { useEffect } from 'react'
const CarreteraImage = () => {
  return (
    <div style={{marginTop:'20px'}}>
    </div>
        
  )
}
>>>>>>> 4c9bcae74087d5f9852a632d0c908ac283c4c13c

    const r2Info = { x: 100, y: 100, w: 80, h: 150 };
    drawRect(r2Info);

    const r3Info = { x: 250, y: 80, w: 80, h: 120 };
    drawFillRect(r3Info, { backgroundColor: "green" });

    const r4Info = { x: 200, y: 220, w: 100, h: 50 };
    drawFillRect(r4Info);
  }, []);

  const drawFillRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { backgroundColor = "black" } = style;

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x, y, w, h);
  };

  const drawRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { borderColor = "black", borderWidth = 1 } = style;

    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(x, y, w, h);
    ctx.stroke();
  };

=======
import React, { useEffect } from 'react'
import CanvasDraw from "react-canvas-draw";
const CarreteraImage = () => {
>>>>>>> parent of 8dc5097 (cambios playa)
  return (
    <div style={{marginTop:'20px'}}>
      <CanvasDraw style={{width:'100%', height:'260px'}} hideGrid={true} backgroundColor='#808080' />
    </div>
        
  )
}

export default CarreteraImage