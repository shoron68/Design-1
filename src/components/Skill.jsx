import React from 'react'
import { FaClock,FaCircle } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiReact } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { IoFlashOutline } from "react-icons/io5";
import Container from './Container';
import { FaPhp,FaLaravel,FaNodeJs  } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";


const Skill = () => {
  return (
    <Container>

    <div className='bg-gradient-to-br from-white via-blue-50 to-white shadow lg:rounded-2xl'>
        
        <div >
                                <section className="text-center py-16 px-4 ">
        
                                    <div data-aos="fade-up" className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                                        <FaCircle className="text-[8px] text-blue-500" />
                                        Technical Expertise
                                    </div>
        
        
                                    <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Skills & Technologies
                                    </h2>
        
        
                                    <p data-aos="fade-up" className="text-gray-600 text-base  mx-auto mb-6">
                                    A comprehensive overview of my technical skills and areas of expertise in web development.ciples.
                                    </p>
        
        
                                    <a data-aos="fade-up"
                                        href="#"
                                        className="text-blue-600 font-medium text-sm inline-flex items-center gap-1 hover:underline"
                                    >
                                        Explore All Skills <span>→</span>
                                    </a>
                                </section>
                            </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 pb-[50px]">
    <div data-aos="fade-up" className="">
        <div className="max-w-md mx-auto p-6 bg-[#ffffff4b] rounded-2xl shadow-lg group hover:scale-103 duration-300">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 font-popins text-center group-hover:text-[#4f39f6] duration-200">Frontend Development</h2>
                <p className="text-[14px] text-gray-500 font-popins text-center py-4 group-hover:text-[#4f39f6] duration-200">
                    Technologies and frameworks for building user interfaces
                </p>
            </div>

            {/* JavaScript */}
           <div className="">
           <div className="py-7 rounded-2xl  bg-[#ffffffa9] px-2 hover:bg-[#fff]" >
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2 text-sm font-medium font-popins text-gray-800">
                        <SiJavascript className="text-[#4f39f667] text-[20px] group-hover:text-[#4f39f6] duration-300 " />
                        JavaScript
                    </div>
                    <span className="text-sm font-medium text-purple-600 font-popins">95%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 font-popins to-indigo-500"
                        style={{ width: "95%" }}
                    ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 flex items-center gap-1 justify-end text-[12px] font-popins">
                    <FaClock />
                    7 years
                </div>
            </div>
           </div>

            {/* TypeScript */}
            <div className="py-7 rounded-2xl  bg-[#ffffffa9] px-2 hover:bg-[#fff]">
                <div className="flex justify-between items-center mb-1">
                    <div  className="flex items-center gap-2 text-sm font-medium text-gray-800">
                        <TbBrandTypescript className="text-[#4f39f667] text-[24px] group-hover:text-[#4f39f6] duration-300" />
                        TypeScript
                    </div>
                    <span className="text-sm font-medium text-purple-600 font-popins">90%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                        style={{ width: "90%" }}
                    ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 flex items-center justify-end gap-1">
                    <FaClock />
                    4 years
                </div>
            </div>

            {/* React */}
            <div className="py-7 rounded-2xl  bg-[#ffffffa9] px-2 hover:bg-[#fff]">
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                        <SiReact className="text-[#4f39f667] text-[24px] group-hover:text-[#4f39f6] duration-300" />
                        React
                    </div>
                    <span className="text-sm font-medium text-purple-600 font-popins">92%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                        style={{ width: "92%" }}
                    ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 flex items-center justify-end gap-1">
                    <FaClock />
                    5 years
                </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-sm text-blue-600 font-medium">
                <button className="flex items-center gap-1 py-[7px] px-[10px] rounded-2xl bg-[#F5F6FF] hover:shadow-2xl cursor-pointer">
                    <IoFlashOutline/> 7 skills
                </button>
                <button className="flex items-center gap-1 cursor-pointer">
                    View All <span>→</span>
                </button>
            </div>
        </div>
    </div>



    <div data-aos="fade-up" className="">
        <div className="max-w-md mx-auto p-6 bg-[#ffffff4b] rounded-2xl shadow-lg group hover:scale-103 duration-300">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 font-popins  group-hover:text-[#4f39f6] duration-200">Backend Development</h2>
                <p className="text-[14px] text-gray-500 font-popins  py-4 group-hover:text-[#4f39f6] duration-200">
                Server-side languages, frameworks, and technologies
                </p>
            </div>

            {/* JavaScript */}
           <div className="">
           <div className="py-7 rounded-2xl  bg-[#ffffffa9] px-2 hover:bg-[#fff]" >
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2 text-sm font-medium font-popins text-gray-800">
                        <FaPhp className="text-[#4f39f667] text-[20px] group-hover:text-[#4f39f6] duration-300 " />
                        PHP
                    </div>
                    <span className="text-sm font-medium text-purple-600 font-popins">95%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 font-popins to-indigo-500"
                        style={{ width: "95%" }}
                    ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 flex items-center gap-1 justify-end text-[12px] font-popins">
                    <FaClock />
                    8 years
                </div>
            </div>
           </div>

            {/* TypeScript */}
            <div className="py-7 rounded-2xl  bg-[#ffffffa9] px-2 hover:bg-[#fff]">
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                        <FaLaravel className="text-[#4f39f667] text-[24px] group-hover:text-[#4f39f6] duration-300" />
                        Laravel
                    </div>
                    <span className="text-sm font-medium text-purple-600 font-popins">95%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                        style={{ width: "90%" }}
                    ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 flex items-center justify-end gap-1">
                    <FaClock />
                    6 years
                </div>
            </div>

            {/* React */}
            <div className="py-7 rounded-2xl  bg-[#ffffffa9] px-2 hover:bg-[#fff]">
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                        <FaNodeJs React className="text-[#4f39f667] text-[24px] group-hover:text-[#4f39f6] duration-300" />
                        Node.js
                    </div>
                    <span className="text-sm font-medium text-purple-600 font-popins">85%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                        style={{ width: "85%" }}
                    ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 flex items-center justify-end gap-1">
                    <FaClock />
                    4 years
                </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-sm text-blue-600 font-medium">
                <button className="flex items-center gap-1 py-[7px] px-[10px] rounded-2xl bg-[#F5F6FF] hover:shadow-2xl cursor-pointer">
                    <IoFlashOutline/> 3 skills
                </button>
            </div>
        </div>
    </div>


    <div data-aos="fade-up" className="">
        <div className="max-w-md mx-auto p-6 bg-[#ffffff4b] rounded-2xl shadow-lg group hover:scale-103 duration-300">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 font-popins  group-hover:text-[#4f39f6] duration-200">Databases</h2>
                <p className="text-[14px] text-gray-500 font-popins  py-4 group-hover:text-[#4f39f6] duration-200">
                Database systems, query languages, and data modeling
                </p>
            </div>

            
           <div  className="">
           <div className="py-7 rounded-2xl  bg-[#ffffffa9] px-2 hover:bg-[#fff]" >
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2 text-sm font-medium font-popins text-gray-800">
                        <GrMysql className="text-[#4f39f667] text-[20px] group-hover:text-[#4f39f6] duration-300 " />
                        MySQL
                    </div>
                    <span className="text-sm font-medium text-purple-600 font-popins">90%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 font-popins to-indigo-500"
                        style={{ width: "90%" }}
                    ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 flex items-center gap-1 justify-end text-[12px] font-popins">
                    <FaClock />
                    7 years
                </div>
            </div>
           </div>

            
            <div className="py-7 rounded-2xl  bg-[#ffffffa9] px-2 hover:bg-[#fff]">
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                        <SiPostgresql className="text-[#4f39f667] text-[24px] group-hover:text-[#4f39f6] duration-300" />
                        PostgreSQL
                    </div>
                    <span className="text-sm font-medium text-purple-600 font-popins">95%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                        style={{ width: "90%" }}
                    ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 flex items-center justify-end gap-1">
                    <FaClock />
                    4 years
                </div>
            </div>


            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-sm text-blue-600 font-medium">
                <button className="flex items-center gap-1 py-[7px] px-[10px] rounded-2xl bg-[#F5F6FF] hover:shadow-2xl cursor-pointer">
                    <IoFlashOutline/> 2 skills
                </button>
            </div>
        </div>
    </div>
</div></div>
    </Container>
  )
}

export default Skill