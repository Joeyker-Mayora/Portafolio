import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {  AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";
import Skills from "../Skills/Skills";
import Certificados from "../Certificados/Certificados";
import Proyects from "../Proyects/Proyects";
import Contact from "../Contact/Contact";

const Main = () => {
  return (
    <div id="inicio" className=" w-full h-screen text-center">
        <div className=' max-w-[1240px] w-full h-full flex justify-center items-center mx-auto p-2 '>
            <div>
                <p className=' uppercase tracking-widest text-sm'>El fracaso es la manera de empezar de nuevo, pero más inteligente</p>
                <h1 className=' py-4 text-gray-700 font-bold text-4xl'>Hola, soy <span className='text-sky-700'>Joeyker Mayora</span></h1>
                <h1 className=' py-2 text-gray-700 font-bold text-4xl'>
                    Un Desarollador de Software Front-End
                </h1>
                <p className=' py-4 text-gray-600 mx-auto max-w-[70%]'>
                    Soy un desarrollador Front-End jr de Venezuela, vivo actualmente en Argentina. Estoy centrado (especializado en el mantenimiento y construccion de paginas web) en crear aplicaciones de Front-End.
                </p>
                 
                <div className=' py-4 flex items-center justify-between max-w-[330px] mx-auto'>
                    
                    <Link 
                    to="https://www.linkedin.com/in/joeyker-mayora-avilez-3b9993265/" 
                    target="_blank" 
                    className="btn">
                      <FaLinkedinIn/>
                    </Link>
                    
                    <Link  
                    target="_blank" 
                    to="https://github.com/Joeyker-Mayora" 
                    className="btn">
                      <FaGithub/>
                    </Link>

                    <Link 
                    target="_blank" 
                    to="mailto:oswaldo_avilez@outlook.es" 
                    className="btn">
                      <AiOutlineMail/>
                    </Link>

                    <Link 
                    target="_blank" 
                    to="https://wa.me/5491127029297" 
                    className="btn">
                      <AiOutlineWhatsApp/>
                    </Link>
                    
                </div>

            </div>
        </div>
        <Certificados/>
        <Skills/>
        <Proyects/>
        <Contact/>
    </div>
  )
}

export default Main