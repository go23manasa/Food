import React, { useState, useEffect } from 'react'
import logo from "../../assets/Foodie.png"
import { FaCartShopping, FaBars, FaXmark } from "react-icons/fa6"
import DarkMode from "./DarkMode"
import { useCart } from "../../context/CartContext"
import CartDrawer from "../Cart/CartDrawer"

const links = [
  { label: 'Home',    id: 'hero-section' },
  { label: 'Menu',    id: 'menu-section' },
  { label: 'About',   id: 'about-section' },
  { label: 'Contact', id: 'footer-section' },
];

const NavBar = () => {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen]   = useState(false);
  const [cartOpen, setCartOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [prevCount, setPrevCount] = useState(0);
  const [pulse, setPulse]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (totalItems > prevCount) {
      setPulse(true);
      setTimeout(() => setPulse(false), 400);
    }
    setPrevCount(totalItems);
  }, [totalItems]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? 'shadow-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-md'
          : 'bg-white dark:bg-gray-900'
        } dark:text-white`}>
        <div className="container py-3 sm:py-0 flex justify-between items-center">

          <button onClick={() => scrollTo('hero-section')} className="flex items-center gap-2 text-2xl sm:text-3xl font-bold font-display">
            <img src={logo} alt="Foodie" className="w-10" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Foodie</span>
          </button>

          <ul className="hidden sm:flex items-center gap-1">
            {links.map(({ label, id }) => (
              <li key={label}>
                <button
                  onClick={() => scrollTo(id)}
                  className="inline-block py-5 px-4 text-sm font-medium hover:text-primary transition-colors duration-200 relative group"
                >
                  {label}
                  <span className="absolute bottom-3 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
                </button>
              </li>
            ))}
            <li className="ml-2"><DarkMode /></li>
            <li className="ml-2">
              <button
                onClick={() => setCartOpen(true)}
                className="relative bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-300 flex items-center gap-2 shadow-md"
              >
                <FaCartShopping className="text-lg" />
                <span className="text-sm font-semibold">Cart</span>
                {totalItems > 0 && (
                  <span className={`absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ${pulse ? 'badge-pulse' : ''}`}>
                    {totalItems}
                  </span>
                )}
              </button>
            </li>
          </ul>

          <div className="flex sm:hidden items-center gap-3">
            <DarkMode />
            <button onClick={() => setCartOpen(true)} className="relative p-2 text-gray-700 dark:text-white">
              <FaCartShopping className="text-xl" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(o => !o)} className="p-2 text-gray-700 dark:text-white">
              {menuOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        <div className={`sm:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64' : 'max-h-0'} bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800`}>
          <ul className="flex flex-col px-4 py-2 gap-1">
            {links.map(({ label, id }) => (
              <li key={label}>
                <button
                  onClick={() => scrollTo(id)}
                  className="w-full text-left block py-2 px-2 rounded-lg hover:bg-primary/10 hover:text-primary font-medium transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="h-[60px] sm:h-[64px]" />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default NavBar;