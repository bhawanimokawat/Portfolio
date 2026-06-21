import React from 'react'

const ProjectCard = ({ image,
    title,
    desc,
    tech,
    github,
    demo, }) => {



    return (
        <div>
            <div
                className="group bg-[#1a1116] rounded-3xl overflow-hidden border  border-[#2a1b20] hover:border-orange-500 hover:-translate-y-3 duration-300 transition-all relative"
            >

                <img
                    src={image}
                    alt={title}

                    className="w-full h-56 object-cover group-hover:scale-105 duration-300"
                />

                <div className="p-6">

                    <h3
                        className="text-2xl font-semibold"
                    >

                        {title}

                    </h3>

                    <p
                        className="text-gray-400 mt-4 leading-7"
                    >

                        {desc}

                    </p>

                    <div className="flex flex-wrap gap-2 mt-6">

                        {tech.map((item) => (

                            <span

                                key={item}

                                className="bg-orange-500/20 text-orange-400 px-3 py-2 rounded-full text-lg"
                            >

                                {item}

                            </span>

                        ))}

                    </div>

                    <div className="flex gap-4 mt-8">

                        <a

                            href={github}

                            className="flex-1 text-center border border-orange-500 py-3 rounded-xl "
                        >

                            Github

                        </a>

                        <a

                            href={demo}

                            className="flex-1 text-center  bg-orange-500 py-3 rounded-xl hover:bg-orange-400"
                        >

                            Live Demo

                        </a>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProjectCard
