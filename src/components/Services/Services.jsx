import React from 'react'
import Img2 from "../../assets/Poha.jpg"
import Img3 from "../../assets/Idly.jpeg"
import Img1 from "../../assets/Dosa.jpg"


const ServicesData = [
    {
        id:1, 
        img: Img1,
        name: "Dosa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam neque numquam veritatis omnis ipsa magni minima quibusdam! Voluptatem exercitationem voluptatibus quos possimus, reiciendis ullam omnis.", 
        
    },
    {
        id:2, 
        img: Img2,
        name: "Poha",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam neque numquam veritatis omnis ipsa magni minima quibusdam! Voluptatem exercitationem voluptatibus quos possimus, reiciendis ullam omnis.", 
        
    },
    {
        id:3, 
        img: Img3,
        name: "Idly",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam neque numquam veritatis omnis ipsa magni minima quibusdam! Voluptatem exercitationem voluptatibus quos possimus, reiciendis ullam omnis.", 
        
    },
];
const Services = () => {
  return (
    <> 
        <div className="py-10">
            <div className="container">
                {/*Header section*/}
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</p>
                    <h1 className="text-3xl font-bold">Services</h1>
                    <p className="text-xs text-gray-400">
                        { " "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequuntur corrupti vitae eveniet qui rerum deserunt saepe delectus quae reprehenderit.
                    </p>
                </div>
                {/*Card Section*/}
                <div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {ServicesData.map(({ id, img, name, description}) => {
                            return (
                                <div key={id}
                                className="w-[350px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 shadow-xl">
                                    <div className="h-[100px]">
                                        <img src={img} alt=""
                                        className="max-w-[150px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h1 className="text-xl font-bold">{name}</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-3">{description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
        </div>
        </div>
    </>
  )
}

export default Services
