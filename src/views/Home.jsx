import React from 'react'
import Hero from '../components/Hero'

import Projects from '../components/Projects'
import CreateProject from '../components/CreateProject'
import AddButton from '../components/AddButton'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Projects/>
      <div className='flex justify-center my-5 items-center'>
      <button
            type="button"
            className="inline-block px-6 py-2.5 bg-green-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-green-700"
          >
           Load More
          </button>
        
      </div>
      <CreateProject/>
      
      <AddButton/>
    </div>
  )
}

export default Home
