import React from 'react'

const Skills = () => {
    const skills = [

        {
            title: "Frontend",

            items: [

                "HTML",

                "CSS",

                "JavaScript",

                "React",

                "Tailwind CSS",
            ],
        },

        {
            title: "Backend",

            items: [

                "Node.js",

                "Express.js",
            ],
        },

        {
            title: "Database",

            items: [

                "MongoDB",
            ],
        },

        {
            title: "Tools",

            items: [

                "Git",

                "GitHub",

                "VS Code",
            ],
        },
        {
            title: "Progaming Language",

            items: [

                "C",

                "C++",

            ],
        },

    ];
    return (
        <div>
            <section
                className="max-w-7xl mx-auto px-6 lg:px-16 py-24"
            >

                <h2
                    className="text-5xl font-bold text-center"
                >

                    My

                    <span className="text-orange-500">

                        {" "}Skills

                    </span>

                </h2>

                <p
                    className="text-centertext-gray-200 mt-4 text-2xl font-stretch-50% "
                >

                    Technologies I work with.

                </p>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
                >

                    {skills.map((skill, index) => (

                        <div

                            key={index}

                            className="bg-[#1a1116] p-8 rounded-3xl border border-[#2a1b20] hover:border-orange-500 duration-300"
                        >

                            <h3
                                className="text-2xl font-semibold mb-6"
                            >

                                {skill.title}

                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {skill.items.map((item) => (

                                    <span

                                        key={item}

                                        className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full"
                                    >

                                        {item}

                                    </span>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

            </section>
        </div>
    )
}

export default Skills
