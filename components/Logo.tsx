
import React from 'react';

const Logo: React.FC<{ light?: boolean; className?: string }> = ({ light = false, className = "" }) => {
  const color = light ? "white" : "#000000";
  
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      {/* Recreated Logo Icon from Image */}
      <svg 
        width="48" 
        height="56" 
        viewBox="0 0 100 115" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        <path 
          d="M48 0L96 28V58L48 86L0 58V28L48 0Z" 
          fill={color} 
          className="opacity-90"
        />
        <path 
          d="M48 115L0 87V57L48 29L96 57V87L48 115Z" 
          fill={color}
          style={{ mixBlendMode: 'multiply' }}
        />
        <rect x="42" y="45" width="12" height="25" fill={light ? "#1e3a8a" : "white"} />
      </svg>
      
      {/* Branding Text */}
      <div className="flex flex-col items-center text-center leading-tight tracking-[0.2em]">
        <span className={`text-2xl font-black ${light ? 'text-white' : 'text-black'}`}>
          SYNDYNE
        </span>
        <div className={`flex flex-col text-[10px] font-medium tracking-[0.4em] mt-1 uppercase ${light ? 'text-white/80' : 'text-slate-600'}`}>
          <span>ACCOUNTING</span>
          <span className="mt-0.5">SOLUTIONS</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
