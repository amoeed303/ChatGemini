import React from 'react'
import Logo from "../assets/logo.svg"
const Header = () => {
    return (
    
        <header className=" w-3/4  m-4 border rounded-full shadow-md">
          <div className=" flex flex-wrap  mx-auto p-2">
            <img src={Logo} className="h-9 mr-1 ml-4" alt="logoimage"></img>
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              ChatGemini
            </span>
          </div>
        </header>
    
    );
}

export default Header