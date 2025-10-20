import React from 'react'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import jsImg from '../assets/js.png'
import reactImg from '../assets/react.png'
import nodeImg from '../assets/node.png'
import mongoImg from '../assets/mongo.png'
import expressImg from '../assets/express.png'
import nextImg from '../assets/next.png'
import javaImg from '../assets/java.png'
import cppImg from '../assets/c++.png'

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-4xl font-semibold mb-6 text-purple-400">Who I Am</h3>
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            Leveraging the MERN stack (MongoDB, Express.js, React, and Node.js) for both frontend and backend development, I have crafted projects that blend powerful functionality with intuitive design. My work reflects my enthusiasm for creating efficient, scalable solutions and my dedication to delivering exceptional user experiences.
                        </p>
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            When I'm not development, I spend my time practicing competitive programming and honing my skills in data structures and algorithms.".
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <span className="bg-purple-600 px-4 py-2 rounded-full text-sm">Problem Solver</span>
                            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">Team Player</span>
                            <span className="bg-green-600 px-4 py-2 rounded-full text-sm">Quick Learner</span>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-semibold mb-6 text-purple-400">Skills & Expertise</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-800 p-3 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                                <img src={htmlImg} alt="HTML" className="w-8 h-8 object-contain" />
                                <span className="text-gray-300 text-sm">HTML</span>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                                <img src={cssImg} alt="CSS" className="w-8 h-8 object-contain" />
                                <span className="text-gray-300 text-sm">CSS</span>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                                <img src={jsImg} alt="JavaScript" className="w-8 h-8 object-contain" />
                                <span className="text-gray-300 text-sm">JavaScript</span>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                                <img src={reactImg} alt="React" className="w-8 h-8 object-contain" />
                                <span className="text-gray-300 text-sm">React</span>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                                <img src={nextImg} alt="Next.js" className="w-8 h-8 object-contain" />
                                <span className="text-gray-300 text-sm">Next.js</span>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                                <img src={mongoImg} alt="MongoDB" className="w-8 h-8 object-contain" />
                                <span className="text-gray-300 text-sm">MongoDB</span>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                                <img src={nodeImg} alt="Node.js" className="w-8 h-8 object-contain" />
                                <span className="text-gray-300 text-sm">Node.js</span>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                                <img src={expressImg} alt="Express" className="w-8 h-8 object-contain" />
                                <span className="text-gray-300 text-sm">Express</span>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                                <img src={javaImg} alt="Java" className="w-8 h-8 object-contain" />
                                <span className="text-gray-300 text-sm">Java</span>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                                <img src={cppImg} alt="C++" className="w-8 h-8 object-contain" />
                                <span className="text-gray-300 text-sm">C++</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About