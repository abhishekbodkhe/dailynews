import React, { useEffect, useState } from "react";
import { Link,NavLink } from "react-router-dom";
import logo from "../images/logo3.png" ;
function Header (){

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday", "Sunday"];
  const d = new Date();
  let month = months[d.getMonth()];
  let year = d.getFullYear() ;
  let day = d.getDate();
  let day_word = days[(day % 7) + 1]
  let time = `${d.getHours()} : ${d.getMinutes()} ` 
  

    return (
<>
     
        <header class='shadow-md bg-white font-[sans-serif] tracking-wide relative z-50'>
    <section
      class='flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]'>
  
      <div class='left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
          class="cursor-pointer fill-gray-400 mr-6 rotate-90 inline-block">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <input type='text' placeholder='Search...' class="outline-none bg-transparent w-full text-sm" />
      </div>
  
      <Link href="javascript:void(0)" class="shrink-0"><img src={logo} alt="logo"
          class='md:w-[170px] w-36' />
      </Link>
  
      <div class="lg:absolute lg:right-10 flex flex-col items-center ml-auto space-x-8">
        <div className="font-semibold block text-[15px] text-gray-700">
          {day_word}, {month} {day}, {year}
        </div>
        <div className="font-semibold block text-[15px] text-gray-700">
          {time}
        </div>
        
      </div>
    </section>
  
    <div class='flex flex-wrap justify-center px-10 py-3 relative'>
  
      <div id="collapseMenu"
        class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>
  
        <ul
          class='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='max-lg:border-b max-lg:pb-4 px-3 lg:hidden'>
            <Link href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </Link>
          </li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'>
            <NavLink href='javascript:void(0)'
              className={({isActive})=>`hover:text-[#007bff] ${ isActive ? "text-[#007bff]" : "text-gray-700"} font-semibold block text-[15px]`} to= '/' >Home</NavLink>
          </li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'>
            <NavLink href='javascript:void(0)'
              className={({isActive})=>`hover:text-[#007bff] ${ isActive ? "text-[#007bff]" : "text-gray-700"} font-semibold block text-[15px]`} to='/Entertainment'> Entertainment 
            </NavLink>
          </li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'>
            
            <NavLink href='javascript:void(0)'
              className={({isActive})=>`hover:text-[#007bff] ${ isActive ? "text-[#007bff]" : "text-gray-700"} font-semibold block text-[15px]`} to='/Sports' >Sports
              </NavLink>
            </li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'>
            <NavLink href='javascript:void(0)'
              className={({isActive})=>`hover:text-[#007bff] ${ isActive ? "text-[#007bff]" : "text-gray-700"} font-semibold block text-[15px]`} to='/Technology' >Technology
              </NavLink>
            </li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'>
          
            <NavLink href='javascript:void(0)'
              className={({isActive})=>`hover:text-[#007bff] ${ isActive ? "text-[#007bff]" : "text-gray-700"} font-semibold block text-[15px]`} to='/Business' >Business
              </NavLink>
            </li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'>
            <NavLink href='javascript:void(0)'
              className={({isActive})=>`hover:text-[#007bff] ${ isActive ? "text-[#007bff]" : "text-gray-700"} font-semibold block text-[15px]`} to='/Health' >Health
              </NavLink>
            </li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'>
            <NavLink href='javascript:void(0)'
              className={({isActive})=>`hover:text-[#007bff] ${ isActive ? "text-[#007bff]" : "text-gray-700"} font-semibold block text-[15px]`} to='/Science' >Science
              </NavLink>
            </li>
        
        </ul>
      </div>
  
      <div id="toggleOpen" class='flex ml-auto lg:hidden'>
        <button>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>

  


</>
    )
}

export default Header ;