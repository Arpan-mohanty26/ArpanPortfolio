import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const techCategories = {
  "Core Technologies": {
    items: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB', 'OpenAI'],
    gradient: "from-blue-500 to-purple-500",
    icon: "🚀"
  },
  "Languages": {
    items: ['C++', 'Python', 'JavaScript', 'PHP', 'Java', 'HTML', 'CSS'],
    gradient: "from-green-500 to-emerald-500",
    icon: "💻"
  },
  "Databases & Tools": {
    items: ['MongoDB', 'SQL Server', 'Git/GitHub', 'Postman'],
    gradient: "from-pink-500 to-red-500",
    icon: "🛠️"
  }
};

export default function TechStack() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="tech" className="py-24 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-12 text-gray-900 dark:text-white">
          Tech <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Stack</span>
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techCategories).map(([category, { items, gradient, icon }], i) => (
            <div
              key={category}
              data-aos="fade-up"
              data-aos-delay={i * 200}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-md p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`text-2xl p-3 bg-gradient-to-br ${gradient} rounded-xl shadow`}>
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {items.map((tech, idx) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-purple-500 dark:bg-purple-500/50 text-purple-900 dark:text-purple-300 rounded-full text-sm font-medium shadow-sm"
                  > 
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
