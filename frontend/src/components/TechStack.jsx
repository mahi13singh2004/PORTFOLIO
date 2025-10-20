import React from 'react'

const TechStack = () => {
    const technologies = [
        { name: 'React', icon: '⚛️', color: 'bg-blue-600' },
        { name: 'JavaScript', icon: '🟨', color: 'bg-yellow-600' },
        { name: 'TypeScript', icon: '🔷', color: 'bg-blue-700' },
        { name: 'Node.js', icon: '🟢', color: 'bg-green-600' },
        { name: 'Python', icon: '🐍', color: 'bg-blue-500' },
        { name: 'MongoDB', icon: '🍃', color: 'bg-green-700' },
        { name: 'PostgreSQL', icon: '🐘', color: 'bg-blue-800' },
        { name: 'Docker', icon: '🐳', color: 'bg-blue-600' },
        { name: 'AWS', icon: '☁️', color: 'bg-orange-600' },
        { name: 'Git', icon: '📚', color: 'bg-red-600' },
        { name: 'Tailwind CSS', icon: '🎨', color: 'bg-cyan-600' },
        { name: 'Next.js', icon: '▲', color: 'bg-gray-700' }
    ]

    const categories = [
        {
            title: 'Frontend',
            techs: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js']
        },
        {
            title: 'Backend',
            techs: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL']
        },
        {
            title: 'DevOps & Tools',
            techs: ['Docker', 'AWS', 'Git']
        }
    ]

    return (
        <section id="tech-stack" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Tech <span className="gradient-text">Stack</span>
                </h2>

                {/* All Technologies Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="text-4xl mb-3">{tech.icon}</div>
                            <h3 className="text-sm font-semibold text-gray-300">{tech.name}</h3>
                        </div>
                    ))}
                </div>

                {/* Categorized Technologies */}
                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4 text-purple-400">{category.title}</h3>
                            <div className="space-y-3">
                                {category.techs.map((tech, techIndex) => {
                                    const techData = technologies.find(t => t.name === tech)
                                    return (
                                        <div key={techIndex} className="flex items-center space-x-3">
                                            <div className={`w-3 h-3 rounded-full ${techData?.color || 'bg-gray-600'}`}></div>
                                            <span className="text-gray-300">{tech}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack