import React from 'react'
import Food1 from "../../assets/Vada.jpeg"
import { GrSecure } from "react-icons/gr"
import { IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"

const features = [
  { Icon: GrSecure,    label: "Safe & Hygienic",   desc: "Every dish prepared in certified kitchens with strict hygiene standards.", bg: "bg-violet-100 dark:bg-violet-900/40", color: "text-violet-600 dark:text-violet-400" },
  { Icon: IoFastFood,  label: "Fresh Ingredients",  desc: "Farm-sourced ingredients used daily — no preservatives, ever.",            bg: "bg-orange-100 dark:bg-orange-900/40", color: "text-orange-500 dark:text-orange-400" },
  { Icon: GiFoodTruck, label: "Fast Delivery",       desc: "Hot food at your door in under 30 minutes, guaranteed.",                   bg: "bg-violet-100 dark:bg-violet-900/40", color: "text-violet-600 dark:text-violet-400" },
];

const Banner = () => {
  return (
    <div className="py-14 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl scale-105" />
              <img src={Food1} alt="Medu Vada" className="relative max-w-[380px] w-full mx-auto rounded-3xl shadow-2xl object-cover" />
            </div>
          </div>

          <div className="flex flex-col gap-6 text-center sm:text-left">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Why Choose Us</p>
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-gray-800 dark:text-white leading-snug">
              More than just food — <span className="text-primary">an experience</span>
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              We believe great food is the foundation of great memories. Every dish on Foodie is crafted with care, delivered with love, and guaranteed to make you smile.
            </p>
            <div className="flex flex-col gap-4">
              {features.map(({ Icon, label, desc, bg, color }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl ${bg}`}>
                    <Icon className={`text-2xl ${color}`} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-gray-800 dark:text-white text-sm">{label}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200 font-semibold shadow-md">
                Order Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;