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
  <div className="relative w-180 h-180 flex items-center justify-center rounded-full border-2 border-white/10 ">
    <div className="w-160 h-160 flex items-center justify-center rounded-full border-2 border-white/20">
      <div className="w-140 h-140 flex items-center justify-center rounded-full border-2 border-white/30">
        <div className="w-120 h-120 flex items-center justify-center rounded-full border-2 border-white/40">
          <div className="w-100 h-100 flex items-center justify-center rounded-full border-2 border-white/50 " >
            <h1 className="text-[156px] font-bold font-font-plex-sans text-[#64FFDA] text-shadow-lg/50">
              {displayLetter}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Círculo inferior direito com 2 camadas */}
      <div className="absolute bottom-8 right-8">
        <div className="w-64 h-64 flex items-center justify-center rounded-full border-1 border-white/10">
          <div className="w-52 h-52 rounded-full border-2 border-white/20" />
        </div>
      </div>

      {/* Conteúdo central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center gap-6 flex flex-col">
        <h2 className="text-2xl text-[#64FFDA] mb-2">Engenheiro de Software</h2>
        <h1 className="text-7xl font-bold text-white mb-4">Rodsone Bacela</h1>
        <div className="p-4 flex gap-4 items-center">
            <Link href="" className=" px-12 py-3 border-2 border-[#64FFDA] text-[#64FFDA] text-lg rounded-md">Home</Link>
            <Link href="" className="text-lg px-10 py-2">About</Link>
            <Link href="" className="text-lg px-10 py-2">Project</Link>
        </div>
        <Link href="#" className="inline-flex gap-4 px-8 py-4 rounded-md items-center shadow-sm  bg-white  text-[#292929] hover:underline">
          <SendHorizontal size={24} />
          <p className="text-[#292929] font-semibold">Baixar CV</p>
        </Link>
      </div>
    </div>
  );
}
