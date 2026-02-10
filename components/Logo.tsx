
import React from 'react';

const Logo: React.FC<{ light?: boolean; className?: string }> = ({ light = false, className = "" }) => {
  // Use colors derived from the provided branding image
  const blue = light ? "#FFFFFF" : "#1B365D"; // Dark corporate blue
  const green = light ? "#4ADE80" : "#108548"; // Growth green
  const gray = light ? "rgba(255,255,255,0.6)" : "#64748b"; // Subtle gray for tagline

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* High-fidelity SVG recreation of the provided branding asset */}
      <svg 
        width="65" 
        height="65" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300 group-hover:scale-110 mb-2"
      >
        {/* Dynamic Green Outer Frame (C-shape) */}
        <path 
          d="M35 15 C 15 25, 8 55, 18 78 C 28 98, 60 100, 85 85 C 100 75, 105 50, 95 30" 
          stroke={green} 
          strokeWidth="10" 
          strokeLinecap="round" 
          fill="none"
        />
        
        {/* Corporate Rising Bars & Arrow */}
        <g transform="translate(8, 8)">
          {/* Parallel slanted bars */}
          <path d="M22 62 L42 32" stroke={blue} strokeWidth="12" strokeLinecap="round" />
          <path d="M38 62 L58 26" stroke={blue} strokeWidth="12" strokeLinecap="round" />
          <path d="M54 62 L78 18" stroke={blue} strokeWidth="12" strokeLinecap="round" />
          
          {/* Integrated Arrow Tip */}
          <path 
            d="M65 18 L84 12 L84 32 Z" 
            fill={blue} 
          />
        </g>
      </svg>
      
      {/* Precision Typography */}
      <div className="flex flex-col items-center text-center">
        <span 
          className="text-2xl font-[900] tracking-tight leading-none" 
          style={{ color: blue, fontFamily: 'Inter, sans-serif' }}
        >
          SYNDYNE
        </span>
        <span 
          className="text-[9px] font-black tracking-[0.25em] mt-1.5 uppercase opacity-90"
          style={{ color: gray }}
        >
          ACCOUNTING SOLUTION
        </span>
      </div>
    </div>
  );
};

export default Logo;
