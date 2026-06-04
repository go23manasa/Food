import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonialData = [
  { id: 1, name: "Shruti Verma",    role: "Regular Customer", rating: 5,
    text: "The Masala Dosa is absolutely out of this world — crispy, perfectly spiced, and delivered piping hot every single time. Foodie is my go-to every weekend!",
    img: "https://media.istockphoto.com/id/1332701410/photo/running-errands-on-my-bicycle.jpg?s=1024x1024&w=is&k=20&c=dllUbRlZweff2VTbU-NfDA8lro6Yj5-0rYN51RwNom0=" },
  { id: 2, name: "Manjula Reddy",   role: "Food Blogger",     rating: 5,
    text: "As someone who writes about food professionally, I can tell you — Foodie's authenticity is rare. The Medu Vada tastes like it came straight from an Udupi kitchen.",
    img: "https://media.istockphoto.com/id/1420486889/photo/candid-portrait-of-young-middle-eastern-digital-native.jpg?s=612x612&w=is&k=20&c=MqGzYdcMDVK6f0CUER3AArAO5emE2dPlUozk7TZ7KCw=" },
  { id: 3, name: "Purna Srinivas",  role: "Office Goer",      rating: 5,
    text: "I order breakfast from Foodie before I start work every day. The Kanda Poha is light, fresh and never disappoints. The 30-min delivery promise is always kept!",
    img: "https://media.istockphoto.com/id/855413388/photo/theres-so-much-to-see.jpg?s=1024x1024&w=is&k=20&c=fXSNcmWCaXnDC1fqBIIDiAOr6NnVGz72O19MoW987kQ=" },
];

const Testimonial = () => {
  const settings = {
    dots: true, arrows: false, infinite: true, speed: 600,
    slidesToShow: 1, autoplay: true, autoplaySpeed: 3500,
    cssEase: "ease-in-out", pauseOnHover: true, pauseOnFocus: true,
  };

  return (
    <div className="py-14 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container">

        <div className="text-center mb-12 max-w-[450px] mx-auto">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-2">Testimonials</p>
          <h1 className="text-4xl font-bold font-display text-gray-800 dark:text-white">What Our Customers Say</h1>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-3 leading-relaxed">
            Real reviews from real food lovers who keep coming back for more.
          </p>
        </div>

        <div className="max-w-[600px] mx-auto">
          <Slider {...settings}>
            {testimonialData.map(({ id, name, role, text, img, rating }) => (
              <div key={id} className="px-2 pb-6">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col gap-5 relative overflow-hidden">
                  <FaQuoteLeft className="text-primary/20 text-7xl absolute -top-2 -left-2" />
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(rating)].map((_, i) => <FaStar key={i} className="text-sm" />)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative z-10">{text}</p>
                  <div className="flex items-center gap-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/30" />
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-white text-sm">{name}</h3>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
