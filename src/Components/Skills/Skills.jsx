
const Skills = () => {
  return (
    <div id="habilidades" className=" w-full lg:h-screen p-2">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full ">
            <h1 className=" uppercase text-xl text-sky-700 tracking-widest">Habilidades</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:scale-105">
                    <div className=" grid grid-cols-2 gap-4 items-center justify-center">
                        <div className=" mx-auto">
                        <h1 className=" uppercase ml-3 text-black font-bold">Html</h1>
                            <img 
                            width="70px"
                            height="70px"
                            src="img/html.png" 
                            alt="img"
                             />
                            

                        </div>

                    </div>

                </div>
                <div className="  p-6 shadow-xl rounded-xl ease-in duration-300 hover:scale-110">
                    <div className=" grid grid-cols-2 gap-4 items-center justify-center">
                        <div className=" mx-auto">
                        <h1 className=" uppercase ml-5 text-black font-bold">Css</h1>
                            <img 
                            width="70px"
                            src="img/css.png" 
                            alt="img"
                            height="70px" />
                            

                        </div>

                    </div>

                </div>
                <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:scale-105">
                    <div className=" grid grid-cols-2 gap-4 items-center justify-center">
                        <div className=" mx-auto">
                        <h1 className=" uppercase text-black font-bold">JavaScript</h1>
                            <img 
                            width="70px"
                            src="img/js.png" 
                            alt="img"
                            height="70px" />
                            

                        </div>

                    </div>

                </div>
                <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:scale-105">
                    <div className=" grid grid-cols-2 gap-4 items-center justify-center">
                        <div className=" mx-auto">
                            <h1 className=" uppercase ml-3 text-black font-bold">React</h1>
                            <img 
                            width="70px"
                            src="img/R.png" 
                            alt="img"
                            height="70px" />
                            

                        </div>

                    </div>

                </div>
                <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:scale-105">
                    <div className=" grid grid-cols-2 gap-4 items-center justify-center">
                        <div className=" mx-auto">
                        <h1 className=" uppercase ml-1 text-black font-bold">Tailwind Css</h1>
                            <img 
                            width="70px"
                            src="img/ta.png" 
                            alt="img"
                            height="70px" />
                            

                        </div>

                    </div>

                </div>
                <div className=" p-6 shadow-xl rounded-xl ease-in duration-300 hover:scale-105">
                    <div className=" grid grid-cols-2 gap-4 items-center justify-center">
                        <div className=" mx-auto">
                        <h1 className=" uppercase ml-3 text-black font-bold">Redux</h1>
                            <img 
                            width="70px"
                            src="img/re.png" 
                            alt="img"
                            height="70px" />
                            

                        </div>

                    </div>

                </div>

            </div>
        </div>

    </div>
  )
}

export default Skills