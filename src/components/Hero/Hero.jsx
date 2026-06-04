import React, { useState } from 'react'
import bgImage from "../../assets/yellowbg.png"
import Food1 from "../../assets/Poha.jpg"
import Food2 from "../../assets/Idly.jpeg"
import Food3 from "../../assets/Dosa.jpg"
import { FaSearch } from 'react-icons/fa'

const ImageList = [
  { id: 1, image: Food1, label: "Poha" },
  { id: 2, image: Food2, label: "Idly" },
  { id: 3, image: Food3, label: "Dosa" },
];

const Hero = () => {
  const [activeId, setActiveId] = useState(1);
  const [query, setQuery] = useState('');
  const active = ImageList.find(i => i.id === activeId);

  const handleSearch = (e) => {
    e.preventDefault();
    const section = document.getElementById('menu-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // KEY FIX: added explicit dark:bg-gray-950 and removed reliance on the bg image for dark mode
    <div className="min-h-[580px] sm:min-h-[620px] bg-white dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center relative overflow-hidden">

      {/* Show bg image only in light mode */}
      <div
        className="absolute inset-0 dark:opacity-0 transition-opacity duration-300"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark mode subtle gradient bg */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />

      <div className="container pb-8 sm:pb-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">

          {/* Text */}
          <div className="flex flex-col justify-center gap-5 pt-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1 animate-fadeInUp">
            <p className="text-primary font-semibold tracking-widest text-sm uppercase">🍽️ Fresh & Fast Delivery</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-tight text-gray-900 dark:text-white">
              Taste the <span className="text-primary">Best</span> of South India
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mx-auto sm:mx-0">
              Authentic South Indian flavours, freshly prepared and delivered hot to your doorstep. Order in minutes, eat in joy.
            </p>

            {/* Search bar */}
            <form onSubmit={handleSearch} className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg px-4 py-2 gap-3 max-w-sm mx-auto sm:mx-0 border border-gray-200 dark:border-gray-700">
              <FaSearch className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search for food..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 dark:text-white placeholder-gray-400"
              />
              <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform">
                Search
              </button>
            </form>

            <div className="flex gap-3 justify-center sm:justify-start flex-wrap">
              <button
                onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200 font-semibold shadow-md"
              >
                Order Now
              </button>
              <button
                onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary dark:text-primary px-6 py-3 rounded-full hover:scale-105 duration-200 font-semibold hover:bg-primary/10"
              >
                View Menu
              </button>
            </div>

            {/* Replaced fake numbers with honest value props */}
            <div className="flex gap-6 justify-center sm:justify-start mt-2">
              {[['100%', 'Fresh Daily'], ['South', 'Indian Only'], ['30 min', 'Avg. Delivery']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <p className="text-xl font-bold font-display text-primary">{val}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image section */}
          <div className="order-1 sm:order-2 flex justify-center items-center relative min-h-[380px]">
            <div className="flex justify-center items-center h-[280px] sm:h-[420px] overflow-hidden">
              <img
                key={activeId}
                src={active.image}
                alt={active.label}
                className="w-[260px] sm:w-[400px] mx-auto spin"
              />
            </div>
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold shadow text-gray-800 dark:text-white">
              {active.label}
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-3 absolute bottom-0 lg:-right-10 rounded-full">
              {ImageList.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`rounded-xl overflow-hidden border-2 transition-all duration-200 hover:scale-110
                    ${activeId === item.id ? 'border-primary scale-110' : 'border-transparent opacity-70'}`}
                >
                  <img src={item.image} alt={item.label} className="w-[70px] h-[70px] object-cover" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;