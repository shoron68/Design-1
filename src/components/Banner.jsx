import React from 'react'
import Container from './Container'
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaRegFolder, FaCode, FaLinkedinIn } from "react-icons/fa6";
import img from "../assets/img.png"
import ParticlesBackground from './ParticlesBackground';

const Banner = () => {
    return (
        <div className='bg-gradient-to-br from-[#1D44E3] to-[#661AB8]'>
            <ParticlesBackground className="bg-scroll" />
            <div className="relative">
                <Container>
                    <div className="flex flex-col-reverse lg:flex-row justify-between py-[60px] lg:py-[100px] gap-10 lg:gap-0 lg:mx-0 mx-[10px]">
                    <div className="lg:pt-[100px] pt-[30px]" >
                        <div className="lg:justify-start flex justify-center">
                        <div className="flex items-center lg:w-[31%] w-[62%]  bg-opacity-20 text-[#ffffff] text-sm pl-3 pr-3 py-1 border-[1px] border-[#ffffff46] bg-[#ffffff1c] rounded-full ">
                            <span className="w-[5px] h-[5px] bg-blue-400 rounded-full mr-2 " ></span>
                            Welcome to my portfolio
                        </div>
                        </div>
                        <div className="">
                            <h1 className='lg:text-[64px] text-[40px] lg:text-start text-center font-popins font-bold text-[#fff] pt-[20px]'>Full Stack Developer</h1>
                            <p className='lg:text-[24px] text-[18px] lg:text-start text-center font-popins text-[rgba(255,255,255,0.63)] py-[20px]'>Turning ideas into reality</p>
                            <p className='lg:text-[20px] text-[16px] lg:text-start text-center font-popins text-[rgba(255,255,255,0.63)]'>Building modern web applications with passion</p>


                            <div className="flex lg:justify-start justify-center pt-[40px] gap-x-6">
                                <button className="flex items-center gap-2 font-popins text-[#3F79DB] lg:text-[18px] text-[14px] font-semibold pr-4 pl-4 py-3 rounded-lg border-[#fff] bg-[#fff] border-[1px] cursor-pointer ">
                                    <FaRegFolder />
                                    View Project
                                </button>

                                <button className="flex items-center gap-2 text-[#fff] font-popins font-normal lg:text-[18px] text-[14px] pr-4 pl-4 py-3 rounded-lg border-[1px] border-[#ffffff46] bg-[#ffffff2a] cursor-pointer">
                                    <FaEnvelope />
                                    Hire me
                                </button>
                            </div>
                            <div className="flex items-center lg:justify-start justify-center lg:gap-x-20 gap-x-6 pt-[50px]  ">
                                <div className=" items-center">
                                    <h2 className='lg:text-[24px] text-[18px] font-popins font-bold text-[#fff] flex justify-center'>9</h2>
                                    <p className='lg:text-[16px] text-[12px] font-popins font-light text-[#fff]'>Years Experience</p>
                                </div>
                                <div className="">
                                    <h2 className='lg:text-[24px] text-[18px] font-popins font-bold text-[#fff] flex justify-center'>50+</h2>
                                    <p className='lg:text-[16px] text-[12px] font-popins font-light text-[#fff]'>Projects</p>
                                </div>
                                <div className="">
                                    <h2 className='lg:text-[24px] text-[18px] font-popins font-bold text-[#fff] flex justify-center'>100%</h2>
                                    <p className='lg:text-[16px] text-[12px] font-popins font-light text-[#fff]'>Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="relative mx-auto lg:mx-0 ">
                            <div className="h-[270px] sm:h-[400px] md:h-[500px] lg:h-[616px] w-[270px] sm:w-[400px] md:w-[500px] lg:w-[616px] border border-[#ffffff3f] rounded-2xl bg-[#ffffff33] flex justify-center items-center">
                                <img src={img} className='rounded-2xl -rotate-4 hover:-rotate-3 transition-transform duration-300 border-[5px] border-[#6320BC] hover:scale-[1.02]' alt="Profile" />
                                <div className="h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] bg-[#2B7FFF] items-center flex justify-center rounded-xl absolute top-[20px] left-[-20px] sm:top-[60px] sm:left-[-45px] animate-floatUp">
                                    <FaCode className="text-[20px] sm:text-[30px] text-white" />
                                </div>
                            </div>
                            <div className="bg-[#fff] flex items-center gap-x-3 w-[170px] sm:w-[190px] rounded-xl absolute bottom-[-10px] right-[-10px] sm:right-[-40px] animate-floatUp p-2">
                                <div className="h-[10px] w-[10px] bg-[#00C951] ml-3 rounded-full"></div>
                                <p className='text-[12px] sm:text-[16px] font-popins font-normal'>Available For Hire</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-1/2 lg:left-[290px] bottom-[300px] transform -translate-x-1/2 lg:translate-x-0 animate-floatUp">
                        <div className="h-[40px] w-[40px] bg-[#3F79DB] rounded-[5px] flex justify-center items-center lg:opacity-[80%] opacity-[20%]">
                            <FaLinkedinIn className='text-[#fff] text-[24px]' />
                        </div>
                    </div>
                    <div className="flex justify-center lg:pt-10">
                        <div className="h-[50px] w-[35px] border-[3px] border-[#ffffff5b] rounded-[30px] flex justify-center">
                            <div className="h-[8px] w-[4px] rounded-2xl bg-[#fff] animate-cursor"></div>
                        </div>
                    </div>
                </Container>
                <div className="hidden lg:block h-[250px] w-[250px] bg-[rgba(255,255,255,0.11)] rounded-xl absolute top-[40%] left-[-30px] rotate-12"></div>
            </div>
        </div>
    )
}

export default Banner;
