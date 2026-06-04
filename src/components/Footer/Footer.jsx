import React from 'react'
import FooterLogo from '../../assets/Foodie.png'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6"

const footerLinks = {
  "Quick Links": [
    { label: "Home",    id: "hero-section" },
    { label: "Menu",    id: "menu-section" },
    { label: "About",   id: "about-section" },
    { label: "Contact", id: "footer-section" },
  ],
  "Support": [
    { label: "FAQs",          id: null },
    { label: "Track Order",   id: null },
    { label: "Delivery Info", id: null },
    { label: "Refund Policy", id: null },
  ],
  "Company": [
    { label: "Blog",            id: null },
    { label: "Careers",         id: null },
    { label: "Privacy Policy",  id: null },
    { label: "Terms of Use",    id: null },
  ],
};

const scrollTo = (id) => {
  if (!id) return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer id="footer-section" className="bg-gray-900 text-gray-300 mt-6">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <button onClick={() => scrollTo('hero-section')} className="flex items-center gap-2 text-2xl font-bold font-display text-white">
              <img src={FooterLogo} alt="Foodie" className="w-10" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Foodie</span>
            </button>
            <p className="text-sm leading-relaxed text-gray-400">
              Bringing authentic South Indian flavours to your doorstep. Fresh, fast, and made with love.
            </p>
            <p className="text-sm text-gray-500">📞 XXXXXXXXXX</p>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              {[FaInstagram, FaFacebook, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-white text-gray-400 transition-all duration-200 hover:scale-110">
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-white font-bold text-base mb-4 font-display">{heading}</h3>
              <ul className="space-y-2.5">
                {links.map(({ label, id }) => (
                  <li key={label}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="text-sm text-gray-400 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
        Crafted with care for food lovers
        </div>
      </div>
    </footer>
  );
};

export default Footer;