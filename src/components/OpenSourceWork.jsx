import React from 'react'
import Container from './Container'
import { FaCircle, FaGithub,FaStar  } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OpenSourceWork = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
       
      };
    return (
        <div className='lg:py-[124px]'>
            <Container>
                <div className="bg-gradient-to-br from-white via-blue-50 to-white shadow lg:rounded-2xl pb-16 ">
                    <div>
                        <section className="text-center py-16 px-4 ">

                            <div data-aos="fade-up" className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                                <FaCircle className="text-[8px] text-blue-500" />
                                Community Contributions
                            </div>


                            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Open Source Work
                            </h2>


                            <p data-aos="fade-up" className="text-gray-600 text-base max-w-2xl mx-auto mb-6">
                                Explore my contributions to open source projects and the developer community.
                            </p>


                            <a data-aos="fade-up"
                                href="#"
                                className="text-blue-600 font-medium text-sm inline-flex items-center gap-1 hover:underline"
                            >
                                View All Open Source Projects <span>→</span>
                            </a>
                        </section>
                    </div>
                    <div className=" ">

                    <Slider {...settings}>
                    <div data-aos="fade-up">
                    <div className="mx-[40px] bg-[#fff] pb-[30px] rounded-2xl">
                        <div className="flex justify-between mx-[20px] items-center">
                            <div className="flex ">
                                    <div className="flex items-center gap-x-2 py-[20px]">
                                        <div className="lg:h-[50px] h-[25px] w-[25px] lg:w-[50px] bg-[#fff] rounded-2xl flex items-center justify-center shadow" >
                                        <FaGithub className='lg:text-[28px]'/>
                                        </div>
                                        <h3 className='lg:text-[28px] font-semibold font-popins text-[#000]'>Tailwind css</h3>
                                    </div>
                            </div>
                            <div className="">
                                <div className="flex lg:h-[40px] h-[20px] w-[50px] lg:w-[70px] bg-[#fff] rounded-2xl shadow items-center justify-center gap-x-2">
                                    <div className="">
                                        <div className="">
                                            <FaStar  className='text-[#FFA500] lg:text-[16px] text-[12px]'/>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h6 className='lg:text-[16px] text-[12px]'>120</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" bg-[#fff] rounded-xl shadow lg:ml-[25px] ml-[4px] w-[97%]">
                            <div className="lg:mx-[40px] mx-[10px] lg:py-[20px] py-[10px]">
                            <p className='lg:text-[14px] text-[12px] font-popins font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A officia quod animi! Repellendus, vitae facilis sed eos atque perferendis accusamus accusantium iure? Eaque facilis mollitia possimus accusantium vitae animi accusamus dolor suscipit ea. Obcaecati, aut? Consequatur iure sed atque magnam perspiciatis excepturi nam assumenda fugiat praesentium minima, eaque eligendi ad explicabo voluptatibus. Autem perspiciatis iure eum animi minus ab sit odio officia? Labore vero excepturi dolorem. Harum sequi ratione voluptates?</p>
                            </div>
                        </div>
                    <div className="flex lg:mx-[30px] mx-[4px] items-center pt-[30px] lg:gap-x-5 gap-x-2 ">
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>HTML</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>CSS</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[65px] lg:w-[100px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>JavaScript</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>Vue.js</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[50px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>React.js</p>
                        </div>
                    </div>
                    </div>
        </div>
                    <div data-aos="fade-up">
                    <div className="mx-[40px] bg-[#fff] pb-[30px] rounded-2xl">
                        <div className="flex justify-between mx-[20px] items-center">
                            <div className="flex ">
                                    <div className="flex items-center gap-x-2 py-[20px]">
                                        <div className="lg:h-[50px] h-[25px] w-[25px] lg:w-[50px] bg-[#fff] rounded-2xl flex items-center justify-center shadow" >
                                        <FaGithub className='lg:text-[28px]'/>
                                        </div>
                                        <h3 className='lg:text-[28px] font-semibold font-popins text-[#000]'>Tailwind css</h3>
                                    </div>
                            </div>
                            <div className="">
                                <div className="flex lg:h-[40px] h-[20px] w-[50px] lg:w-[70px] bg-[#fff] rounded-2xl shadow items-center justify-center gap-x-2">
                                    <div className="">
                                        <div className="">
                                            <FaStar  className='text-[#FFA500] lg:text-[16px] text-[12px]'/>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h6 className='lg:text-[16px] text-[12px]'>120</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" bg-[#fff] rounded-xl shadow lg:ml-[25px] ml-[4px] w-[97%]">
                            <div className="lg:mx-[40px] mx-[10px] lg:py-[20px] py-[10px]">
                            <p className='lg:text-[14px] text-[12px] font-popins font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A officia quod animi! Repellendus, vitae facilis sed eos atque perferendis accusamus accusantium iure? Eaque facilis mollitia possimus accusantium vitae animi accusamus dolor suscipit ea. Obcaecati, aut? Consequatur iure sed atque magnam perspiciatis excepturi nam assumenda fugiat praesentium minima, eaque eligendi ad explicabo voluptatibus. Autem perspiciatis iure eum animi minus ab sit odio officia? Labore vero excepturi dolorem. Harum sequi ratione voluptates?</p>
                            </div>
                        </div>
                    <div className="flex lg:mx-[30px] mx-[4px] items-center pt-[30px] lg:gap-x-5 gap-x-2 ">
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>HTML</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>CSS</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[65px] lg:w-[100px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>JavaScript</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>Vue.js</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[50px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>React.js</p>
                        </div>
                    </div>
                    </div>
        </div>
                    <div data-aos="fade-up">
                    <div className="mx-[40px] bg-[#fff] pb-[30px] rounded-2xl">
                        <div className="flex justify-between mx-[20px] items-center">
                            <div className="flex ">
                                    <div className="flex items-center gap-x-2 py-[20px]">
                                        <div className="lg:h-[50px] h-[25px] w-[25px] lg:w-[50px] bg-[#fff] rounded-2xl flex items-center justify-center shadow" >
                                        <FaGithub className='lg:text-[28px]'/>
                                        </div>
                                        <h3 className='lg:text-[28px] font-semibold font-popins text-[#000]'>Tailwind css</h3>
                                    </div>
                            </div>
                            <div className="">
                                <div className="flex lg:h-[40px] h-[20px] w-[50px] lg:w-[70px] bg-[#fff] rounded-2xl shadow items-center justify-center gap-x-2">
                                    <div className="">
                                        <div className="">
                                            <FaStar  className='text-[#FFA500] lg:text-[16px] text-[12px]'/>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h6 className='lg:text-[16px] text-[12px]'>120</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" bg-[#fff] rounded-xl shadow lg:ml-[25px] ml-[4px] w-[97%]">
                            <div className="lg:mx-[40px] mx-[10px] lg:py-[20px] py-[10px]">
                            <p className='lg:text-[14px] text-[12px] font-popins font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A officia quod animi! Repellendus, vitae facilis sed eos atque perferendis accusamus accusantium iure? Eaque facilis mollitia possimus accusantium vitae animi accusamus dolor suscipit ea. Obcaecati, aut? Consequatur iure sed atque magnam perspiciatis excepturi nam assumenda fugiat praesentium minima, eaque eligendi ad explicabo voluptatibus. Autem perspiciatis iure eum animi minus ab sit odio officia? Labore vero excepturi dolorem. Harum sequi ratione voluptates?</p>
                            </div>
                        </div>
                    <div className="flex lg:mx-[30px] mx-[4px] items-center pt-[30px] lg:gap-x-5 gap-x-2 ">
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>HTML</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>CSS</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[65px] lg:w-[100px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>JavaScript</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>Vue.js</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[50px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>React.js</p>
                        </div>
                    </div>
                    </div>
        </div>
                    <div data-aos="fade-up">
                    <div className="mx-[40px] bg-[#fff] pb-[30px] rounded-2xl">
                        <div className="flex justify-between mx-[20px] items-center">
                            <div className="flex ">
                                    <div className="flex items-center gap-x-2 py-[20px]">
                                        <div className="lg:h-[50px] h-[25px] w-[25px] lg:w-[50px] bg-[#fff] rounded-2xl flex items-center justify-center shadow" >
                                        <FaGithub className='lg:text-[28px]'/>
                                        </div>
                                        <h3 className='lg:text-[28px] font-semibold font-popins text-[#000]'>Tailwind css</h3>
                                    </div>
                            </div>
                            <div className="">
                                <div className="flex lg:h-[40px] h-[20px] w-[50px] lg:w-[70px] bg-[#fff] rounded-2xl shadow items-center justify-center gap-x-2">
                                    <div className="">
                                        <div className="">
                                            <FaStar  className='text-[#FFA500] lg:text-[16px] text-[12px]'/>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h6 className='lg:text-[16px] text-[12px]'>120</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" bg-[#fff] rounded-xl shadow lg:ml-[25px] ml-[4px] w-[97%]">
                            <div className="lg:mx-[40px] mx-[10px] lg:py-[20px] py-[10px]">
                            <p className='lg:text-[14px] text-[12px] font-popins font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A officia quod animi! Repellendus, vitae facilis sed eos atque perferendis accusamus accusantium iure? Eaque facilis mollitia possimus accusantium vitae animi accusamus dolor suscipit ea. Obcaecati, aut? Consequatur iure sed atque magnam perspiciatis excepturi nam assumenda fugiat praesentium minima, eaque eligendi ad explicabo voluptatibus. Autem perspiciatis iure eum animi minus ab sit odio officia? Labore vero excepturi dolorem. Harum sequi ratione voluptates?</p>
                            </div>
                        </div>
                    <div className="flex lg:mx-[30px] mx-[4px] items-center pt-[30px] lg:gap-x-5 gap-x-2 ">
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>HTML</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>CSS</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[65px] lg:w-[100px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>JavaScript</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>Vue.js</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[50px]  lg:w-[70px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>React.js</p>
                        </div>
                    </div>
                    </div>
        </div>
                    <div data-aos="fade-up">
                    <div className="mx-[40px] bg-[#fff] pb-[30px] rounded-2xl">
                        <div className="flex justify-between mx-[20px] items-center">
                            <div className="flex ">
                                    <div className="flex items-center gap-x-2 py-[20px]">
                                        <div className="lg:h-[50px] h-[25px] w-[25px] lg:w-[50px] bg-[#fff] rounded-2xl flex items-center justify-center shadow" >
                                        <FaGithub className='lg:text-[28px]'/>
                                        </div>
                                        <h3 className='lg:text-[28px] font-semibold font-popins text-[#000]'>Tailwind css</h3>
                                    </div>
                            </div>
                            <div className="">
                                <div className="flex lg:h-[40px] h-[20px] w-[50px] lg:w-[70px] bg-[#fff] rounded-2xl shadow items-center justify-center gap-x-2">
                                    <div className="">
                                        <div className="">
                                            <FaStar  className='text-[#FFA500] lg:text-[16px] text-[12px]'/>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h6 className='lg:text-[16px] text-[12px]'>120</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" bg-[#fff] rounded-xl shadow lg:ml-[25px] ml-[4px] w-[97%]">
                            <div className="lg:mx-[40px] mx-[10px] lg:py-[20px] py-[10px]">
                            <p className='lg:text-[14px] text-[12px] font-popins font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A officia quod animi! Repellendus, vitae facilis sed eos atque perferendis accusamus accusantium iure? Eaque facilis mollitia possimus accusantium vitae animi accusamus dolor suscipit ea. Obcaecati, aut? Consequatur iure sed atque magnam perspiciatis excepturi nam assumenda fugiat praesentium minima, eaque eligendi ad explicabo voluptatibus. Autem perspiciatis iure eum animi minus ab sit odio officia? Labore vero excepturi dolorem. Harum sequi ratione voluptates?</p>
                            </div>
                        </div>
                    <div className="flex lg:mx-[30px] mx-[4px] items-center pt-[30px] lg:gap-x-5 gap-x-2 ">
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>HTML</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>CSS</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[65px] lg:w-[100px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>JavaScript</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[40px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>Vue.js</p>
                        </div>
                        <div className="lg:h-[30px] h-[20px] w-[50px]  lg:w-[60px] rounded-2xl flex items-center justify-center bg-[#E7E9EE]">
                            <p className='lg:text-[14px] text-[10px] font-popins font-normal'>React.js</p>
                        </div>
                    </div>
                    </div>
        </div>

                    </Slider>

                    



                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OpenSourceWork