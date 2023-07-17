import { NavLink } from "react-router-dom"
const ProyectItem = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-sky-500 to-sky-100">
          
        <img 
        className=" rounded-xl group-hover:opacity-10"
        src="img/Cap.png" 
        alt="/" />

        <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <NavLink to="/proyecto">
            <h3 className=" text-gray-600 cursor-pointer font-bold uppercase bg-white rounded-lg py-3 px-3 ease-in duration-300 hover:scale-105"> Mas info</h3>
          </NavLink>
          <p className="uppercase font-extrabold text-white">E-commerce Deportivo</p>
        </div>
        
        

      </div>
    
      <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl p-4  group hover:bg-gradient-to-r from-sky-500 to-sky-100">
        <img 
        className=" rounded-xl group-hover:opacity-10"
        src="img/Cap1.png" 
        alt="/" />
        <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <NavLink to="/proyectport">
            <h3 className=" text-gray-600 cursor-pointer font-bold uppercase bg-white rounded-lg py-3 px-3 ease-in duration-300 hover:scale-105"> Mas info</h3>
          </NavLink>
          <p className="uppercase font-extrabold text-white">Plataforma de Gifs</p>

      </div>
      

    </div>
    <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-sky-500 to-sky-100">
      <img 
      className=" rounded-xl group-hover:opacity-10"
      src="img/Cap2.png" 
      alt="/" />
      <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <NavLink to="/proyectport">
          <h3 className=" text-gray-600 cursor-pointer font-bold uppercase bg-white rounded-lg py-3 px-3 ease-in duration-300 hover:scale-105"> Mas info</h3>
        </NavLink>
        <p className="uppercase font-extrabold text-white">Movie App</p>

      </div>
      

    </div>
    
  </div>
  )
}

export default ProyectItem