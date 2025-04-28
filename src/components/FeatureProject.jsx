import React from 'react'
import Container from './Container'
import { FaClock, FaCircle, FaStar, FaRegDotCircle, FaCode } from "react-icons/fa";

const FeatureProject = () => {
    return (
        <div className='lg:py-[124px] py-[50px]'>

            <Container >
                <div className="bg-gradient-to-br from-white via-blue-50 to-white shadow lg:rounded-2xl pb-16">
                    <div>
                        <section className="text-center py-16 px-4 ">

                            <div data-aos="fade-up"  className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                                <FaCircle className="text-[8px] text-blue-500" />
                                Showcasing My Work
                            </div>


                            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Featured Projects
                            </h2>


                            <p data-aos="fade-up" className="text-gray-600 text-base max-w-2xl mx-auto mb-6">
                                Explore my latest web development projects showcasing modern technologies and design principles.
                            </p>


                            <a data-aos="fade-up"
                                href="#"
                                className="text-blue-600 font-medium text-sm inline-flex items-center gap-1 hover:underline"
                            >
                                View All Projects <span>→</span>
                            </a>
                        </section>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
                        <div data-aos="fade-up" ><div  className=" w-[85%] bg-white rounded-3xl shadow overflow-hidden group transition-all mx-auto duration-300 hover:scale-105 hover:shadow-2xl">

                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                                    alt="Project"
                                    className="w-full lg:h-60 h-40 object-cover group-hover:scale-105 duration-300 "
                                />


                                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                                    <FaStar className="text-xs" />
                                    Featured
                                </div>


                                <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    Volunteer
                                </div>


                                <div className="absolute bottom-2 left-2 transform -translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow">
                                        <FaRegDotCircle className="text-[10px]" />
                                        Archived
                                    </span>
                                </div>


                                <div className="absolute top-2 right-2 mt-8 transform translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                        API & Integrations
                                    </span>
                                </div>
                            </div>


                            <div className="p-4">
                                <h3 className="text-[#000] font-popins font-bold lg:text-lg mb-1 lg:mt-4">
                                    Eius voluptates in officiis.
                                </h3>
                                <p className="lg:text-sm text-[12px] text-gray-500 mb-3 font-popins">
                                    Eum aut eaque consectetur omnis dolorem neque.
                                </p>


                                <div className="bg-gray-50 p-3 font-popins rounded-xl lg:text-sm text-[12px] text-gray-600 mb-3 shadow-sm border border-[#00000010] mt-6">
                                    Aut impedit consequuntur natus et nostrum voluptatibus. Quia dolorem
                                    molestiae est quia dolores dolorem....
                                </div>


                                <div className="flex flex-wrap gap-2 mb-4 lg:mt-8">
                                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-popins">REST API</span>
                                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-popins">Git</span>
                                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-popins">Livewire</span>
                                </div>


                                <div className="flex justify-between text-xs text-gray-500 lg:mt-10 ">
                                    <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                                        <FaClock className="text-[10px]" />
                                        In Progress
                                    </div>
                                    <div className="flex items-center gap-1 text-blue-600">
                                        <FaCode className="text-sm" />
                                        Code
                                    </div>
                                </div>
                            </div>
                        </div></div>
                        <div data-aos="fade-up" ><div  className=" w-[85%] bg-white rounded-3xl shadow overflow-hidden group transition-all mx-auto duration-300 hover:scale-105 hover:shadow-2xl">

                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                                    alt="Project"
                                    className="w-full lg:h-60 h-40 object-cover group-hover:scale-105 duration-300 "
                                />


                                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                                    <FaStar className="text-xs" />
                                    Featured
                                </div>


                                <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    Volunteer
                                </div>


                                <div className="absolute bottom-2 left-2 transform -translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow">
                                        <FaRegDotCircle className="text-[10px]" />
                                        Archived
                                    </span>
                                </div>


                                <div className="absolute top-2 right-2 mt-8 transform translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                        API & Integrations
                                    </span>
                                </div>
                            </div>


                            <div className="p-4">
                                <h3 className="text-[#000] font-popins font-bold lg:text-lg mb-1 lg:mt-4">
                                    Eius voluptates in officiis.
                                </h3>
                                <p className="lg:text-sm text-[12px] text-gray-500 mb-3 font-popins">
                                    Eum aut eaque consectetur omnis dolorem neque.
                                </p>


                                <div className="bg-gray-50 p-3 font-popins rounded-xl lg:text-sm text-[12px] text-gray-600 mb-3 shadow-sm border border-[#00000010] mt-6">
                                    Aut impedit consequuntur natus et nostrum voluptatibus. Quia dolorem
                                    molestiae est quia dolores dolorem....
                                </div>


                                <div className="flex flex-wrap gap-2 mb-4 lg:mt-8">
                                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-popins">REST API</span>
                                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-popins">Git</span>
                                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-popins">Livewire</span>
                                </div>


                                <div className="flex justify-between text-xs text-gray-500 lg:mt-10 ">
                                    <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                                        <FaClock className="text-[10px]" />
                                        In Progress
                                    </div>
                                    <div className="flex items-center gap-1 text-blue-600">
                                        <FaCode className="text-sm" />
                                        Code
                                    </div>
                                </div>
                            </div>
                        </div></div>
                        <div data-aos="fade-up" ><div  className=" w-[85%] bg-white rounded-3xl shadow overflow-hidden group transition-all mx-auto duration-300 hover:scale-105 hover:shadow-2xl">

                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                                    alt="Project"
                                    className="w-full lg:h-60 h-40 object-cover group-hover:scale-105 duration-300 "
                                />


                                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                                    <FaStar className="text-xs" />
                                    Featured
                                </div>


                                <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    Volunteer
                                </div>


                                <div className="absolute bottom-2 left-2 transform -translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow">
                                        <FaRegDotCircle className="text-[10px]" />
                                        Archived
                                    </span>
                                </div>


                                <div className="absolute top-2 right-2 mt-8 transform translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                        API & Integrations
                                    </span>
                                </div>
                            </div>


                            <div className="p-4">
                                <h3 className="text-[#000] font-popins font-bold lg:text-lg mb-1 lg:mt-4">
                                    Eius voluptates in officiis.
                                </h3>
                                <p className="lg:text-sm text-[12px] text-gray-500 mb-3 font-popins">
                                    Eum aut eaque consectetur omnis dolorem neque.
                                </p>


                                <div className="bg-gray-50 p-3 font-popins rounded-xl lg:text-sm text-[12px] text-gray-600 mb-3 shadow-sm border border-[#00000010] mt-6">
                                    Aut impedit consequuntur natus et nostrum voluptatibus. Quia dolorem
                                    molestiae est quia dolores dolorem....
                                </div>


                                <div className="flex flex-wrap gap-2 mb-4 lg:mt-8">
                                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-popins">REST API</span>
                                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-popins">Git</span>
                                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-popins">Livewire</span>
                                </div>


                                <div className="flex justify-between text-xs text-gray-500 lg:mt-10 ">
                                    <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                                        <FaClock className="text-[10px]" />
                                        In Progress
                                    </div>
                                    <div className="flex items-center gap-1 text-blue-600">
                                        <FaCode className="text-sm" />
                                        Code
                                    </div>
                                </div>
                            </div>
                        </div></div>

                    </div>


                </div>
            </Container>
        </div>
    )
}

export default FeatureProject