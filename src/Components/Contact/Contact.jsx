import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {  AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";


import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Link } from "react-router-dom";



const Contact = () => {
  return (
    <div id="contactame" className=" w-full lg:h-screen ">
        <div className=" max-w-[1000px] px-2 py-16 mx-auto ">
        <h1 className=" ml-7 uppercase text-xl text-sky-700 tracking-widest">Contactame</h1>
        <div className=" grid lg:grid-cols-5 gap-8">
            <div className=" col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4">
                <div className=" lg:p-1 h-full">
                    <div>
                        <img 
                        className="rounded-xl hover:scale-105 ease-in duration-300"
                        src="img/R.jpg"
                         alt="/" />
                    </div>
                    <div>
                        <h1 className="py-2 text-gray-700 font-bold text-4xl">
                            Desarrollador Front-End 
                        </h1>
                        <p className=" py-4">
                            Estoy disponible para puestos independientes a tiempo completo. Ponte en contacto conmigo y conversemos
                        </p>
                    </div>
 <div>
                    <p className=" pt-8 uppercase">Conectate conmigo</p>
                    <div className=" flex items-center justify-between py-4">
                    <div className=' py-4 flex items-center justify-between max-w-[330px] mx-auto'>
                    <Link target="_blank" to="https://www.linkedin.com/in/joeyker-mayora-3b9993265/" className=" text-[35px] rounded-full shadow-lg p-2 shadow-gray-400 cursor-pointer      hover:text-sky-700 ease-in duration-500 hover:scale-105">
                      <FaLinkedinIn/>
                    </Link>
                   <Link target="_blank" to="https://github.com/Joeyker-Mayora" className=" text-[35px] rounded-full shadow-lg p-2 shadow-gray-400 cursor-pointer      hover:text-sky-700 ease-in duration-500 hover:scale-105">
                      <FaGithub/>
                    </Link>
                    <Link target="_blank" to="mailto:oswaldo_avilez@outlook.es" className=" text-[35px] rounded-full shadow-lg p-2 shadow-gray-400 cursor-pointer      hover:text-sky-700 ease-in duration-500 hover:scale-105">
                      <AiOutlineMail/>
                    </Link>
                    <Link target="_blank" to="https://wa.me/5491127029297" className=" text-[35px] rounded-full shadow-lg p-2 shadow-gray-400 cursor-pointer      hover:text-sky-700 ease-in duration-500 hover:scale-105">
                      <AiOutlineWhatsApp/>
                    </Link>
                    
                </div>
                </div>

                </div>
                </div>
               

            </div>
            <div className=" col-span-3 w-full h-auto shadow-xl shadow-gray-600 rounded-xl lg:p-4 ">
                <div className=" p-4">
                    <form>
                        <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                            <div className=" flex flex-col ">
                                <label className=" text-sm uppercase py-2">Nombre</label>
                                <input placeholder="Escribe tu nombre y apellido" className=" flex border-2 rounded-lg border-gray-300 p-3" type="text" />
                            </div>
                            <div className=" flex flex-col ">
                                <label className=" text-sm uppercase py-2">Numero Telefonico</label>
                                <input placeholder="ej: +5491134567654" className=" flex border-2 rounded-lg border-gray-300 p-3" type="text" />
                            </div>
                       
                        </div>
                        <div className="flex flex-col py-2">
                        <label className=" text-sm uppercase py-2">Email</label>
                        <input placeholder="Escribe tu correo electronico" className="  flex border-2 rounded-lg border-gray-300 p-3" type="email" />


                        </div>
                        <div className="flex flex-col py-2">
                        <label className=" text-sm uppercase py-2">Asunto</label>
                        <input placeholder="Escribe un asunto" className="  flex border-2 rounded-lg border-gray-300 p-3" type="text" />


                        </div>
                        <div className="flex flex-col py-2">
                        <label className=" text-sm uppercase py-2">Mensaje</label>
                        <textarea rows="10"  className="  flex border-2 rounded-lg border-gray-300 p-3"></textarea>


                        </div>
                        <button className="w-full bg-gradient-to-r from-sky-800 to-sky-300 hover:scale-105  rounded-xl p-4 mt-4 ease-in duration-300 text-gray-50 uppercase">Enviar Mensaje</button>
                        
                    </form>

                </div>

            </div>

        </div>
        <div>
       
            
        </div>
         </div>

    </div>
  )
}

export default Contact