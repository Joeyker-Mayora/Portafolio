
import { RiRadioButtonFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Proyect = () => {
  return (
    <div className='py-20'>
        <div className=' max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className=' col-span-4'>
            <h1 className=" uppercase text-xl text-sky-700 tracking-widest">E-commerce</h1>
             <h1 className=' py-2 text-gray-700 font-bold text-4xl'>Descripcion</h1>
                <p className=' py-4'>Es una Tienda de deportes basada en accesorios de Beisbol, futbol, Baloncesto, Futbol Americano, contiene un filtrado de productos, un formulario para registrarse, manejo el estado global de la página web con la herramienta Redux Toolkit.</p>
                <Link to="https://github.com/Joeyker-Mayora/deportes" target="_blank" className=' text-xl font-bold p-3 bg-gradient-to-r from-sky-800 to-sky-300 rounded-xl   text-gray-50 hover:scale-105 ease-in duration-300'>Codigo</Link>
                <Link to="https://the-denim-joeyker-mayora.vercel.app/" target="_blank" className=' ml-3  text-xl font-bold p-3 bg-gradient-to-r from-sky-800 to-sky-300 hover:scale-105  rounded-xl mt-4 ease-in duration-300 text-gray-50 '>Aplicacion</Link>

            </div>
            <div className=' col-span-4 md:col-span-1 p-4 rounded-xl shadow-xl shadow-gray-400'>
                <div className='py2'>
                    <p className=' text-center font-bold pb-2'>Tecnologias</p>
                    <div className=''>
                        <p className=' text-gray-600 flex items-center py-2'><RiRadioButtonFill className=' pr-2'/>React Js</p>
                        <p className=' text-gray-600 flex items-center py-2'><RiRadioButtonFill className=' pr-2'/>Tailwind Css</p>
                        <p className=' text-gray-600 flex items-center py-2'><RiRadioButtonFill className=' pr-2'/>JavaScript</p>
                        <p className=' text-gray-600 flex items-center py-2'><RiRadioButtonFill className=' pr-2'/>Redux Toolkit</p>
                    </div>


                </div>

            </div>
        </div>
    </div>
  )
}

export default Proyect