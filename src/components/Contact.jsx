import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
          <div className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Get In <span className="text-5xl font-black text-gray-900 dark:text-white mb-6">Touch</span></div>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Have a project, idea or just want to say hello? Feel free to reach out via email or connect with me on social media.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a
            href="arpankumarmohanty1126@gmail.com"
            className="flex items-center gap-3 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition-colors"
          >
            <Mail className="w-5 h-5" />
            arpankumarmohanty1126@gmail.com
          </a>
          <a
            href="https://github.com/Arpan-mohanty26/"
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arpankumarmohanty-/"
            className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
