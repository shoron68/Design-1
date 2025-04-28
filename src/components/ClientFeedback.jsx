import React from 'react'
import Container from './Container'
import { FaCircle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientFeedback = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,

    };
    return (
        <div>
            <div className='lg:py-[124px] py-[50px]'>
                <Container>
                    <div className="bg-gradient-to-br from-[#F2F4FF] via-[#F8F7FE] to-white shadow lg:rounded-2xl pb-16 ">
                        <div>
                            <section className="text-center lg:py-16 py-[30px] px-4 ">

                                <div data-aos="fade-up"  className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-[#8C15DE] text-sm font-medium mb-4">
                                    <FaCircle className="text-[8px] text-[#8C15DE]" />
                                    Client Feedback
                                </div>


                                <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    What People Say
                                </h2>


                                <p data-aos="fade-up" className="text-gray-600 text-base max-w-2xl mx-auto mb-6">
                                    Hear from clients and collaborators about their experience working with me.
                                </p>
                            </section>
                        </div>
                        <div className=" ">



                            <Slider {...settings} >

                                <div  data-aos="fade-up" className="">
                                    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mx-auto  w-[95%]  relative">
                                        <svg
                                            className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 w-5 sm:w-6 h-5 sm:h-6 text-purple-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7.17 6C5.95 6 5 6.95 5 8.17V13c0 1.1.9 2 2 2h2v-2H7V8h3V6H7.17zM14 6c-1.22 0-2.17.95-2.17 2.17V13c0 1.1.9 2 2 2h2v-2h-2V8h3V6h-2.83z" />
                                        </svg>

                                        <p className="italic text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-700 ml-8 sm:ml-10">
                                            We hired Al Amin to overhaul our legacy system, and the results exceeded our expectations. They brought a level of technical excellence and attention to detail that's rare to find. Our system is now significantly faster, more scalable, and much easier to maintain. I highly recommend their services to anyone looking for a skilled developer who truly understands business needs.
                                        </p>

                                        <div className="flex items-center mt-4 sm:mt-6 ml-6 sm:ml-10">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-100 text-purple-700 font-bold rounded-full">
                                                M
                                            </div>
                                            <div className="ml-3 sm:ml-4">
                                                <p className="font-semibold text-sm sm:text-base text-gray-900">Michael Chen</p>
                                                <p className="text-xs sm:text-sm text-purple-600">CTO</p>
                                                <p className="text-xs sm:text-sm text-gray-500">Startup Innovations</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div data-aos="fade-up" className="">
                                    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mx-auto w-[95%]  relative">
                                        <svg
                                            className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 w-5 sm:w-6 h-5 sm:h-6 text-purple-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7.17 6C5.95 6 5 6.95 5 8.17V13c0 1.1.9 2 2 2h2v-2H7V8h3V6H7.17zM14 6c-1.22 0-2.17.95-2.17 2.17V13c0 1.1.9 2 2 2h2v-2h-2V8h3V6h-2.83z" />
                                        </svg>

                                        <p className="italic text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-700 ml-8 sm:ml-10">
                                            We hired Al Amin to overhaul our legacy system, and the results exceeded our expectations. They brought a level of technical excellence and attention to detail that's rare to find. Our system is now significantly faster, more scalable, and much easier to maintain. I highly recommend their services to anyone looking for a skilled developer who truly understands business needs.
                                        </p>

                                        <div className="flex items-center mt-4 sm:mt-6 ml-6 sm:ml-10">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-100 text-purple-700 font-bold rounded-full">
                                                M
                                            </div>
                                            <div className="ml-3 sm:ml-4">
                                                <p className="font-semibold text-sm sm:text-base text-gray-900">Michael Chen</p>
                                                <p className="text-xs sm:text-sm text-purple-600">CTO</p>
                                                <p className="text-xs sm:text-sm text-gray-500">Startup Innovations</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div data-aos="fade-up" className="">
                                    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mx-auto w-[95%]  relative">
                                        <svg
                                            className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 w-5 sm:w-6 h-5 sm:h-6 text-purple-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7.17 6C5.95 6 5 6.95 5 8.17V13c0 1.1.9 2 2 2h2v-2H7V8h3V6H7.17zM14 6c-1.22 0-2.17.95-2.17 2.17V13c0 1.1.9 2 2 2h2v-2h-2V8h3V6h-2.83z" />
                                        </svg>

                                        <p className="italic text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-700 ml-8 sm:ml-10">
                                            We hired Al Amin to overhaul our legacy system, and the results exceeded our expectations. They brought a level of technical excellence and attention to detail that's rare to find. Our system is now significantly faster, more scalable, and much easier to maintain. I highly recommend their services to anyone looking for a skilled developer who truly understands business needs.
                                        </p>

                                        <div className="flex items-center mt-4 sm:mt-6 ml-6 sm:ml-10">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-100 text-purple-700 font-bold rounded-full">
                                                M
                                            </div>
                                            <div className="ml-3 sm:ml-4">
                                                <p className="font-semibold text-sm sm:text-base text-gray-900">Michael Chen</p>
                                                <p className="text-xs sm:text-sm text-purple-600">CTO</p>
                                                <p className="text-xs sm:text-sm text-gray-500">Startup Innovations</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div data-aos="fade-up" className="">
                                    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mx-auto w-[95%]  relative">
                                        <svg
                                            className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 w-5 sm:w-6 h-5 sm:h-6 text-purple-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7.17 6C5.95 6 5 6.95 5 8.17V13c0 1.1.9 2 2 2h2v-2H7V8h3V6H7.17zM14 6c-1.22 0-2.17.95-2.17 2.17V13c0 1.1.9 2 2 2h2v-2h-2V8h3V6h-2.83z" />
                                        </svg>

                                        <p className="italic text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-700 ml-8 sm:ml-10">
                                            We hired Al Amin to overhaul our legacy system, and the results exceeded our expectations. They brought a level of technical excellence and attention to detail that's rare to find. Our system is now significantly faster, more scalable, and much easier to maintain. I highly recommend their services to anyone looking for a skilled developer who truly understands business needs.
                                        </p>

                                        <div className="flex items-center mt-4 sm:mt-6 ml-6 sm:ml-10">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-100 text-purple-700 font-bold rounded-full">
                                                M
                                            </div>
                                            <div className="ml-3 sm:ml-4">
                                                <p className="font-semibold text-sm sm:text-base text-gray-900">Michael Chen</p>
                                                <p className="text-xs sm:text-sm text-purple-600">CTO</p>
                                                <p className="text-xs sm:text-sm text-gray-500">Startup Innovations</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div data-aos="fade-up" className="">
                                    <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 mx-auto w-[95%]  relative">
                                        <svg
                                            className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 w-5 sm:w-6 h-5 sm:h-6 text-purple-300"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7.17 6C5.95 6 5 6.95 5 8.17V13c0 1.1.9 2 2 2h2v-2H7V8h3V6H7.17zM14 6c-1.22 0-2.17.95-2.17 2.17V13c0 1.1.9 2 2 2h2v-2h-2V8h3V6h-2.83z" />
                                        </svg>

                                        <p className="italic text-[12px] sm:text-sm md:text-base lg:text-lg text-gray-700 ml-8 sm:ml-10">
                                            We hired Al Amin to overhaul our legacy system, and the results exceeded our expectations. They brought a level of technical excellence and attention to detail that's rare to find. Our system is now significantly faster, more scalable, and much easier to maintain. I highly recommend their services to anyone looking for a skilled developer who truly understands business needs.
                                        </p>

                                        <div className="flex items-center mt-4 sm:mt-6 ml-6 sm:ml-10">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-purple-100 text-purple-700 font-bold rounded-full">
                                                M
                                            </div>
                                            <div className="ml-3 sm:ml-4">
                                                <p className="font-semibold text-sm sm:text-base text-gray-900">Michael Chen</p>
                                                <p className="text-xs sm:text-sm text-purple-600">CTO</p>
                                                <p className="text-xs sm:text-sm text-gray-500">Startup Innovations</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                
                            </Slider>





                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default ClientFeedback