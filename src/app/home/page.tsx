"use client";
import { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import { SendHorizontal } from "lucide-react";

export default function Hero() {
  const letters: string[] = ['R', 'O', 'D', 'S', 'O', 'N', 'E'];
  const [displayLetter, setDisplayLetter] = useState<string>('R');
  const indexRef = useRef<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayLetter(letters[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % letters.length;
    }, 1000);
    return () => clearInterval(intervalId);
  }, [letters]);

  return (
    <div className="relative w-full h-screen bg-black/50 overflow-hidden">
      {/* Círculo superior esquerdo */}
      <div className="absolute top-10 left-8">
  <div className="relative 
    w-60 h-60 sm:w-80 sm:h-80 md:w-120 md:h-120 
    lg:w-180 lg:h-180 
    flex items-center justify-center rounded-full border-2 border-white/10 shadow-[#64FFDA]/10 shadow-md">
    
    <div className="
      w-52 h-52 sm:w-72 sm:h-72 md:w-100 md:h-100 
      lg:w-160 lg:h-160 
      flex items-center justify-center rounded-full border-2 border-white/20 shadow-[#64FFDA]/20 shadow-md">
      
      <div className="
        w-44 h-44 sm:w-64 sm:h-64 md:w-84 md:h-84 
        lg:w-140 lg:h-140 
        flex items-center justify-center rounded-full border-2 border-white/30 shadow-[#64FFDA]/30 shadow-md">
        
        <div className="
          w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 
          lg:w-120 lg:h-120 
          flex items-center justify-center rounded-full border-2 border-white/40 shadow-[#64FFDA]/40 shadow-md">
          
          <div className="
            w-28 h-28 sm:w-48 sm:h-48 md:w-60 md:h-60 
            lg:w-100 lg:h-100 
            flex items-center justify-center rounded-full border-2 border-white/50 shadow-[#64FFDA]/50 shadow-md">
            
            <h1 className="
              text-7xl sm:text-8xl md:text-9xl 
              lg:text-[156px] font-black font-font-plex-sans text-[#64FFDA] text-shadow-[#64FFDA] text-shadow-lg">
              {displayLetter}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Círculo inferior direito */}
      <div className="absolute bottom-8 right-8">
        <div className="  w-36 h-36 sm:w-64 sm:h-64 md:w-84 md:h-84 lg:w-140 lg:h-140 flex items-center justify-center rounded-full border-1 border-white/10">
          <div className=" w-28 h-28 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-120 lg:h-120  rounded-full border-2 border-white/20" />
        </div>
      </div>

      {/* Conteúdo central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center gap-4 sm:gap-5 md:gap-6 flex flex-col text-center px-4">
        <h2 className="text-lg sm:text-xl md:text-2xl text-emerald-300 text-shadow-[#64ffDA] text-shadow-sm mb-1 sm:mb-2">
          Engenheiro de Software
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4">
          Rodsone Bacela
        </h1>
        <Link
          href="#"
          className="inline-flex gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-md items-center shadow-sm bg-white text-[#292929] hover:underline"
        >
          <SendHorizontal size={20} className="sm:size-6" />
          <p className="text-sm sm:text-base md:text-lg font-semibold text-[#292929]">
            Baixar CV
          </p>
        </Link>
      </div>

    </div>
  );
}
