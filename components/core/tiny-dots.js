'use client'
import { useState, useEffect, useRef } from 'react';

export default function TinyDots() {
  const containerRef = useRef(null);
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const calculateDots = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const dotsInRow = Math.floor(width / 12);
        const dotsInCol = Math.floor(height / 12);
        const totalDots = dotsInRow * dotsInCol;
        setDots(Array.from({ length: totalDots }));
      }
    };
    calculateDots();
    window.addEventListener('resize', calculateDots);

    return () => {
      window.removeEventListener('resize', calculateDots);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0" ref={containerRef}>
      <div className="relative w-full h-full dots-container bg-red">
        {dots.map((_, index) => (
          <div className='flex justify-center items-center'>
            <div key={index} className="dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
