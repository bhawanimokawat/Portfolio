import React from 'react'
import ThemeSwitcher from "../components/ThemeSwitcher";

const Navbar = () => {
    return (
        <div>
            <nav className="h-20 flex justify-between items-center px-20">

                <h1 className="text-3xl font-bold">

                    Bk<span className="text-orange-500">Portfolio</span>

                </h1>

             <ul className="hidden md:flex gap-8 text-2xl ">

                
                    <li>About Me</li>

                    <li>Skills</li>

                    <li>Projects</li>

                    <li>Contact</li>

                </ul>
                   <ThemeSwitcher />
            </nav>
        </div>
    )
}

export default Navbar
