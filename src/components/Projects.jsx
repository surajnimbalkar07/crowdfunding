import React from 'react'
import { Link } from 'react-router-dom'
import Identicons from 'react-identicons'

const Projects = () => {
    return (
        <div className='flex flex-col px-6'>
            <div className='flex justify-center items-center flex-wrap'>
                {Array(4).fill().map((card, i) => (
                    <ProjectCard key={i} id={i} project={card} />

                ))}

            </div>

        </div>
    )
}




const ProjectCard = ({ project,id}) => {
    return (
        <div id='projects' className='rounded-lg shadow-lg bg-white w-72 m-4'>
            <Link to={"/projects/" +id}>
                <img src="https://www.crowdfunding.com/wp-content/uploads/2022/03/donatebox-2048x1921.jpg"
                    alt="title"
                    className='rounded-xl w-full object-cover h-64' />
           
            <div className="p-4">
                <div>
                    <h5>Creating a Household Robot</h5>
                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center mb-3'>
                            <Identicons className="rounded-full shadow-md" string="hello" size={15} />
                            <small className='text-gray-700'>0x15...1ea2</small>


                        </div>
                        <small className='text-gray-500'>
                            2 days left
                        </small>
                    </div>
                    <div className='w-full bg-gray-300'>
                        <div className='bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-l-full '
                            style={{ width: '50%' }}></div>
                    </div>
                    <div className='flex justify-between flex-wrap mt-4 mb-2 items-center text-gray-500 font-bold'>
                        <small className='text-gray-500 '>{14} Backers</small>
                        <div>
                            <small className='text-green-500'>Open</small>
                        </div>
                    </div>


                </div>

            </div>
            </Link>
        </div>
    )

}

export default Projects

