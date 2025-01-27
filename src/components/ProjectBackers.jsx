import React from 'react'
import Identicons from 'react-identicons'
import { FaEthereum } from 'react-icons/fa'
const ProjectBackers = (backers) => {
    return (
        <div className="flex flex-col justify-center items-start md:w-2/3 px-6 mx-auto">
            <div
                className="max-h-[calc(100vh_-_25rem)] overflow-y-auto
        shadow-md rounded-md w-full mb-10"
            >
                <table className="min-w-full">
                    <thead className="border-b">
                        <tr>
                            <th
                                scope="col"
                                className="text-sm font-medium
                px-6 py-4 text-left"
                            >
                                Backer
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium
                px-6 py-4 text-left"
                            >
                                Donations
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium
                px-6 py-4 text-left"
                            >
                                Refunded
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium
                px-6 py-4 text-left"
                            >
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody className='border-b border-gray-200'>
                        {Array(5).fill().map((backer, index) => (
                            <tr key={index} className="border-b border-gray-200">
                                <td
                                    className="text-sm font-light
           px-6 py-4 whitespace-nowrap"
                                >
                                    <div className="flex justify-start items-center space-x-2">
                                        <Identicons
                                            className="rounded-full shadow-md"
                                            string={"0x2e...042a" + index}
                                            size={15}
                                        />
                                        <span>sd....12erf{index}</span>
                                    </div>
                                </td>
                                <td
                                    className="text-sm font-light
                       px-6 py-4 whitespace-nowrap"
                                >
                                    <small className="flex justify-start items-center space-x-1">
                                        <FaEthereum />
                                        <span className="text-gray-700 font-medium">
                                            {33+index} ETH
                                        </span>
                                    </small>
                                </td>
                                <td
                                    className="text-sm font-light
           px-6 py-4 whitespace-nowrap"
                                >
                                    {false ? "yes" : "no"}
                                </td>
                                <td
                                    className="text-sm font-light
           px-6 py-4 whitespace-nowrap"
                                >
                                    {new Date().getTime()}
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
        </div>
    )
}

const Backer = ({ backer }) => (
    <tr className="border-b border-gray-200">
        <td
            className="text-sm font-light
        px-6 py-4 whitespace-nowrap"
        >
            <div className="flex justify-start items-center space-x-2">
                <Identicons
                    className="rounded-full shadow-md"
                    string="0x2e...042a"
                    size={15}
                />
                <span>sd....12erf</span>
            </div>
        </td>
        <td
            className="text-sm font-light
                    px-6 py-4 whitespace-nowrap"
        >
            <small className="flex justify-start items-center space-x-1">
                <FaEthereum />
                <span className="text-gray-700 font-medium">
                    {33} ETH
                </span>
            </small>
        </td>
        <td
            className="text-sm font-light
        px-6 py-4 whitespace-nowrap"
        >
            {false ? "yes" : "no"}
        </td>
        <td
            className="text-sm font-light
        px-6 py-4 whitespace-nowrap"
        >
            {new Date().getTime()}
        </td>
    </tr>
)


export default ProjectBackers
