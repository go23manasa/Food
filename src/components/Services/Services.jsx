import React, { useState } from 'react'
import { FaStar, FaLeaf, FaFire } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { useCart } from '../../context/CartContext'

import pesarattu  from "../../assets/pesarattu.jpg"
import Pulihora   from "../../assets/Pulihora.jpeg"
import Pongal     from "../../assets/Pongal.jpg"
import Upma       from "../../assets/Upma.jpg"
import Appam      from "../../assets/Appam.jpeg"

const ServicesData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&q=80",
    name: "Masala Dosa",
    price: 79, spice: 2, region: "Karnataka", occasion: null, rating: 4.8,
    description: "Crispy golden crepe filled with spiced potato masala. A Bengaluru breakfast staple loved across the country.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80",
    name: "Idli",
    price: 49, spice: 1, region: "Tamil Nadu", occasion: null, rating: 4.6,
    description: "Soft, pillowy rice cakes steamed to perfection — the quintessential Tamil Nadu breakfast.",
  },
  {
    id: 3,
    img: pesarattu,
    name: "Pesarattu",
    price: 65, spice: 2, region: "Andhra Pradesh", occasion: null, rating: 4.5,
    description: "Crispy whole green moong dal crepe, a beloved Andhra breakfast served with ginger chutney.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
    name: "Medu Vada",
    price: 55, spice: 2, region: "Tamil Nadu", occasion: "festival", rating: 4.7,
    description: "Crispy lentil doughnuts offered during Pongal and temple festivals across Tamil Nadu.",
  },
  {
    id: 5,
    img: Pulihora,
    name: "Pulihora",
    price: 69, spice: 3, region: "Andhra Pradesh", occasion: "festival", rating: 4.6,
    description: "Tangy tamarind rice tempered with mustard, curry leaves and peanuts. An Andhra festival essential.",
  },
  {
    id: 6,
    img: Pongal,
    name: "Pongal",
    price: 59, spice: 1, region: "Tamil Nadu", occasion: "festival", rating: 4.7,
    description: "Creamy rice and lentil porridge tempered with ghee, pepper and cashews. Made for the Pongal harvest festival.",
  },
  {
    id: 7,
    img: Upma,
    name: "Upma",
    price: 45, spice: 1, region: "Karnataka", occasion: null, rating: 4.3,
    description: "Fluffy semolina porridge tempered with mustard seeds, curry leaves and vegetables. A Karnataka morning staple.",
  },
  {
    id: 8,
    img: Appam,
    name: "Appam",
    price: 69, spice: 1, region: "Kerala", occasion: null, rating: 4.8,
    description: "Lacy, bowl-shaped rice hoppers with crispy edges and a soft centre — Kerala's most iconic breakfast.",
  },
];

const spiceLabel = (n) => n === 1 ? 'Mild' : n === 2 ? 'Medium' : 'Spicy';
const spiceColor = (n) => n === 1 ? 'text-green-500' : n === 2 ? 'text-orange-400' : 'text-red-500';

const TABS = [
  { key: 'all',            label: 'All' },
  { key: 'Andhra Pradesh', label: '📍 Andhra Pradesh' },
  { key: 'Telangana',      label: '📍 Telangana' },
  { key: 'Tamil Nadu',     label: '📍 Tamil Nadu' },
  { key: 'Karnataka',      label: '📍 Karnataka' },
  { key: 'Kerala',         label: '📍 Kerala' },
  { key: 'festival',       label: '🎉 Festival Specials' },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { addToCart } = useCart();

  const filtered = ServicesData.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'festival') return item.occasion === 'festival';
    return item.region === activeTab;
  });

  return (
    <div id="menu-section" className="py-14 bg-white dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <div className="container">

        <div className="text-center mb-10 max-w-[540px] mx-auto">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Our Menu</p>
          <h1 className="text-4xl font-bold font-display">South Indian Favourites</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            Explore by state or occasion. Every dish is rooted in a real place and a real tradition.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-10 flex-wrap justify-center">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border whitespace-nowrap
                ${activeTab === key
                  ? 'bg-gradient-to-r from-primary to-secondary text-white border-transparent shadow-md'
                  : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary'
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Empty state for tabs with no dishes yet */}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 dark:text-gray-600">
            <p className="text-4xl mb-3">🍽️</p>
            <p className="font-semibold">No dishes yet for this region.</p>
            <p className="text-sm mt-1">More coming soon!</p>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(({ id, img, name, price, rating, description, region, spice, occasion }) => (
            <div key={id}
              className="group rounded-3xl bg-gray-50 dark:bg-gray-800 hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-xl flex flex-col overflow-visible"
            >
              <div className="h-[90px] flex items-start justify-center">
                <img
                  src={img} alt={name}
                  className="w-[130px] h-[130px] object-cover rounded-2xl shadow-lg transform -translate-y-10 group-hover:scale-105 group-hover:rotate-3 duration-300"
                />
              </div>
              <div className="p-5 pt-4 flex flex-col gap-2 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <h2 className="text-base font-bold font-display leading-tight">{name}</h2>
                  <FaLeaf className="text-green-500 group-hover:text-green-200 text-xs shrink-0" />
                </div>

                <div className="flex items-center gap-2 text-xs flex-wrap">
                  <span className="text-gray-400 group-hover:text-white/70">📍 {region}</span>
                  {occasion === 'festival' && (
                    <span className="text-yellow-500 group-hover:text-yellow-200">🎉 Festival</span>
                  )}
                  <span className={`font-semibold flex items-center gap-0.5 ${spiceColor(spice)} group-hover:text-white/80`}>
                    <FaFire className="text-[10px]" />{spiceLabel(spice)}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-xs ${i < Math.floor(rating) ? 'opacity-100' : 'opacity-30'}`} />
                  ))}
                  <span className="text-xs ml-1 text-gray-400 group-hover:text-white/70">{rating}</span>
                </div>

                <p className="text-xs text-gray-400 group-hover:text-white/80 line-clamp-2 leading-relaxed">{description}</p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200/50 dark:border-gray-700/50 group-hover:border-white/20">
                  <span className="text-lg font-bold">₹{price}</span>
                  <button
                    onClick={() => addToCart({ id, img, name, price })}
                    className="flex items-center gap-1.5 bg-gray-200 dark:bg-gray-700 group-hover:bg-white group-hover:text-primary px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105"
                  >
                    <FaCartShopping className="text-xs" /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105">
            View Full Menu →
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;