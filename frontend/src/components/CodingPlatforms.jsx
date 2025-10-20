import React, { useState } from 'react'
import githubImg from '../assets/github.png'
import leetcodeImg from '../assets/leetcode.png'
import codeforcesImg from '../assets/codeforces.png'
import codechefImg from '../assets/codechef.jpg'
import atcoderImg from '../assets/atcoder.png'
import gfgImg from '../assets/gfg.png'
import naukriImg from '../assets/naukri.png'

const CodingPlatforms = () => {
    const [activeTab, setActiveTab] = useState('platforms')

    const platforms = [
        {
            name: 'LeetCode',
            username: 'mahisingh1310',
            stats: 'Knight (Top 5%)',
            icon: leetcodeImg,
            gradient: 'from-orange-500 to-red-500',
            link: 'https://leetcode.com/u/mahisingh1310/',
            highlight: true
        },
        {
            name: 'CodeChef',
            username: 'mahisingh04',
            stats: '4⭐ Rating (1827)',
            icon: codechefImg,
            gradient: 'from-amber-500 to-orange-500',
            link: 'https://www.codechef.com/users/mahisingh04',
            highlight: true
        },
        {
            name: 'CodeForces',
            username: 'mahi13',
            icon: codeforcesImg,
            stats: 'Specialist (1402)',
            gradient: 'from-blue-500 to-cyan-500',
            link: 'https://codeforces.com/profile/mahi13'
        },
        {
            name: 'GitHub',
            username: 'mahi13singh2004',
            stats: '10+ Repositories',
            icon: githubImg,
            gradient: 'from-gray-600 to-gray-800',
            link: 'https://github.com/mahi13singh2004'
        },
        {
            name: 'GeeksforGeeks',
            username: 'mahisingh1310',
            stats: '350+ Problems',
            icon: gfgImg,
            gradient: 'from-green-500 to-emerald-600',
            link: 'https://www.geeksforgeeks.org/user/mahisingh1310/'
        },
        {
            name: 'AtCoder',
            username: 'Mahi13singh2004',
            stats: '6 Kyu (821)',
            icon: atcoderImg,
            gradient: 'from-purple-500 to-pink-500',
            link: 'https://atcoder.jp/users/Mahi13singh2004'
        },
        {
            name: 'Naukri Code360',
            username: 'mahisingh',
            stats: '315+ Problems',
            icon: naukriImg,
            gradient: 'from-blue-600 to-indigo-700',
            link: 'https://www.naukri.com/code360/profile/mahisingh'
        }
    ]

    const achievements = [
        {
            title: 'KEPLOY Fellowship 2025',
            description: 'Selected in top 1K from 18.5K+ applicants',
            icon: '🧠',
            date: '2025',
            category: 'Fellowship',
            color: 'from-purple-500 to-indigo-600',
            link: 'https://www.linkedin.com/posts/mahi13singh2004_better-late-than-never-i-just-discovered-activity-7340370861222150145-8N-X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETSSFMBmR4MhpcZaAOxbN1FHYx85jpkJGs'
        },
        {
            title: 'HackAthena 2025 Runner-up',
            description: 'Runner-up among 1,259 teams nationally',
            icon: '🥈',
            date: '2025',
            category: 'Hackathon',
            color: 'from-gray-400 to-gray-600',
            link: 'https://www.linkedin.com/posts/mahi13singh2004_from-1259-teams-to-the-final-15and-we-activity-7302025514611879936-4rkq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETSSFMBmR4MhpcZaAOxbN1FHYx85jpkJGs'
        },
        {
            title: 'TOPCODERS-DSA Winner',
            description: 'Winner among 514 participants at JSSATE',
            icon: '🥇',
            date: '2024',
            category: 'Competition',
            color: 'from-yellow-400 to-orange-500',
            link: 'https://www.linkedin.com/posts/mahi13singh2004_wrapping-up-the-semester-on-a-high-note-activity-7277608291034087424-Ruzz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETSSFMBmR4MhpcZaAOxbN1FHYx85jpkJGs'
        },
        {
            title: 'ADVAYA Hackathon',
            description: '3rd among 100+ teams, recognized for innovation in healthcare technology',
            icon: '🥉',
            date: '2024',
            category: 'Hackathon',
            color: 'from-amber-600 to-orange-600',
            link: 'https://www.linkedin.com/posts/mahi13singh2004_dear-connections-im-thrilled-to-share-activity-7316883200385945600-UgkQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETSSFMBmR4MhpcZaAOxbN1FHYx85jpkJGs'
        },
        {
            title: 'Think-Tank Ideathon Winner',
            description: 'Winner at BNMIT among 100+ teams',
            icon: '💡',
            date: '2024',
            category: 'Ideathon',
            color: 'from-blue-400 to-cyan-500',
            link: 'https://www.linkedin.com/posts/mahi13singh2004_%F0%9D%90%9A%F0%9D%90%A7%F0%9D%90%9D-%F0%9D%90%AD%F0%9D%90%A1%F0%9D%90%9E-%F0%9D%90%AC%F0%9D%90%AD%F0%9D%90%AB%F0%9D%90%9E%F0%9D%90%9A%F0%9D%90%A4-%F0%9D%90%9C%F0%9D%90%A8%F0%9D%90%A7%F0%9D%90%AD%F0%9D%90%A2-activity-7275589990225473537-Olmb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETSSFMBmR4MhpcZaAOxbN1FHYx85jpkJGs'
        }
    ]

    return (
        <section id="coding-platforms" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-bold text-center mb-4">
                    My <span className="gradient-text">Journey</span>
                </h2>
                <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                    Exploring the world of competitive programming and achieving milestones
                </p>

                <div className="flex justify-center mb-12">
                    <div className="bg-gray-800 p-1 rounded-full">
                        <button
                            onClick={() => setActiveTab('platforms')}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'platforms'
                                ? 'bg-purple-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            🚀 Coding Platforms
                        </button>
                        <button
                            onClick={() => setActiveTab('achievements')}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'achievements'
                                ? 'bg-purple-600 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            🏆 Achievements
                        </button>
                    </div>
                </div>
                {activeTab === 'platforms' && (
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {platforms.filter(p => p.highlight).map((platform, index) => (
                                <div key={index} className="group relative">
                                    <div className="absolute inset-0 bg-gray-800 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                                    <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="p-3 rounded-xl bg-gray-800">
                                                    <img src={platform.icon} alt={platform.name} className="w-8 h-8 object-contain" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                                                    <p className="text-gray-400">@{platform.username}</p>
                                                </div>
                                            </div>
                                            <a
                                                href={platform.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-gray-800 hover:bg-purple-600 transition-colors"
                                            >
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className={`text-2xl font-bold ${platform.name === 'LeetCode' ? 'bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent' :
                                            platform.name === 'CodeChef' ? 'bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent' :
                                                'text-white'
                                            }`}>
                                            {platform.stats}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-center">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl">
                                    {platforms.filter(p => !p.highlight).slice(0, 3).map((platform, index) => (
                                        <a
                                            key={index}
                                            href={platform.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-gray-900 p-10 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 min-h-[180px] w-full"
                                        >
                                            <div className="flex items-center space-x-3 mb-4">
                                                <img src={platform.icon} alt={platform.name} className="w-10 h-10 object-contain rounded-lg" />
                                                <div>
                                                    <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">{platform.name}</h4>
                                                    <p className="text-sm text-gray-500">@{platform.username}</p>
                                                </div>
                                            </div>
                                            <p className="text-purple-400 font-medium">{platform.stats}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
                                    {platforms.filter(p => !p.highlight).slice(3, 5).map((platform, index) => (
                                        <a
                                            key={index + 3}
                                            href={platform.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group bg-gray-900 p-10 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 min-h-[180px] w-full"
                                        >
                                            <div className="flex items-center space-x-3 mb-4">
                                                <img src={platform.icon} alt={platform.name} className="w-10 h-10 object-contain rounded-lg" />
                                                <div>
                                                    <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">{platform.name}</h4>
                                                    <p className="text-sm text-gray-500">@{platform.username}</p>
                                                </div>
                                            </div>
                                            <p className="text-purple-400 font-medium">{platform.stats}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'achievements' && (
                    <div className="grid md:grid-cols-2 gap-8">
                        {achievements.map((achievement, index) => (
                            <a
                                key={index}
                                href={achievement.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative cursor-pointer"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                                <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                                    <div className="flex items-start space-x-4">
                                        <div className="text-4xl">{achievement.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                                    {achievement.title}
                                                </h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} text-white`}>
                                                    {achievement.category}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 mb-3 leading-relaxed">{achievement.description}</p>
                                            <div className="text-sm text-purple-400 font-medium">{achievement.date}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default CodingPlatforms