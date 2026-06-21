import React from 'react'
import profile from "../assets/profile.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";





const Hero = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE */}

                    <div>

                        <p className="text-orange-500 font-semibold uppercase tracking-wider">

                            Full Stack Developer & MERN Enthusiast

                        </p>

                        <h1 className="mt-6 text-5xl lg:text-7xl font-bold leading-tight">

                            Hi, I'm

                            <span className="text-orange-500">

                                {" "}Bhawani Singh
                                

                            </span>

                        </h1>

                        <p className="mt-8 text-gray-400 max-w-xl text-lg leading-8">

                            I create digital experiences by combining technology,

                            design and problem solving.

                            Let's build something amazing together.

                        </p>

                        <div className="flex gap-6 mt-10">

                            <button className="bg-orange-500 px-8 py-4 rounded-xl">

                                Contact Me

                            </button>

                            <button className="border border-orange-500 px-8 py-4 rounded-xl">

                                Download CV

                            </button>

                        </div>
                       <div className="flex gap-12 mt-14">

                                <div>

                                    <h2 className="text-4xl font-bold text-orange-500">

                                        5+

                                    </h2>

                                    <p className="text-gray-400">

                                        Projects

                                    </p>

                                </div>

                                <div>

                                    <h2 className="text-4xl font-bold text-orange-500">

                                        1+

                                    </h2>

                                    <p className="text-gray-400">

                                        Years

                                    </p>

                                </div>

                                <div>

                                    <h2 className="text-4xl font-bold text-orange-500">

                                        100+

                                    </h2>

                                    <p className="text-gray-400">

                                        Hours Coding

                                    </p>

                                </div>

                            </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div
                        className="flex justify-center relative"
                    >

                        <div
                            className="absolute w-[350px] h-[350px] bg-orange-500 rounded-full blur-[120px] opacity-20"
                        ></div>

                        <img
                            src={profile}
                            alt="Bhawani"

                            className="relative z-10 w-[550px] object-contain"
                        />

                    </div>

                </div>


                <div
                    className="flex gap-10 mt-14 text-5xl text-gray-500 "
                >

                    <FaReact />

                    <FaNodeJs />

                    <SiMongodb />

                    <SiTailwindcss />

                </div>

            </section>

        </div>
    )
}

export default Hero
