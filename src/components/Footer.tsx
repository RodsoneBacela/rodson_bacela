import { Mail, Linkedin, MapPin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full font-plex py-10  text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6">
        {/* Top section */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-6">
          {/* Left side */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold leading-tight">
              Rodsone <br /> Bacela
            </h1>
            <span className="text-lg text-[#64FFDA] block mt-1">
              Engenheiro de Software
            </span>
          </div>

          {/* Right side: contacts */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <Mail size={24} />
              <p>seu@email.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={24} />
              <p>Moçambique</p>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin size={24} />
              <p>LinkedIn</p>
            </div>
            <div className="flex items-center gap-4">
              <Github size={24} />
              <p>GitHub</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* Bottom text */}
        <div className="text-center text-md">
          <p>© 2024 Rodsone Bacela. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
