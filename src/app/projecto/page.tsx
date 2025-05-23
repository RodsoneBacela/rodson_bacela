'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

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

  return (
    <div className="w-full font-font-plex-sans font-semibold py-10">
      <div className="max-w-7xl mx-auto flex flex-col">
        <h2 className="text-2xl">My Work & Skills</h2>
        <div className="flex items-center justify-center py-10">
          <div className="flex gap-4 bg-white px-8 py-3 rounded-md">
            <button onClick={() => setTab('projects')} className={`px-8 py-2 rounded-md ${tab === 'projects' ? 'bg-black text-white' : 'text-black'}`}>
              Projetos
            </button>
            <button onClick={() => setTab('skills')} className={`px-8 py-2 rounded-md ${tab === 'skills' ? 'bg-black text-white' : 'text-black'}`}>
              Skills
            </button>
          </div>
        </div>

        {tab === 'projects' ? (
          <main className="min-h-screen bg-black/50 text-white rounded-lg">
            <section>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="w-full h-120 object-cover brightness-70"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h2 className="text-3xl font-bold mb-2">{featured.name}</h2>
                  <p className="mb-2 max-w-lg">{featured.description}</p>
                  <p className="mb-4">
                    <span className="font-semibold">Stack: </span>
                    {featured.stack.join(", ")}
                  </p>
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white hover:bg-green-700 text-black px-5 py-2 rounded-md font-semibold transition"
                  >
                    Watch Project
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-10 max-w-5xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-white">More Projects</h3>
              <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-5">
                {projects
                  .filter((p) => p.id !== featured.id)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="flex-shrink-0 w-72 cursor-pointer rounded-md overflow-hidden shadow-md hover:shadow-xl transition"
                      onClick={() => setFeatured(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-56 object-cover"
                      />
                      <div className="bg-white p-4">
                        <h4 className="font-semibold text-black">{project.name}</h4>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </main>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 md:px-0">
            {skills.map((skill, index) => (
              <div
                key={index}
                onClick={() => setFlipped(flipped === index ? null : index)}
                className="cursor-pointer perspective"
              >
                <div className={`relative w-full h-72 transition-transform duration-500 transform-style-preserve-3d ${flipped === index ? 'rotate-y-180' : ''}`}>
                  {/* Front */}
                  <div className="absolute w-full h-full bg-black/50  text-white flex flex-col gap-2 items-start justify-end p-8 text-xl font-bold backface-hidden rounded-lg shadow-lg shadow-neutral-800">
                    {skill.title}
                    <p className='flex gap-2 text-[#64FFDA]'>ver <ArrowUpRight/> </p>
                  </div>
                  {/* Back */}
                  <div className="absolute w-full h-full bg-white text-black px-4 py-6 text-sm rounded-lg backface-hidden rotate-y-180 shadow-lg overflow-y-auto">
                    <ul className="space-y-2">
                      {skill.items.map((item, idx) => (
                        <li key={idx} className="border-b pb-1">{item}</li>
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
