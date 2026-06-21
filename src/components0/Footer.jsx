import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="border-t border-[#2a1b20] py-8 mt-16 "
            >

                <div
                    className="max-w-7xl mx-autopx-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4"
                >

                    <div>

                        <h3 className="text-2xl font-bold">

                            Bhawani

                            <span className="text-orange-500">

                                {" "}Mokawat

                            </span>

                        </h3>

                        <p className="text-gray-400">

                            MERN Stack Developer

                        </p>

                    </div>

                    <p className="text-gray-500">

                        © 2026 All Rights Reserved

                    </p>

                </div>

            </footer>
        </div>
    )
}

export default Footer
