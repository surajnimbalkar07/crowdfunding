import React from 'react'
import Identicons from 'react-identicons'
import { FaEthereum } from 'react-icons/fa'
import { setGlobalState } from '../store'

const ProjectDetails = () => {
    return (
        <div className="pt-24 mb-5 px-6 flex justify-center">
            <div className="flex justify-center flex-col md:w-2/3">
                <div className="flex justify-start items-start
        sm:space-x-4 flex-wrap">
                    <img src="https://www.crowdfunding.com/wp-content/uploads/2022/03/donatebox-2048x1921.jpg"
                        alt="title"
                        className="rounded-xl h-64 object-cover sm:w-1/3 w-full" />


                    <div className="flex-1 sm:py-0 py-4">
                        <div className="flex flex-col justify-start flex-wrap">
                            <h5 className="text-gray-900 text-xl font-medium mb-2">Creating household</h5>
                            <small className='text-gray-500'>
                                2 days left
                            </small>
                        </div>

                        <div className="flex justify-between items-center w-full pt-1">
                            <div className='flex justify-start space-x-2'>

                                <Identicons
                                    className="rounded-full shadow-md"
                                    string="0x3...13frg"
                                    size={15}
                                />
                                <small className="text-gray-700">0x3...13frg</small>
                                <small className="text-gray-500 font-bold">{18} Backing</small>
                            </div>

                            <div className='font-bold'>
                                <small className='text-gray-500'>open</small>
                            </div>
                        </div>
                    </div>



                </div>

                <p className="text-sm font-light mt-2">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit quae ipsam itaque, accusamus ab corrupti iste nostrum. Maiores unde ducimus possimus tempora corrupti distinctio neque maxime repudiandae. Exercitationem dolores aperiam iure a deserunt mollitia deleniti necessitatibus modi esse est aut, ut odit eveniet.ipsum dolor sit amet consectetur adipisicing elit. Animi, quas optio ratione unde beatae neque labore. Expedita tempore esse quidem.</p>
                <div className="w-full overflow-hidden bg-gray-300 mt-4">
                    <div className="bg-green-600 text-xs font-medium
              text-green-100 text-center p-0.5 leading-none
              rounded-l-full h-1 overflow-hidden max-w-full" style={{ width: '50%' }}>

                    </div>
                </div>

                <div className="flex justify-between items-center font-bold mt-2">
                    <small>{15} ETH Raised</small>
                    <small className="flex justify-start items-center">
                        <FaEthereum />
                        <span>{20} ETH</span>
                    </small>
                </div>

                <div className="flex justify-start items-center space-x-2 mt-4">
                    <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-green-600
    text-white font-medium text-xs leading-tight uppercase
    rounded-full shadow-md hover:bg-green-700"
    onClick={() => setGlobalState('backModal', 'scale-100')}
                    >
                        Back Project
                    </button>

                    <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-orange-600
                        text-white font-medium text-xs leading-tight uppercase
                        rounded-full shadow-md hover:bg-orange-700"

                    >
                        Payout
                    </button>

                    <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-gray-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-gray-700"
                          onClick={() =>
                            setGlobalState('updateModal', 'scale-100')
                          }
                        >
                          Edit
                        </button>

                    <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-red-600
                          text-white font-medium text-xs leading-tight uppercase
                          rounded-full shadow-md hover:bg-red-700"
                          onClick={() =>
                            setGlobalState('deleteModal', 'scale-100')
                          }
                    >
                        Delete
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails
