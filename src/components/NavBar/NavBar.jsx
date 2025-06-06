import React from 'react'
import logo from "../../assets/Foodie.png"
import { FaCartShopping } from "react-icons/fa6"
import DarkMode from "./DarkMode"

const NavBar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <div className="container py-3 sm:py-0">
        <div className="flex
        justify-between items-center">
          <div>
            <a
            href="#"
            className="flex items-center gap-2 text-2xl
            sm:text-3xl font-bold"
            >
             <img src={logo} alt="Foodie" className="w-10" />Foodie
            </a>
          </div>
          <div>
            <ul className="hidden sm:flex gap-4">
              <div className="flex
              items-center gap-4">
                <DarkMode />
              </div>
              <button 
              className="bg-gradient-to-r
               from-primary to-secondary
              text-white px-4 py-1
              rounded-full hover:scale-105
              duration-300 flex
              items-center gap-2">
              Order
              <FaCartShopping
              className="text-xl
              text-white drop shadow sm
              cursor-pointer" />
              </button>
              <li>
                <a
                href="#"
                className="inline-block
                py-4 px-4
                hover:text-primary"
              >
                Home
              </a>
              </li>
              <li>
                <a
                href="#"
                className="inline-block
                py-4 px-4
                hover:text-primary"
              >About</a>
              </li>
              <li>
                <a
                href="#"
                className="inline-block
                py-4 px-4
                hover:text-primary"
              >
                Contact
              </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NavBar
