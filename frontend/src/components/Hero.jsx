import React from 'react'
import image from "../assets/image.jpg"

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-8">
                    <img
                        src={image}
                        alt="Profile"
                        className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-slate-600 shadow-2xl ring-4 ring-slate-700/50"
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                    Hi, I'm <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">Mahi Singh</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-medium">
                    Full Stack Developer & Competitive Programmer
                </p>

                <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Passionate about creating innovative solutions and building amazing user experiences with modern technologies
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="https://drive.google.com/file/d/12JnNKY3ji5odxeVdxyEcsIbeyNCK3Lp3/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-slate-600"
                    >
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-slate-600 hover:bg-slate-700 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        Get In Touch
                    </a>
                </div>

                <div className="mt-16">
                    <div className="animate-bounce">
                        <svg className="w-6 h-6 mx-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero