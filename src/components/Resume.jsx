import { Download } from 'lucide-react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="resume" className="py-24 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-8">
          My <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Resume</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Check my CV for more information.
        </p>
        <a
          href="https://drive.google.com/file/d/1rtERWnhZkPewzv-dj23_qnCkIocgJyaU/view"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 transition-all"
        >
          <Download className="w-5 h-5" /> View Resume
        </a>
      </div>
    </section>
  );
}
