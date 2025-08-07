import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-800" />
 
      <div
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        data-aos="fade-up"
      />
      <div
        className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        data-aos="fade-down"
        data-aos-delay="500"
      />
      <div
        className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
        data-aos="fade-up"
        data-aos-delay="1000"
      />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.03\\'%3E%3Ccircle cx=\\'30\\' cy=\\'30\\' r=\\'1\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl">
        <div className="mb-8">
          <h1
            className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight hover:scale-110 transition-transform duration-350"
            data-aos="fade-up"
          >
            <span className='text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text'>Arpan </span><span>Kumar</span>
          </h1>
           <h1
            className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight hover:scale-110 transition-transform duration-350"
            data-aos="fade-up"
          >
            Mohanty
          </h1>
        </div>

        <p
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Engineering Seamless Web Experiences with{' '}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">
             Modern Tech & AI
          </span>
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600  text-white rounded-full font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform"
          >
            Get In Touch →
          </a>
        </div><br/>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
}
