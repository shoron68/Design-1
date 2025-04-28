import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa6";


const Card = () => {
    return (
        <div className="lg:flex lg:justify-center lg:mt-[100px] pb-[124px]">

            <div className='lg:w-[1216px] w-full h-auto relative overflow-hidden  ' >
                <div className="h-[285px] w-[277px] border-[1px] border-[#ffffff1e]  rounded-[18px] bg-[#ffffff18] absolute lg:top-[26px]  lg:left-[75px] left-[-30px] opacity-[60%] rotate-12 "></div>

                <div data-aos="fade-up" className="   bg-gradient-to-br from-[#1D44E3] to-[#661AB8] text-center lg:rounded-2xl">

                    <div className="py-[50px] lg:mx-0 mx-[20px]">
                        <div className="bg-gradient-to-r from-transparent via-[#ffffff46] to-transparent h-[1px] "></div>
                        <div className="flex justify-center pt-[50px]">
                            <div className="lg:w-[18%] ">
                                <div data-aos="fade-up" className="flex items-center  bg-opacity-20 text-[#ffffff] text-sm pl-4 pr-3 py-1 border-[1px] border-[#ffffff46] bg-[#ffffff1c] rounded-full font-popins text-[13px]">
                                    <span className="w-[10px] h-[10px] bg-blue-400 rounded-full mr-2"></span>
                                    Available for new projects
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h1 data-aos="fade-up" className="lg:text-[46px] text-[40px] font-bold lg:mt-8 text-[#fff] font-popins">
                                Ready to Build Something Amazing?
                            </h1>
                        </div>

                        <div className="">
                            <p data-aos="fade-up" className="lg:text-[20px] text-[16px] text-[#ffffff] lg:mt-[65px] mt-[30px] font-popins">
                                I craft custom web solutions that drive real business results. Let's <span className="hidden lg:inline"> <br /> </span> collaborate on your next digital project and bring your vision to life.
                            </p>
                        </div>

                        <div data-aos="fade-up" className="lg:mt-[58px] mt-[30px] flex justify-center  lg:gap-x-4 gap-x-2 ">
                            <button className="flex items-center lg:gap-2 lg:gap-x-0 gap-x-1 text-[#3F79DB] lg:text-[18px] text-[12px] font-semibold lg:pr-4 lg:pl-7 pl-2 lg:py-3 py-2 pr-2 rounded-lg border-[#fff] bg-[#fff] border-[1px] cursor-pointer font-popins ">
                                <FaRegFolder />
                                View Portfolio
                            </button>

                            <button className="flex items-center lg:gap-2 lg:gap-x-0 gap-x-1 text-[#3F79DB] lg:text-[18px] text-[12px] font-semibold lg:pr-4 lg:pl-7 pl-2 lg:py-3 py-2 pr-2 rounded-lg border-[#fff] bg-[#fff] border-[1px] cursor-pointer font-popins">
                                <FaEnvelope />
                                Let's Talk
                            </button>
                        </div>


                        <div data-aos="fade-up" className="grid lg:grid-cols-4 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-4 lg:gap-y-0 mt-[68px] lg:mx-[100px] relative z-10 ">
                            <div className="w-full">
                                <div className="items-center text-[#fff] px-5 py-6 rounded-lg border-[1px] border-[#ffffff46] bg-[#ffffff2a]">
                                    <h3 className='lg:text-[24px] text-[20px] text-[#fff] font-bold font-popins'>5+</h3>
                                    <p className='text-[#ffffffcc] font-popins lg:text-[16px] text-[14px]'>Years Experience</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="items-center text-[#fff] px-5 py-6 rounded-lg border-[1px] border-[#ffffff46] bg-[#ffffff2a]">
                                    <h3 className='lg:text-[24px] text-[20px] text-[#fff] font-bold font-popins'>50+</h3>
                                    <p className='text-[#ffffffcc] font-popins lg:text-[16px] text-[14px]'>Projects Completed</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="items-center text-[#fff] px-5 py-6 rounded-lg border-[1px] border-[#ffffff46] bg-[#ffffff2a]">
                                    <h3 className='lg:text-[24px] text-[20px] text-[#fff] font-bold font-popins' >100%</h3>
                                    <p className='text-[#ffffffcc] font-popins lg:text-[16px] text-[14px]'>Client Satisfaction</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="items-center text-[#fff] px-5 py-6 rounded-lg border-[1px] border-[#ffffff46] bg-[#ffffff2a]">
                                    <h3 className='lg:text-[24px] text-[20px] text-[#fff] font-bold font-popins'>24h</h3>
                                    <p className='text-[#ffffffcc] font-popins lg:text-[16px] text-[14px]'>Support Response</p>
                                </div>
                            </div>
                            
                            <div
                                className="absolute bottom-[-44px] right-[170px] -z-10 h-[200px] w-[700px] rounded-full 
  bg-[radial-gradient(circle,_rgba(138,0,194,0.8)_10%,_rgba(138,0,194,0.5)_50%,_rgba(138,0,194,0.2)_40%)] 
  filter blur-xl opacity-[30%]">
                            </div>





                        </div>

                        <div className="bg-gradient-to-r from-transparent via-[#ffffff46] to-transparent h-[1px] mt-[50px]"></div>
                    </div>

                </div>

                <div className="h-[310px] w-[274px] border-[1px] border-[#ffffff1e] bg-[#ffffff18] rounded-[18px]  bottom-[-45px] lg:right-[48px] right-[-25px]  absolute -rotate-9 opacity-[50%]"></div>
            </div >
        </div>
    )
}

export default Card