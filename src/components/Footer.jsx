import React from 'react'
import Container from './Container'
import { IoIosArrowRoundForward } from "react-icons/io";


const Footer = () => {
    return (
        <div>
            <Container>

                <div className="lg:py-[124px] py-[40px] lg:mx-0 mx-[20px]">
                <div className="lg:flex justify-between">
                    <div className='w-1/4' >
                        <h3 data-aos="fade-up" className='text-[28px] font-popins font-semibold text-blue-600'>Portfolio</h3>
                    </div>

                    <div className='w-1/4 lg:mt-0 mt-[10px] ' >
                        <ul data-aos="fade-up">
                            <li className='text-[16px] text-[#000] font-popins font-medium  uppercase'>Work</li>
                            <li className='lg:text-[16px] text-[14px] text-[#000] font-popins font-light  pt-[10px]'><a href="">Projects</a></li>
                            <li  className='lg:text-[16px] text-[14px] text-[#000] font-popins font-light  pt-[6px]'><a href="">Testimonials</a></li>
                            <li className='lg:text-[16px] text-[14px] text-[#000] font-popins font-light  pt-[6px]'><a href="">Resume</a></li>
                        </ul>
                    </div>
                    <div className='w-1/4 lg:mt-0 mt-[10px] ' >
                        <ul data-aos="fade-up">
                            <li className='lg:text-[16px] text-[14px] text-[#000] font-popins font-medium  uppercase'>Resources</li>
                            <li className='lg:text-[16px] text-[14px] text-[#000] font-popins font-light  pt-[10px]'><a href="">Blog</a></li>
                            <li className='lg:text-[16px] text-[14px] text-[#000] font-popins font-light  pt-[6px]'><a href="">Hire me</a></li>
                        </ul>
                    </div>
                    <div className='w-1/4 lg:mt-0 mt-[10px]' >
                        <h5 data-aos="fade-up" className='text-[16px] text-[#000] font-popins font-medium lg:w-full  w-[120px] uppercase'>Get In Touch</h5>
                        <div data-aos="fade-up" className=" h-[140px] lg:w-[370px] w-[300px] bg-[#F5F8FF] rounded-2xl lg:mt-[60px] mt-[10px] lg:pt-[30px] pt-[20px] ">
                            <div className="mx-[20px]">
                            <h4 className='text-[14px] font-popins font-medium text-[#000] '>Need a custom solution?</h4>
                            <p className='text-[13px] font-popins font-light text-[#000000cc] py-[10px]'>I'm available for freelance projects and consulting.</p>
                            <button className='text-[14px] text-blue-600 font-popins font-normal flex items-center cursor-pointer'>Contact me <span className=' pl-[6px] text-[20px]'><IoIosArrowRoundForward/></span></button>

                            </div>
                        </div>
                    </div>
                </div>
                </div>


            </Container>
        </div>
    )
}

export default Footer