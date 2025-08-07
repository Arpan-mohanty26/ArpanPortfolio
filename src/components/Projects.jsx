import { ExternalLink, Github } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const projects = [
  {
    title: 'Plaudern-Chat App',
    description: 'Real-time messaging with MERN and Socket.IO , where user can chat in real-time',
    tech: ['React', 'Node.js', 'Socket.IO'],
    github: 'https://github.com/Arpan-mohanty26/Plaudern-backend',
    live: 'https://plaudern-frontend.vercel.app/',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title:'MemoraAI-Your Personal AI',
    description:'A model with which user can interact and share their personal problems to get some help or solutions',
    tech:['streamlit','python','GeminiAPI'],
    github:'https://github.com/Arpan-mohanty26/MemoraAI',
    live:'https://memora-ai-the-personal-ai.streamlit.app/',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: "Finden Q&A Website",
  description:
    "A Q&A platform inspired by Quora. Rebuilt a legacy PHP/MySQL system into a modern architecture using a React frontend and a RESTful PHP API backend for seamless communication via JSON.",
  tech: ["React", "PHP", "MySQL", "REST API"],
  gradient: "from-red-500 to-pink-500",
  github: "https://github.com/finden-qa",
  live: "https://findenlive.com"

  }
  
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16 text-gray-900 dark:text-white">
          Featured <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Projects</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-aos="zoom-in-up"
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-gradient-to-r from-purple-300 to-pink-600 bg-clip-text">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full">{t}</span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} className="text-gray-600 dark:text-gray-300 hover:text-purple-500"><Github /></a>
                <a href={project.live} className="text-gray-600 dark:text-gray-300 hover:text-purple-500"><ExternalLink /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
