import React from 'react'
import sehat from "../assets/sehat.png"
import studybuddy from "../assets/studybuddy.png"

const Projects = () => {
    const projects = [
        {
            title: 'StudyBuddy',
            description: 'A full-stack AI-powered productivity app built with ❤️ using the MERN stack, designed to help students and learners manage their notes, summarize content, chat with documents, and boost retention with flashcards — all in one place',
            image: studybuddy,
            technologies: ['React', 'Node.js', 'MongoDB', 'Gemini', 'Socket.io'],
            github: 'https://github.com/mahi13singh2004/StudyBuddy',
            live: 'https://studybuddy-frontend-9meh.onrender.com',
            featured: true
        },
        {
            title: 'SEHAT',
            description: 'Sehat helps users book appointments, manage health records, talk to AI, and even get Telegram reminders for their meds. It’s like having a doctor, pharmacist, therapist, and assistant — all in one tab.',
            image: sehat,
            technologies: ['React', 'Tailwind', 'Express', 'MongoDB', 'Gemini', 'Pinata'],
            github: 'https://github.com/mahi13singh2004/SEHAT',
            live: 'https://sehatf-rontend.onrender.com/',
            featured: true
        },
        {
            title: 'Samvaad',
            description: 'Samvaad is a chat application designed to foster meaningful conversations. It connects people seamlessly across digital spaces, providing a personal and engaging communication experience.',
            image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Weather+App',
            technologies: ['Mern'],
            github: 'https://github.com/mahi13singh2004/Samvaad',
            live: 'https://samvaad-wyqq.onrender.com/',
            featured: false
        },
        {
            title: 'CodeBaba',
            description: 'An AI-powered code editor that helps you detect bugs and suggests real-time fixes as you type.',
            image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio',
            technologies: ['React', 'Tailwind CSS', 'Gemini'],
            github: 'https://github.com/mahi13singh2004/CodeBaba-Frontend',
            live: 'https://code-baba-frontend.vercel.app/',
            featured: false
        }
    ]

    return (
        <section id="projects" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    My <span className="gradient-text">Projects</span>
                </h2>

                {/* Featured Projects */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-purple-400">Featured Projects</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.filter(project => project.featured).map((project, index) => (
                            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h4 className="text-xl font-semibold mb-3 text-white">{project.title}</h4>
                                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-purple-600 px-3 py-1 rounded-full text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <span>📚</span>
                                            <span>Code</span>
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                                        >
                                            <span>🚀</span>
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Projects */}
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-purple-400">Other Projects</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.filter(project => !project.featured).map((project, index) => (
                            <div key={index} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300">
                                <h4 className="text-lg font-semibold mb-2 text-white">{project.title}</h4>
                                <p className="text-gray-400 mb-3 text-sm">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        📚 Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                                    >
                                        🚀 Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects