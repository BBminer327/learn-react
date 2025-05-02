import React from 'react'
import Navbar from '../component/Navbar'

function Home() {
  return (
    <>
      <Navbar />
      <section className='left-[256px] w-full h-full absolute'>
          <h1>Home</h1>
      </section>
    </>  
  );
}

export default Home
