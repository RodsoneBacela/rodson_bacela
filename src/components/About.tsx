'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SectionAbout = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-[1440px] h-screen mx-auto">
      {/* Top 40% */}
      <div className="h-[40%] bg-black/10" />

      {/* Bottom 60% */}
      <div className="h-[60%] flex flex-col" />

      {/* Content in center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 [perspective:1000px]">
          <div
            className={`w-full h-full rounded-full transition-transform duration-1000 [transform-style:preserve-3d] ${
              flipped ? '[transform:rotateY(180deg)]' : ''
            }`}
          >
            {/* Front */}
            <div className="absolute w-full h-full rounded-full overflow-hidden border-2 border-cyan-500 [backface-visibility:hidden]">
              <Image src="/me.png" alt="me" fill className="object-cover" />
            </div>

            {/* Back */}
            <div className="absolute w-full h-full rounded-full overflow-hidden border-2 border-cyan-500 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <Image src="/me-back.png" alt="me back" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-6 text-white p-4 mt-6 max-w-lg">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">About me</h1>
          <p className="text-sm md:text-base leading-relaxed">
            I'm a Software Developer with experience in frontend with React.js, Next.js.
            <br />
            I use Python and Node.js for backend and ...
          </p>
          <Link
            href="#"
            className="bg-white text-[#292929] text-sm md:text-md font-medium rounded-sm px-4 py-2"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionAbout;
