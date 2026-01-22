import NEL_IMG from "../assets/img/nel1.jpg"

export const Home = ()=> {
    return <section
    id="home"
    className="flex flex-col justify-center items-center">
        <div className="flex flex-col-reverse justify-between  lg:flex-row gap-10 lg:gap-15 px-[3.5rem] mt-[4rem] lg:mt-[2rem] pb-6 pt-10">
            <div className="flex flex-col text-center justify-center items-center mt-[4rem] p-5">
            <p className="text-[1.3rem] text-red-700">Looking for somethoing special?</p>
            <p className="text-[1.8rem] lg:text-[2rem] text-center mt-[2rem] text-black font-bold ">Feel the spirit of the city in <br /> bold and functional outfits</p>
            <p className=" text-slate-900 p-6 shadow-sm text-md shadow-slate-400 font-mono italic mt-4 rounded-2xl"> <span className="font-semibold">FASHION </span><span className="text-amber-900 font-semibold">HOME</span> boutique is a great place to give yourself a new look. <br /> We create exclusive outfits  for men and women, as well as shoes. <br /> We can execute even the most unpreditable ideals!</p>
            <div className="flex flex-col md:flex-row mt-6 gap-6">
                <div className="bg-red-600 transition relative hover:translate-y-1 hover:bg-red-500 p-4 rounded-xl text-center">
                    Make an Appointment

                </div>
                <div className="text-center bg-white text-slate-900 p-4 rounded-xl border-1 hover:translate-y-1 transition relative hover:bg-gray-800 hover:text-white">
                    Learn More
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
            <img className=" rounded-br-[20px] rounded-tl-[20px]" src={NEL_IMG} alt="" width={320} />
        </div>

        </div>
        
        <div className="flex flex-col justify-center items-center text-black bg-slate-100 w-full px-15 py-8">
            <div className="flex flex-col justify-center items-center ">
                <p className="flex text-center text-4xl font-bold pb-4">We've just started...</p>
                <p className="text-center text-slate-600 text-lg pb-10">...but we still have achievemets we're proud of &copy;</p>
            </div>
            <div className="grid grid-cols-1 lg:flex gap-[7rem] justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-center text-5xl lg:text-6xl font-bold text-red-700 pb-8">694+</p>
                    <p className="text-center font-mono text-slate-500">Positive reviews</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p  className="text-center text-5xl lg:text-6xl font-bold text-red-700 pb-8">1300+</p>
                    <p className="text-center font-mono text-slate-500">Perfect-looking clients</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p  className="text-center text-5xl lg:text-6xl font-bold text-red-700 pb-8">2200+</p>
                    <p className="text-center font-mono text-slate-500">items purchased in 2024</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p  className="text-center text-5xl lg:text-6xl font-bold text-red-700 pb-8">7+</p>
                    <p className="text-center font-mono text-slate-500">Collectios launched</p>
                </div>
                
            </div>

        </div>
    </section>
}