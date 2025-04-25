import React, { useState } from 'react';
import Container from './Container';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#fff]  top-0 z-50 lg:mx-0 mx-[10px]">
      <Container>
        <div className="flex justify-between items-center py-7 relative">
          {/* Logo */}
          <h3 className='font-popins font-bold text-[24px] text-[#4546F8] cursor-pointer'>Portfolio</h3>

          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-x-9'>
            {['Home', 'Experience', 'Projects', 'Skills', 'Educations', 'Blog', 'Testimonial'].map((item, index) => (
              <li
                key={index}
                className='font-popins text-[16px] hover:border-[#4546F8] hover:border-b-[2px] cursor-pointer capitalize'
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Burger Icon */}
          <button className='md:hidden z-50' onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6 text-[#4546F8]" /> : <Menu className="w-6 h-6 text-[#4546F8]" />}
          </button>

          {/* Mobile Menu */}
          <div className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white z-40 shadow-lg p-8 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className='flex flex-col gap-6 mt-20'>
              {['Home', 'Experience', 'Projects', 'Skills', 'Educations', 'Blog', 'Testimonial'].map((item, index) => (
                <li
                  key={index}
                  className='font-popins text-[18px] text-[#333] border-b pb-2 cursor-pointer capitalize'
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
