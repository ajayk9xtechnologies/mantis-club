'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Play } from "lucide-react";

const CircularVideoButton = ({ youtubeUrl = "https://www.youtube.com/watch?v=48_q9A9cH1s" }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.to(svgRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <div className="absolute z-50" style={{opacity:0.4}}>
      <div className="relative w-[180px] h-[180px] flex items-center justify-center">
        {/* Rotating Text */}
        <svg 
          ref={svgRef} 
          width="180" 
          height="180" 
          viewBox="0 0 180 180"
          className="absolute inset-0"
        >
          <defs>
            <path 
              id="circlePath" 
              d="M 90, 90 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            />
          </defs>
          <text 
            className="text-[14px] font-bold uppercase" 
            fill="#fff" 
            style={{ letterSpacing: '6px' }}
          >
            <textPath href="#circlePath" startOffset="0%">
              WATCH VIDEO • MANTIS DUBAI • WATCH VIDEO •
            </textPath>
          </text>
        </svg>

        
          <Play className="w-8 h-8 text-black fill-white ml-1" />
         
      </div>
    </div>
  );
};

export default CircularVideoButton;