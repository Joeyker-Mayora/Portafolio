import { NavLink } from "react-router-dom"


const Certificados = () => {
  return (
    <section id="educacion" className=" w-full">
        <div className=" max-w-[1000px] mx-auto px-2 py-16">
        <h1 className=" uppercase text-xl text-sky-700 tracking-widest">Educacion</h1>
        <div className=" grid md:grid-cols-2 gap-8">
       
        <div className=" relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-sky-800 to-sky-300">
          <NavLink to="https://api.educacionit.com/pdf/certificados/joeyker-oswaldo-mayora-avilez-793480/56530">
           <img width="" src="img/it1.jpeg" alt="/" />
          </NavLink>
      </div>
      <div className=" relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-sky-800 to-sky-300">
          <NavLink to="https://api.educacionit.com/pdf/certificados/joeyker-oswaldo-mayora-avilez-793480/58153">
                    <img width="" src="img/it2.jpeg" alt="/" />
          </NavLink>
   
      </div>
      <div className=" relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-sky-800 to-sky-300">
      <NavLink to="https://api.educacionit.com/pdf/certificados/joeyker-oswaldo-mayora-avilez-793480/58615">
        <img width="" src="img/it3.jpeg" alt="/" />
        </NavLink>
   
      </div>
      <div className=" relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-sky-800 to-sky-300">
      <NavLink to="https://www.coderhouse.com/pages/certificados/6400320d8a16d4000e8e1f47">
          <img width="" src="img/coder.png" alt="/" />
          </NavLink>
          
   
      </div>
   
    
 

        </div>

        </div>
    </section>
  )
}

export default Certificados