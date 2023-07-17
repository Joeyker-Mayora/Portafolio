import { NavLink } from "react-router-dom"


const Certificados = () => {
  return (
    <div id="educacion" className=" w-full">
        <div className=" max-w-[1000px] mx-auto px-2 py-16">
          <h1 className=" uppercase text-xl text-sky-700 tracking-widest">Educacion</h1>
          <div className=" grid md:grid-cols-2 gap-8">
        
          <div className="certif">
            <NavLink to="https://api.educacionit.com/pdf/certificados/joeyker-oswaldo-mayora-avilez-793480/56530">
              <img width="" src="img/it1.jpeg" alt="/" />
            </NavLink>
          </div>
          <div className="certif">
            <NavLink to="https://api.educacionit.com/pdf/certificados/joeyker-oswaldo-mayora-avilez-793480/58153">
             <img width="" src="img/it2.jpeg" alt="/" />
            </NavLink>
    
          </div>
          <div className="certif">
            <NavLink to="https://api.educacionit.com/pdf/certificados/joeyker-oswaldo-mayora-avilez-793480/58615">
              <img width="" src="img/it3.jpeg" alt="/" />
            </NavLink>  
   
          </div>
          <div className="certif">
            <NavLink to="https://www.coderhouse.com/pages/certificados/6400320d8a16d4000e8e1f47">
              <img width="" src="img/coder.png" alt="/" />
            </NavLink>
          </div>
   
        </div>
      </div>
    </div>
  )
}

export default Certificados