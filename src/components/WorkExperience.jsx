import React, { useRef, useState } from "react";
import Container from "./Container";
import { FaCircle } from "react-icons/fa";
import img from "../assets/imgggg.jpg"
import { IoLocationOutline } from "react-icons/io5";


const WorkExperience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:py-[124px]  py-[50px]">
      <Container>
        <div className="bg-gradient-to-br from-white via-blue-50 to-white lg:rounded-2xl pb-16 shadow">
          <section className="text-center py-16 px-4">
            <div data-aos="fade-up" className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <FaCircle className="text-[8px] text-blue-500" />
              Professional Journey
            </div>

            <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>

            <p data-aos="fade-up" className="text-gray-600 text-base max-w-2xl mx-auto mb-6">
              My journey as a developer, highlighting key roles and professional achievements.
            </p>

            <a data-aos="fade-up" href="#" className="text-blue-600 font-medium text-sm inline-flex items-center gap-1 hover:underline">
              View Full Resume <span>→</span>
            </a>
          </section>





          <div data-aos="fade-up" className=" p-10">
            <div className="lg:flex relative">




              <div className="flex flex-col gap-4 lg:w-[600px]">
                <div className="bg-white lg:p-6 p-3 rounded-xl shadow">
                  <div className="lg:flex items-center gap-x-7">
                    <div className="h-[80px] w-[100px] bg-[#fff] rounded-xl items-center flex justify-center shadow">
                      <img src={img} className="w-[80px] h-[50px]" alt="" />
                    </div>
                    <div className="flex lg:gap-x-2 gap-x-[15px]">
                      <h2 className="lg:text-xl text-[16px] font-normal font-popins text-blue-600">Acme Corporation</h2>
                      <span className="text-green-600 text-sm bg-green-100 px-2 py-1 rounded-full font-popins">Current</span>
                    </div>
                  </div>
                  <div className="lg:ml-[124px] flex items-center">
                    <p className="text-gray-600 mt-2 py-[5px] pl-[10px] bg-[#F0F6FE] rounded-2xl  lg:w-[265px]">Dec 2023 - Present <span className="text-blue-400 text-[12px]">(Less than a month)</span></p>
                    <div className=" ml-[30px] py-[12px] px-[18px] rounded-2xl bg-[#F0F6FE] mt-[5px]">
                      <IoLocationOutline className="text-[16px]  text-[#1447E6] " />
                    </div>
                  </div>
                  <div className=" lg:ml-[120px] h-[100px] lg:w-[380px] bg-[#fff] flex justify-center items center lg:mt-[30px] mt-[10px] rounded-2xl shadow">
                    <p className="mt-4 text-gray-700 lg:text-[14px] text-[12px] w-[90%] font-popins font-normal w-[]">Working on cutting-edge technology solutions and leading development efforts across multiple projects.</p>
                  </div>

                  <div className="flex gap-2 mt-6 flex-wrap lg:ml-[120px] ">
                    {["HTML5", "PHP", "PostgreSQL", "Docker"].map(skill => (
                      <span key={skill} className="bg-gray-200 px-3 py-1 rounded-2xl text-[12px] font-popins font-medium">{skill}</span>
                    ))}
                  </div>


                  <div className="flex items-center cursor-pointer lg:ml-[120px] mt-5 lg:gap-x-35" onClick={toggleContent}>
                    <p className="mt-4 text-blue-600 font-medium flex items-center gap-1">
                      Key Responsibilities & Achievements
                    </p>
                    <button className="mt-3 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>


                  <div
                    ref={contentRef}
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px" }}
                  >
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800">Responsibilities</h4>
                      <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
                        <li>Doloribus cumque, quos quidem voluptatum.</li>
                        <li>Nam libero tempore, cum soluta nobis est eligendi.</li>
                      </ul>
                      <h4 className="mt-4 font-semibold text-gray-800">Key Achievements</h4>
                      <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Successfully launched new scalable microservice.</li>
                        <li>Reduced deployment times by 40% using Docker.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute left-1/2 w-1/3 flex flex-col items-start transition-transform duration-500 lg:block hidden"
                style={{ transform: isOpen ? `translateY(${contentRef.current?.scrollHeight}px)` : "translateY(0)" }}
              >
                <div className="flex items-center gap-4 mt-[250px]">
                  <div className="relative flex items-center justify-center w-12 h-12">

                    <div className="absolute w-full h-full rounded-full border-[5px] border-blue-500"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className="bg-[#EEF4FF] p-4 rounded-xl text-[#193CB8] font-bold text-[35px]  inset-shadow-xs">
                    2023
                    <div className="text-sm font-normal text-[#155DFC]">Less than a month Months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkExperience;
