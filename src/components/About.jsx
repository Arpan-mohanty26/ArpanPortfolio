import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="about" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div data-aos="fade-right">
                    <div className="relative w-80 h-80 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl rotate-6 opacity-20"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-3xl -rotate-6 opacity-20"></div>
                        <div className="relative z-10 w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                            AKM
                        </div>
                    </div>
                </div>
                <div className="space-y-6" data-aos="fade-left">
                    <h2 className="text-5xl font-black text-gray-900 dark:text-white">
                        About <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Me</span>
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        I’m a <span className="font-semibold text-purple-600 dark:text-purple-400">Full Stack Web Developer</span> Who enjoys building beautiful , Modern & functional apps, I specialize in the MERN stack and thrive in building responsive and dynamic web applications. From architecting RESTful APIs to fine tuning AI models, I love blending frontend creativity with backend logic.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        Passionate about clean code, performance, and using <span className="font-semibold text-blue-600 dark:text-blue-400">AI</span> to optimize workflows.
                    </p>
                </div>
            </div>
        </section>
    );
}
