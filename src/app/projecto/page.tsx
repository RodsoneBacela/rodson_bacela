'use client';
import Link from 'next/link';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Project Alpha",
    description: "A next-gen social media platform.",
    stack: ["React", "Next.js", "Tailwind CSS"],
    image: "/1.jpg",
    url: "https://project-alpha.example.com",
  },
  {
    id: 2,
    name: "Beta Dashboard",
    description: "Analytics dashboard for marketers.",
    stack: ["TypeScript", "Node.js", "D3.js"],
    image: "/2.png",
    url: "https://beta-dashboard.example.com",
  },
  {
    id: 3,
    name: "Gamma Store",
    description: "E-commerce platform with realtime updates.",
    stack: ["Next.js", "GraphQL", "Prisma"],
    image: "/3.png",
    url: "https://gamma-store.example.com",
  },
  {
    id: 4,
    name: "Gamma Store",
    description: "E-commerce platform with realtime updates.",
    stack: ["Next.js", "GraphQL", "Prisma"],
    image: "/3.png",
    url: "https://gamma-store.example.com",
  },
  {
    id: 5,
    name: "Gamma Store",
    description: "E-commerce platform with realtime updates.",
    stack: ["Next.js", "GraphQL", "Prisma"],
    image: "/3.png",
    url: "https://gamma-store.example.com",
  },
];

const skills = [
  {
    title: "Technical Skills",
    items: ["Problem Solving", "System Design", "API Development"],
  },
  {
    title: "Interpersonal Skills",
    items: ["Team Collaboration", "Communication", "Empathy"],
  },
  {
    title: "Technology / Stacks",
    items: ["React", "Next.js", "Tailwind CSS", "Node.js", "Prisma"],
  },
];



export default function Skill() {
  const [featured, setFeatured] = useState<Project>(projects[0]);
  const [tab, setTab] = useState<'projects' | 'skills'>('projects');
  const [flipped, setFlipped] = useState<number | null>(null);


    const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust scroll amount as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full font-font-plex-sans font-semibold py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        <h2 className="text-2xl sm:text-3xl">My Work & Skills</h2>

        {/* Tabs */}
        <div className="flex items-center justify-center py-6">
          <div className="flex flex-wrap gap-2 bg-white px-4 sm:px-8 py-2 sm:py-3 rounded-md">
            <button
              onClick={() => setTab('projects')}
              className={`px-4 sm:px-8 py-2 rounded-md ${tab === 'projects' ? 'bg-black text-white' : 'text-black'}`}
            >
              Projetos
            </button>
            <button
              onClick={() => setTab('skills')}
              className={`px-4 sm:px-8 py-2 rounded-md ${tab === 'skills' ? 'bg-black text-white' : 'text-black'}`}
            >
              Skills
            </button>
          </div>
        </div>

        {/* Projects Tab */}
        {tab === 'projects' ? (
          <main className="bg-black/50 text-white rounded-lg overflow-hidden">
            {/* Featured Project */}
            <section>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover brightness-70"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{featured.name}</h2>
                  <p className="mb-2 max-w-lg text-sm sm:text-base">{featured.description}</p>
                  <p className="mb-4 text-sm sm:text-base">
                    <span className="font-semibold">Stack: </span>
                    {featured.stack.join(", ")}
                  </p>
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white hover:bg-green-700 text-black px-4 sm:px-5 py-2 rounded-md font-semibold transition"
                  >
                    Watch Project
                  </a>
                </div>
              </div>
            </section>

            {/* More Projects */}
            <section className="mt-10 mx-auto p-5">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">More Projects</h3>
              <div className="relative -mx-4 px-4">
                {/* Navigation Buttons */}
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#64ffDA]/70 text-white p-2 rounded-full z-20 hidden sm:block"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#64ffDA]/70 text-white p-2 rounded-full z-20 hidden sm:block"
                >
                  <ChevronRight size={24} />
                </button>

                <div
                  ref={scrollContainerRef} // Attach ref here
                  className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar pb-5 snap-x snap-mandatory"
                >
                  {projects
                    .filter((p) => p.id !== featured.id)
                    .map((project) => (
                      <div
                        key={project.id}
                        className="flex-shrink-0 w-[90vw] sm:w-72 cursor-pointer rounded-md shadow-md hover:shadow-xl transition snap-center px-2"
                        onClick={() => setFeatured(project)}
                      >
                        <Image
                          src={project.image}
                          alt={project.name}
                           width={288} 
                          height={160}
                          className="w-full h-40 object-cover"
                        />
                        <div className="bg-white p-3 sm:p-4">
                          <h4 className="font-semibold text-black">{project.name}</h4>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>

          </main>
        ) : (
          // Skills Tab
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                onClick={() => setFlipped(flipped === index ? null : index)}
                className="cursor-pointer perspective"
              >
                <div className={`relative w-full h-64 sm:h-72 transition-transform duration-500 transform-style-preserve-3d ${flipped === index ? 'rotate-y-180' : ''}`}>
                  {/* Front */}
                  <div className="absolute w-full h-full bg-black/50 text-white flex flex-col gap-2 items-start justify-end p-6 sm:p-8 text-lg sm:text-xl font-bold backface-hidden rounded-lg border border-[#64FFDA] shadow-lg shadow-[#64FFDA]">
                    {skill.title}
                    <p className='flex gap-2 text-[#64FFDA] text-sm sm:text-base'>ver <ArrowUpRight size={16} /> </p>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full bg-black/10 text-white px-4 py-6 text-sm sm:text-md rounded-lg backface-hidden rotate-y-180 overflow-y-auto border-white shadow-lg shadow-white/50">
                    <ul className="gap-2 grid grid-cols-2 sm:grid-cols-2 py-2">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="flex items-center justify-center border-2 p-2 rounded-full text-center">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
