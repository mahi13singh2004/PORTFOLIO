import React from 'react'
import sehat from "../assets/sehat.png"
import studybuddy from "../assets/studybuddy.png"
import JobWallah from "../assets/JobWallah.png"

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
            title: 'JobWallah',
            description: 'JobWallah helps users build resumes, analyze job descriptions with AI, discover relevant jobs, and track applications — like having a career coach, recruiter, and job tracker all in one place.',
            image: JobWallah,
            technologies: ['React', 'Tailwind', 'Express', 'MongoDB', 'Gemini', 'Razorpay'],
            github: 'https://github.com/mahi13singh2004/JobWallah',
            live: 'https://jobwallah-frontend.onrender.com/',
            featured: true
        },
        {
            title: 'SEHAT',
            description: 'A healthcare platform for booking appointments and managing health records.',
            image: sehat,
            technologies: ['React', 'Tailwind', 'Express', 'MongoDB'],
            github: 'https://github.com/mahi13singh2004/SEHAT',
            live: 'https://sehatf-rontend.onrender.com/',
            featured: false
        },
        {
            title: 'Samvaad',
            description: 'A chat application designed to foster meaningful conversations and connect people seamlessly.',
            image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Samvaad',
            technologies: ['MERN'],
            github: 'https://github.com/mahi13singh2004/Samvaad',
            live: 'https://samvaad-wyqq.onrender.com/',
            featured: false
        },
        {
            title: 'CodeBaba',
            description: 'An AI-powered code editor that helps you detect bugs and suggests real-time fixes as you type.',
            image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=CodeBaba',
            technologies: ['React', 'Tailwind CSS', 'Gemini'],
            github: 'https://github.com/mahi13singh2004/CodeBaba-Frontend',
            live: 'https://code-baba-frontend.vercel.app/',
            featured: false
        }
    ]

    return (
        <section id="projects" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">
                    My <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">Projects</span>
                </h2>

                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-slate-300">Featured Projects</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.filter(project => project.featured).map((project, index) => (
                            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-700">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h4 className="text-xl font-semibold mb-3 text-white">{project.title}</h4>
                                    <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-xs border border-slate-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
                                        >
                                            <span>📚</span>
                                            <span>Code</span>
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-slate-400 hover:text-slate-200 transition-colors"
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

                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-slate-300">Other Projects</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.filter(project => !project.featured).map((project, index) => (
                            <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700">
                                <h4 className="text-lg font-semibold mb-2 text-white">{project.title}</h4>
                                <p className="text-slate-400 mb-3 text-sm">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-slate-700 px-2 py-1 rounded text-xs text-slate-300 border border-slate-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors text-sm"
                                    >
                                        � Code
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
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