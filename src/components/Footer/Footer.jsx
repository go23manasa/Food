import React from 'react'
import FooterLogo from '../../assets/Foodie.png'
import { FaLocationArrow, FaMobileAlt, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className="bg-gray-100 dark:bg-gray-950 mt-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="md:flex justify-between py-8 px-4 gap-10">
                    <div className="py-8 px-4">
                        <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                            <img src={FooterLogo} alt=""
                            className="max-w-[50px]" />
                            FOODIE
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolores inventore optio, laudantium qui veritatis placeat libero quae dignissimos!
                        </p>
                        <br />
                        <div className="flex items-center gap-3">
                            <FaLocationArrow />
                            <p>Agartala, Tripura</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                        <FaMobileAlt />
                        <p>+91 123456789</p>
                    </div>
                    {/*social handles*/}
                <div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl"/>
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl"/>
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl"/>
                        </a>
                    </div>
                </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 px-4 py-8">
                <div>
                    <h1 className="text-xl font-bold mb-3">Important Links</h1>
                    <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-bold mb-3">Important Links</h1>
                    <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-bold mb-3">Important Links</h1>
                    <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Login</li>
                    </ul>
                </div>
                </div>
            </div> 
            </div>
        </div>
    </>
  )
}

export default Footer
