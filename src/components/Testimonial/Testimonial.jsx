import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    id: 1, 
    name: "Shruti",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione atque id nemo asperiores illo enim deleniti. Consequuntur consequatur voluptatibus",
    img: "https://media.istockphoto.com/id/1332701410/photo/running-errands-on-my-bicycle.jpg?s=1024x1024&w=is&k=20&c=dllUbRlZweff2VTbU-NfDA8lro6Yj5-0rYN51RwNom0=",
  },
  {
    id: 2, 
    name: "Manjula",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione atque id nemo asperiores illo enim deleniti. Consequuntur consequatur voluptatibus",
    img: "https://media.istockphoto.com/id/1420486889/photo/candid-portrait-of-young-middle-eastern-digital-native.jpg?s=612x612&w=is&k=20&c=MqGzYdcMDVK6f0CUER3AArAO5emE2dPlUozk7TZ7KCw=",
  },
  {
    id: 3, 
    name: "Purna S",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione atque id nemo asperiores illo enim deleniti. Consequuntur consequatur voluptatibus",
    img: "https://media.istockphoto.com/id/855413388/photo/theres-so-much-to-see.jpg?s=1024x1024&w=is&k=20&c=fXSNcmWCaXnDC1fqBIIDiAOr6NnVGz72O19MoW987kQ=",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed:500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div>
        <div className="container mt-10">
          {/*Header Section*/}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h5 className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say about us-;
            </h5>
            <h1 className="text-3xl font-bold mt-2">Testimonial</h1>
            <p className="text-xs text-gray-400 mt-5">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione atque id nemo asperiores illo enim deleniti. Consequuntur consequatur voluptatibus earum at explicabo voluptatum. Ad, animi nisi eligendi quo non natus.
            </p>
          </div> 
          {/*testimonial section*/}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-3">
            <Slider {...settings}>
              {testimonialData.map(({id, name, text, img }) => {
                return (
                  <div key={id} className="my-2">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative p-6">
                    <img
                    src={img}
                    alt=""
                    className="rounded-full block mx-auto w-20 h-20 object cover"
                    />
                    <p className="text-gray-500 text-sm">{text}</p>
                    <h1 className="text-xl font-bold mb-2">{name}</h1>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                     ,,
                    </p>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial

