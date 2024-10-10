'use client'
import { useEffect, useRef } from 'react';

export default function TinyDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const drawDots = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;

        const dotSize = 2;
        const gap = 20;
        const dotsInRow = Math.floor(width / gap);
        const dotsInCol = Math.floor(height / gap);

        ctx.clearRect(0, 0, width, height);

        for (let y = 0; y < dotsInCol; y++) {
          for (let x = 0; x < dotsInRow; x++) {
            const posX = x * gap;
            const posY = y * gap;
            ctx.beginPath();
            ctx.arc(posX, posY, dotSize / 2, 0, Math.PI * 2);
            ctx.fillStyle = '#cbcbcb' // Set the dot color
            ctx.fill();
          }
        }
      }
    };

    drawDots();
    window.addEventListener('resize', drawDots);

    return () => {
      window.removeEventListener('resize', drawDots);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
}
