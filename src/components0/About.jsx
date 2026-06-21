import React from 'react'
import profile from "../assets/profile.png";

const About = () => {
    return (
        <div>
            <section
                className="max-w-7xl mx-auto px-6 lg:px-16 py-24"
            >

                <div
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >

                    {/* LEFT */}

                    <div className="flex justify-center">

                        <img

                            src={profile}

                            alt="Bhawani"

                            className="w-[320px] lg:w-[450px] rounded-3xl object-cover"
                        />

                    </div>

                    {/* RIGHT */}

                    <div>

                        <h2
                            className="text-5xl font-bold"
                        >

                            About

                            <span className="text-orange-500">

                                {" "}Me

                            </span>

                        </h2>

                        <p
                            className=" text-gray-400 mt-8 leading-8 text-lg"
                        >

                            I am a BCA student and an aspiring MERN Stack Developer.

                            I enjoy building responsive web applications and continuously learning modern technologies.

                            Currently, I am looking for internship opportunities to gain real-world experience.

                        </p>

                        <div
                            className="grid grid-cols-2 gap-4 mt-10"
                        >

                            <div className="bg-[#1a1116] p-4 rounded-2xl">

                                🎓 BCA Student

                            </div>

                            <div className="bg-[#1a1116] p-4 rounded-2xl">

                                📍 Jaipur

                            </div>

                            <div className="bg-[#1a1116] p-4 rounded-2xl">

                                💻 MERN Stack

                            </div>

                            <div className="bg-[#1a1116] p-4 rounded-2xl">

                                🚀 Open to Internship

                            </div>

                        </div>

                        <button
                            className="mt-10  bg-orange-500 px-8 py-4 rounded-xl"
                        >

                            Download Resume

                        </button>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default About
