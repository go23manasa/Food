import React from 'react'
import Darkimg from "../../assets/DarkMode.png"
import Lightimg from "../../assets/LightMode.png"

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") || "light"
    );
    const element = document.documentElement;
    React.useEffect(() => {
        if (theme === "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
        }, [theme]);

        const changeTheme = () => {
            if(theme === "light"){
                setTheme("dark");
            } else {
                setTheme("light");
            }
        };
  return (
    <>
        <div className="relative">
            <img 
            src={Darkimg}
            alt=""
            onClick={changeTheme}
            className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${ 
                theme === "light" ? "opacity-0" :"opacity-100" 
            } `}
            />
            <img 
            src={Lightimg}
            alt=""
            onClick={changeTheme}
            className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
            theme === "dark" ? "opacity-0" 
            : "opacity-100"
            }`}
            />
        </div>
    </>
  )
}

export default DarkMode

