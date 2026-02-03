
import React from 'react';

const Logo: React.FC<{ light?: boolean; className?: string }> = ({ light = false, className = "" }) => {
  const color = light ? "#FFFFFF" : "#000000";
  
  return (
    <div className={`flex flex-col items-center justify-center gap-1 ${className}`}>
      {/* Hand-crafted SVG based on the provided geometry */}
      <svg 
        width="45" 
        height="52" 
        viewBox="0 0 100 115" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        {/* Upper Part */}
        <path 
          d="M50 0 L100 28.87 V57.74 L50 86.6 L0 57.74 V28.87 L50 0 Z" 
          fill={color} 
        />
        {/* Lower Part (Offset) */}
        <path 
          d="M50 28.87 L100 57.74 V86.6 L50 115.47 L0 86.6 V57.74 L50 28.87 Z" 
          fill={color}
          style={{ mixBlendMode: 'difference' }}
          className="opacity-95"
        />
        {/* The small square gap element seen in image */}
        <rect x="35" y="45" width="15" height="15" fill={light ? "#1e3a8a" : "white"} />
      </svg>
      
      {/* Main Branding */}
      <div className="flex flex-col items-center text-center mt-2">
        <span className={`text-2xl font-[900] tracking-[0.15em] leading-none ${light ? 'text-white' : 'text-black'}`}>
          SYNDYNE
        </span>
        <div className={`flex flex-col text-[8px] font-bold tracking-[0.45em] mt-2 uppercase ${light ? 'text-white/70' : 'text-slate-500'}`}>
          <span>ACCOUNTING</span>
          <span className="mt-1">SOLUTIONS</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
