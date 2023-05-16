import { RiRadioButtonFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const proyectport = () => {
  return (
    <div className='py-20'>
    <div className=' max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className=' col-span-4'>
        <h1 className=" uppercase text-xl text-sky-700 tracking-widest">GifsApp</h1>
         <h1 className=' py-2 text-gray-700 font-bold text-4xl'>Descripcion</h1>
            <p className=' py-4'>Este seria mi sitio web, ofrezco una mejor visualizacion a lo que seria mi formacion como Desarollador. Cree toda la interfaz con react JS y un poco de estilo con Tailwind css</p>
            <Link to="https://github.com/Joeyker-Mayora/portafolio" target="_blank" className=' text-xl font-bold p-3 bg-gradient-to-r from-sky-800 to-sky-300 rounded-xl   text-gray-50 hover:scale-105 ease-in duration-300'>Codigo</Link>
           
        </div>
        <div className=' col-span-4 md:col-span-1 p-4 rounded-xl shadow-xl shadow-gray-400'>
            <div className='py2'>
                <p className=' text-center font-bold pb-2'>Tecnologias</p>
                <div className=''>
                    <p className=' text-gray-600 flex items-center py-2'><RiRadioButtonFill className=' pr-2'/>React Js</p>
                    <p className=' text-gray-600 flex items-center py-2'><RiRadioButtonFill className=' pr-2'/>Tailwind Css</p>
                    <p className=' text-gray-600 flex items-center py-2'><RiRadioButtonFill className=' pr-2'/>JavaScript</p>
                   
                </div>


            </div>

        </div>
    </div>
</div>
  )
}

export default proyectport