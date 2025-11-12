import React from 'react'

const App = () => {
  return (
    <div>
      <nav className="bg-black text-white py-4 px-8 flex items-center justify-between">
        <div className="text-xl font-bold">
          <span className="text-green-600">Kaung</span> Khant
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="#portfolio" className="text-green-600 underline underline-offset-4">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-green-500 transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-green-500 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-500 transition-colors">
              About
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="bg-white text-black font-semibold py-2 px-5 rounded-full shadow hover:scale-105 transition-transform"
        >
          Contact Me
        </a>
      </nav>

      <section className='flex flex-col items-center justify-center text-center py-24'>
        <div>
          <p className='text-3xl font-bold text-black'>Hello</p>
          <h2 className='text-5xl font-extrabold text-green-700 mt-4 leading-tight'>I'm Kaung Khant Nay <br />a Full Stack Web Developer</h2>
        </div>
        <div>
          <p className='mt-6 max-w-2xl text-2xl text-gray-800 italic'>“Former Network & Data Center Engineer turned Full Stack Web Developer, passionate about building dynamic and user-friendly web applications.”</p>
          <a href="#projects"
          className="mt-8 inline-block bg-green-700 text-white  font-semibold py-2 px-6 rounded-full hover:bg-green-700 transition">
          View Projects
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
