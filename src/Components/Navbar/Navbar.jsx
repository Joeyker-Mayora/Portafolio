import { Link } from "react-router-dom"
import { RiCloseFill  } from "react-icons/ri";
import {  AiOutlineMail, AiOutlineMenu, AiOutlineWhatsApp } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav]= useState(false)
  const [shadow, setShadow] = useState(false)
  const handleLink = (e, id) => {
    e.preventDefault(); window.location.replace('/'+ id);
  }

  const menu = () => {
    setNav(!nav)
  }
  
  useEffect(()=>{
    const hanle = ()=>{
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
     }
     window.addEventListener("scroll", hanle)
  },[])
  return (
    <div className=" bg-sky-100 fixed w-full h-20 shadow-2xl z-[100]" >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        
        <span className="text-sky-700 font-bold text-[40px]">
       Jm  
      </span>
        <div>
        <ul className=" uppercase font-bold  hidden md:flex">
        <Link onClick={(e) => handleLink(e,"#inicio")}>
          <li className="ml-10 text-sm hover:text-sky-700">Inicio</li>
        </Link>
        <Link onClick={(e) => handleLink(e,"#educacion")}>
          <li className="ml-10 text-sm hover:text-sky-700">Educacion</li>
        </Link>
        <Link onClick={(e) => handleLink(e,"#habilidades")}>
          <li className="ml-10 text-sm hover:text-sky-700">Habilidades</li>
        </Link>
        <Link onClick={(e) => handleLink(e,"#proyectos")} >
          <li className="ml-10 text-sm hover:text-sky-700">Proyectos</li>
        </Link>
        <Link onClick={(e) => handleLink(e,"#contactame")} >
          <li className=" ml-10 text-sm hover:text-sky-700">Contactame</li>
        </Link>
        </ul>
        <div>
          <button onClick={menu} className="md:hidden text-[30px]  hover:text-sky-700">
            <AiOutlineMenu/> 
          </button>
        </div>
        
      </div>
      </div>

      <div className={nav ? " md:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : ""}>
        <div className={
          nav
            ? " md:hidden fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-sky-100 p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
          <div>
              <div className="flex w-full items-center justify-between">
                <Link to="/">
                <span className="text-sky-700 font-bold text-[40px]">
                  Jm  
                </span>

                </Link>
                
                <button onClick={menu} className="text-[30px] rounded-full shadow-lg p-2 shadow-gray-400 cursor-pointer hover:text-sky-700">
                 <RiCloseFill/> 
                </button>
                </div>
              <div className=" border-b border-gray-300 my-4">
                <p className=" text-sm uppercase w-[85%] md:w-[90%] py-4">El fracaso es la manera de empezar de nuevo, pero más inteligente</p>
              </div>
              </div>
              <div className=" py-4 flex flex-col">
                <ul className=" uppercase font-bold">
                 
                  <Link>
                    <li onClick={(e) => { 
                      setNav(false)
                      handleLink(e,"#inicio")}
                      } 
                      className=" text-sm py-4 hover:text-sky-700">Inicio</li>
                  </Link>
                  <Link>
                    <li onClick={(e) => { 
                      setNav(false)
                      handleLink(e,"#Educacion")}
                      } 
                      className=" text-sm py-4 hover:text-sky-700">Educacion</li>
                  </Link>
                  <Link>
                    <li onClick={(e) => { 
                      setNav(false)
                      handleLink(e,"#habilidades")}
                      } 
                      className=" text-sm py-4 hover:text-sky-700">Habilidades</li>
                  </Link>
                  <Link>
                    <li onClick={(e) => { 
                      setNav(false)
                      handleLink(e,"#proyectos")}
                      } 
                      className=" text-sm py-4 hover:text-sky-700">Proyectos</li>
                  </Link>
                  <Link>
                    <li onClick={(e) => { 
                      setNav(false)
                      handleLink(e,"#contactame")}
                      } 
                      className=" text-sm py-4 hover:text-sky-700">Contactame</li>
                  </Link>
                 
                  
                </ul>
                <div className=" pt-[28px]">
                  <p className=" uppercase tracking-widest">Redes</p>

                  <div className="flex items-center w-full my-4 sm:w-[80%] ">
                    <Link className=" text-[30px] rounded-full shadow-lg p-2 shadow-gray-400 cursor-pointer hover:text-sky-700 ease-in duration-500">
                      <FaLinkedinIn/>
                    </Link>
                    <Link  target="_blank" to="https://github.com/Joeyker-Mayora" className=" ml-[20px] text-[30px] rounded-full shadow-lg p-2 shadow-gray-400 cursor-pointer hover:text-sky-700 ease-in duration-500 ">
                      <FaGithub/>
                    </Link>
                    <Link target="_blank" to="mailto:oswaldo_avilez@outlook.es" className=" ml-[20px] text-[30px] rounded-full shadow-lg p-2 shadow-gray-400 cursor-pointer hover:text-sky-700 ease-in duration-500">
                      <AiOutlineMail/>
                    </Link>
                    <Link target="_blank" to="https://wa.me/5491127029297" className="ml-[20px] text-[30px] rounded-full shadow-lg p-2 shadow-gray-400 cursor-pointer hover:text-sky-700 hover:scale-105 ease-in duration-500 ">
                      <AiOutlineWhatsApp/>
                    </Link>
                  </div>

                </div>
              </div>
             
            </div>
            </div>
         </div>
    )
}

export default Navbar