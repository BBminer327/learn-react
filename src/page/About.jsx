import React from 'react'
import Navbar from '../component/Navbar'
import '../assets/index.css'

function About() {
  return (
    <div className='flex h-screen'>
      <Navbar />
      <section className='flex-1 p-6 bg-gray-100'>
          <h1 className='text-2xl font-bold'>About</h1>
      </section>
    </div>  
  )
}

export default About
