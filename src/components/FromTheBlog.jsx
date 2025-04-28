import React from 'react'
import Container from './Container'
import { FaCircle } from "react-icons/fa";
import { CalendarDays, Clock } from "lucide-react";

const FromTheBlog = () => {
  return (
    <div>
      <Container>
        <div className="bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl pb-16 shadow">

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">

            <div data-aos="fade-up" className="">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto group hover:scale-102 duration-300 hover:shadow-xl">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                    alt="Blog cover"
                    className="w-full h-[300px] object-cover group-hover:scale-103 duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow ">
                    Frontend Development
                  </span>
                  <div className="absolute bottom-3 right-3 bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full flex items-center space-x-1 shadow">
                    <CalendarDays className="w-4 h-4 text-blue-600" />
                    <span>Mar 21, 2025</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-popins group-hover:text-blue-600 duration-300">
                    Effective State Management in React with Context and Hooks
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4 py-5">
                    <span className="text-xs font-medium text-blue-600 bg-[#F9FAFC] px-2 py-1 rounded-full">
                      #JavaScript
                    </span>
                    <span className="text-xs font-medium text-blue-600 bg-[#F9FAFC] px-2 py-1 rounded-full">
                      #React
                    </span>
                    <span className="text-xs font-medium text-blue-600 bg-[#F9FAFC] px-2 py-1 rounded-full">
                      #Frontend
                    </span>
                    <span className="text-xs font-medium  bg-[#F9FAFC] px-2 py-1 rounded-full">
                      +3
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" // replace with actual avatar URL
                        alt="Admin"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className='group-hover:text-blue-600 duration-300 font-popins text-[14px] font-medium'>Admin User</span>
                    </div>
                    <div className="flex items-center gap-1 py-[5px] px-[13px] rounded-2xl bg-[#F9FAFC] ">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>8 min</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div data-aos="fade-up" className="">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto group hover:scale-102 duration-300 hover:shadow-xl">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                    alt="Blog cover"
                    className="w-full h-[300px] object-cover group-hover:scale-103 duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow ">
                    Frontend Development
                  </span>
                  <div className="absolute bottom-3 right-3 bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full flex items-center space-x-1 shadow">
                    <CalendarDays className="w-4 h-4 text-blue-600" />
                    <span>Mar 21, 2025</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-popins group-hover:text-blue-600 duration-300">
                    Effective State Management in React with Context and Hooks
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4 py-5">
                    <span className="text-xs font-medium text-blue-600 bg-[#F9FAFC] px-2 py-1 rounded-full">
                      #JavaScript
                    </span>
                    <span className="text-xs font-medium text-blue-600 bg-[#F9FAFC] px-2 py-1 rounded-full">
                      #React
                    </span>
                    <span className="text-xs font-medium text-blue-600 bg-[#F9FAFC] px-2 py-1 rounded-full">
                      #Frontend
                    </span>
                    <span className="text-xs font-medium  bg-[#F9FAFC] px-2 py-1 rounded-full">
                      +3
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" // replace with actual avatar URL
                        alt="Admin"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className='group-hover:text-blue-600 duration-300 font-popins text-[14px] font-medium'>Admin User</span>
                    </div>
                    <div className="flex items-center gap-1 py-[5px] px-[13px] rounded-2xl bg-[#F9FAFC] ">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>8 min</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div data-aos="fade-up" className="">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto group hover:scale-102 duration-300 hover:shadow-xl">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                    alt="Blog cover"
                    className="w-full h-[300px] object-cover group-hover:scale-103 duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow ">
                    Frontend Development
                  </span>
                  <div className="absolute bottom-3 right-3 bg-white text-gray-700 text-xs font-medium px-3 py-1 rounded-full flex items-center space-x-1 shadow">
                    <CalendarDays className="w-4 h-4 text-blue-600" />
                    <span>Mar 21, 2025</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-popins group-hover:text-blue-600 duration-300">
                    Effective State Management in React with Context and Hooks
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4 py-5">
                    <span className="text-xs font-medium text-blue-600 bg-[#F9FAFC] px-2 py-1 rounded-full">
                      #JavaScript
                    </span>
                    <span className="text-xs font-medium text-blue-600 bg-[#F9FAFC] px-2 py-1 rounded-full">
                      #React
                    </span>
                    <span className="text-xs font-medium text-blue-600 bg-[#F9FAFC] px-2 py-1 rounded-full">
                      #Frontend
                    </span>
                    <span className="text-xs font-medium  bg-[#F9FAFC] px-2 py-1 rounded-full">
                      +3
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" // replace with actual avatar URL
                        alt="Admin"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className='group-hover:text-blue-600 duration-300 font-popins text-[14px] font-medium'>Admin User</span>
                    </div>
                    <div className="flex items-center gap-1 py-[5px] px-[13px] rounded-2xl bg-[#F9FAFC] ">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span>8 min</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default FromTheBlog