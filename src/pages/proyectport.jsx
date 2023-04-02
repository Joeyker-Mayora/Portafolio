import { RiRadioButtonFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const proyectport = () => {
  return (
    <div className='py-20'>
    <div className=' max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className=' col-span-4'>
        <h1 className=" uppercase text-xl text-sky-700 tracking-widest">Proyecto</h1>
         <h1 className=' py-2 text-gray-700 font-bold text-4xl'>Descripcion</h1>
            <p className=' py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos ipsum facilis cum, illo corporis et perferendis! Ex adipisci a consequatur illum dolorum. Fuga voluptatibus illo tempora architecto minus cum similique aliquam earum aperiam, inventore quis aliquid quaerat? Quasi harum a consequuntur molestias at eos illum quae atque. Tenetur cum, facilis accusantium veritatis consequatur, numquam in dolor alias omnis, repudiandae aspernatur distinctio maiores qui at tempore eveniet iste dignissimos corrupti vero? Incidunt illo ut perferendis error aperiam itaque, asperiores velit, sint modi, at sequi cumque harum ullam? Veritatis amet consequatur sed sit nihil possimus ex iusto, dicta sequi. Cupiditate aliquam ex, impedit sapiente rerum esse corporis iure voluptatem debitis est ab blanditiis deleniti, commodi doloribus saepe delectus eos earum quam? Possimus ducimus iusto delectus minima maiores, necessitatibus consectetur ad aperiam, debitis eligendi quos quod atque similique deleniti officia expedita, porro sed aut? Modi voluptatum quas inventore alias ducimus, autem dolores minus et qui vero eius veniam, iusto unde suscipit, laboriosam culpa. At enim repellat, facilis inventore cupiditate ullam ad ab laudantium animi accusantium corrupti. Totam, veritatis? Nulla quo similique sed, nam quisquam obcaecati expedita saepe incidunt esse quas, excepturi dicta suscipit. Temporibus delectus tempore porro repudiandae! Natus consectetur sunt vel.</p>
            <Link to="https://github.com/Joeyker-Mayora/portafolio" target="_blank" className=' text-xl font-bold p-3 bg-gradient-to-r from-sky-800 to-sky-300 rounded-xl   text-gray-50 hover:scale-105 ease-in duration-300'>Codigo</Link>
           
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

export default proyectport