import NEL from "../assets/nel1.jpg"

export const Home = ()=> {
    return <section id="#home" className="min-h-screen flex flex-col-reverse justify-between lg:flex-row gap-10 lg:gap-15 px-[5rem] mt-[6rem] lg:mt-[2rem]">
        <div className="flex flex-col justify-center items-center mt-[4rem] p-5">
            <p className="text-[1.3rem] text-slate-900">Looking for somethoing special?</p>
            <p className="text-[2rem] font-bold mt-6">Feel the spirit of the city in <br /> bold and functional outfits</p>
            <p className="bg-gradient-to-r from-teal-700 via-blue-800 to-cyan-650 p-6 shadow-md shadow-amber-800 font-mono italic mt-4 rounded-2xl">NELSON fashoin boutique is a great place to give yourself a new look. <br /> We create exclusive outfits  fro men and women, as well as shoes. <br /> We can execute even the most unpreditable ideals!</p>
            <div className="flex flex-col md:flex-row mt-6 gap-6">
                <div className="bg-slate-900 p-4 rounded-2xl text-center">
                    Make an Appointment

                </div>
                <div className="text-center bg-white text-slate-900 p-4 rounded-2xl">
                    Learn More
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center rounded-[20px]">
            <img className="rounded-[20px]" src={NEL} alt="" width={350} />
        </div>
    </section>
}