import React from 'react'
import image from "../assets/image.jpg"

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-8">
                    <img
                        src={image}
                        alt="Profile"
                        className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-purple-500 shadow-2xl"
                    />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Hi, I'm <span className="gradient-text">Mahi Singh</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                    Full Stack Developer & Competitive Programmer
                </p>

                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    Passionate about creating innovative solutions and building amazing user experiences
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="/resume.pdf"
                        download
                        className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-purple-600 hover:bg-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        Get In Touch
                    </a>
                </div>

                <div className="mt-16">
                    <div className="animate-bounce">
                        <svg className="w-6 h-6 mx-auto text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero