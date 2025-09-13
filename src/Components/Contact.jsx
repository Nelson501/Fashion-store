import FACEBOOK from '../assets/media/facebook.svg'
import INSTAGRAM from '../assets/media/instagram.svg'
import LINKEDIN from '../assets/media/linkedin.svg'
import TWITTER from '../assets/media/x-twitter.svg'

export const Contact = ()=>{
    const medias = [
        {href: "facebook.com", src:FACEBOOK, alt:"Facebook"},
        {href:"instagram.com", src:INSTAGRAM, alt:"Instagram"},
        {href:"linkedin.com", src:LINKEDIN, alt:"LinkedIn"},
        {href:"twitter.com", src: TWITTER, alt:"X"},
        
    ]
    return <section
    id="contact"
    className="flex flex-col bg-white/50 items-center justify-center text-black">
        <div className="flex flex-col justify-center items-center p-10 bg-transparent">
            <div className="flex flex-col justify-center items-center pb-10">
                <h1 className="text-center text-3xl font-serif pb-4">Contacts</h1>
                <p className=" rounded-md text-center items-center text-xl
                pb-10 bg-slate-900 text-white p-4">You are Welcome here to buy designer clothes or make any alterations</p>
            </div>
                <p className="text-black w-full p-4 ">Fill out the form and come to our store. Together, we'll find a perfect style for you.</p>

            <form action="http://formsubmit.co/sunnynax01@gmail.com" method="POST" className=" w-full space-y-6 p-4 rounded-2xl text-slate-400">
                <div className="relative tex-white">
                    <input type="name" name="name" id="name" required placeholder="Enter Your Full Name" className="w-full bg-slate-300/10 border-2 border-slate-400 rounded px-4 py-3 transition focus:outline-none focus:bg-slate-700/5"/>
                </div>
                <div className="relative">
                    <input type="email" name="email" id="email" required placeholder="exaple@email.com" className="w-full bg-slate-300/10 border-2 border-slate-400 rounded px-4 py-3 transition focus:outline-none focus:bg-slate-700/5"/> 
                </div>
                <div className="relative">
                    <input type="number" name="number" id="number" required placeholder="Enter Your Number" className="w-full bg-slate-300/10 border-2 border-slate-400 rounded px-4 py-3  transition focus:outline-none focus:bg-slate-700/5"/>  
                </div>
                <textarea name="message" id="message" placeholder="Enter Your Message Here...." rows={6} className="bg-slate-300/10 border-2 pt-4 w-full p-4 border- rounded-xl focus:outline-none focus:bg-700/5">
                </textarea>
                <button type="submit" className="w-full bg-red-700 hover:bg-slate-900 text-center py-3 text-white transition relative overflow-hidden hover:translate-y-1 cursor-pointer">Request a quote</button>

            </form>
        </div>
        <footer className="bg-gray-900 p-4 w-full text-white flex flex-col justify-center items-center border-t-2 border-slate-900 rounded-t-md">
            <p className='font-serif italic text-xl'>&copy; 2025 Fashion Home | Fashion that speaks your style</p>
            <div className="flex gap-10 justify-center items-center pt-10">
                <p>Follow Us:</p>
                <div className="flex space-x-1 text-center text-white ">
                    {medias && medias.map((media, key)=>
                    <div key={key} className='flex justify-center items-center'>
                        <a href={media.href}><img className='text-white bg-white rounded-[50%]' src={media.src} alt={media.alt} width={25}/></a>
                    </div> )}
                    
                </div>
            </div>
        </footer>

    </section>
}