import React from 'react'

const Contact = () => {
    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'mahi13singh2004@gmail.com',
            link: 'mailto:mahi13singh2004@gmail.com'
        },
        {
            icon: '📱',
            label: 'Phone',
            value: '+91 8085333790',
            link: 'tel:+918085333790'
        },
        {
            icon: '📍',
            label: 'Location',
            value: 'Bengaluru, Karnataka',
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'mahisingh13102004',
            link: 'https://www.linkedin.com/in/mahi13singh2004/'
        }
    ]



    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">
                    Get In <span className="gradient-text">Touch</span>
                </h2>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Card */}
                    <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
                        <h3 className="text-2xl font-semibold mb-6 text-center text-purple-400">Let's Connect</h3>
                        <p className="text-gray-400 mb-8 text-center leading-relaxed">
                            I'm always interested in new opportunities, collaborations, and interesting projects.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        {/* Contact Details */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    <span className="text-2xl">{info.icon}</span>
                                    <div>
                                        <div className="text-sm text-gray-400">{info.label}</div>
                                        <div className="text-white">{info.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>


                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact