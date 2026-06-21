import React from 'react'

const Contact = () => {
  return (
    <div>
      <section
      className="max-w-7xl mx-auto px-6 lg:px-16 py-24"
    >

      <div
        className=" bg-[#1a1116] rounded-3xl p-10 border border-[#2a1b20] "
      >

        <h2
          className=" text-5xl  font-bold text-center"
        >

          Get

          <span className="text-orange-500">

            {" "}In Touch

          </span>

        </h2>

        <p
          className="text-center text-gray-400 mt-4 max-w-2xl mx-auto"
        >

          I am currently open to internship opportunities and collaborations.

        </p>

        <div
          className="grid md:grid-cols-2 gap-6 mt-16
          "
        >

          <div className="bg-[#24161A] p-6 rounded-2xl">

            📧 Your Email

          </div>

          <div className="bg-[#24161A] p-6 rounded-2xl">

            💼 LinkedIn

          </div>

          <div className="bg-[#24161A] p-6 rounded-2xl">

            🐙 Github

          </div>

          <div className="bg-[#24161A] p-6 rounded-2xl">

            📍 Jaipur, Rajasthan

          </div>

        </div>

        <div className="flex justify-center mt-12">

          <button
            className=" bg-orange-500 px-10 py-4 rounded-xl hover:scale-105 duration-300
            "
          >

            Send Message

          </button>

        </div>

      </div>

    </section>
    </div>
  )
}

export default Contact
