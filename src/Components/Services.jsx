import CARD1 from '../assets/media/recycle.svg'
import CARD2 from '../assets/media/user.svg'
import CARD3 from '../assets/media/phone.svg'


export const Services = ()=>{
    
    return <section
    id="services"
    className="flex flex-col justify-center items center bg-red-800">
        <div className="flex flex-col justify-center items-center p-[4rem]">
            <div className="flex flex-col justify-center items-center">
                <p className="text-center text-3xl font-semibold font-serif pb-8">Nelson Dayo Services &copy;</p>
                <p>We offer various clothing and shoes services for women and men in Nigeria</p>
            </div>
            <div className="grid grid-cols-1 lg:flex pt-10 gap-10 justify-center items-center">
                <div className="flex flex-col items-start gap-8 bg-red-950 p-9 ">
                    <h2 className="text-[1.5rem]">Any Kind of Alterations</h2>
                    <p>Have you lost weight, and clothes just sag on you? Or do you want to give new life to old clothes? Or maybe you've bought a dress, but it doesn't fit a little ? We can make any kind of alterations, make the old thing look new and stylish, change the fit and cut, or simply hem your jeans.</p>

                    <p className="bg-red-800 p-4">Request a quote</p>
                </div>
                <div className="flex flex-col items-start gap-8 bg-red-950 p-9">
                    <h2 className="text-[1.5rem]">Bespoke Tailoring</h2>
                    <p>Do you want clothes that no one else will have? Or maybe you have a non-standard body shape? Come to our atelier, and together with the designers you can come up with a unique and comfortable style. Bespoke tailoring takes from 5 to 15 days, depending on the complexity of the work.</p>

                    <p className="bg-red-800 p-4">Request a qoute</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col bg-black/95 items-center min-h-screen">
            <div className="flex flex-col gap-4 justify-center items-center p-10">
                <h2 className="text-center text-2xl">How to Buy MELANI Clothes</h2>
                <p className="text-center text-md">We have a large showroom near the city center, and from April 1 the second MELANI boutique will open</p>
            
            </div>
            <div className="grid grid-cols-1 lg:flex justify-center items-center p-[3rem] gap-12">
                {/* fisrt card */}
                <div className="flex flex-col justify-center items-center max-w-[25rem] text-white p-10 rounded-[20px] shadow-red-500 bg-black shadow-sm">
                    <div className='flex justify-center items-center border-2 bg-red-800 rounded-[50%] w-[60px] border-black'><img className=' ' src={CARD3} alt="" width={50}/></div>
                    <div className="flex flex-col justify-center items-center pt-8">
                        <h2 className="text-center text-2xl font-mono pb-3">Contact Us</h2>
                        <p className="text-center">If you want to order exclusive clothes or buy something from our collections, you need to make an appointment</p>
                    </div>
                </div>
                {/* fisrt card */}
                <div className="flex flex-col justify-center items-center max-w-[25rem] text-white p-10 rounded-[20px] shadow-red-500 bg-black shadow-sm">
                    <div><img className='flex justify-center items-center border-2 bg-red-800 rounded-[50%] w-[60px]' src={CARD2} alt="" width={50}/></div>
                    <div className="flex flex-col justify-center items-center pt-8">
                        <h2 className="text-center text-2xl font-mono pb-3">Visit Us</h2>
                        <p className="text-center">In a cozy studio, you can chat with the designer and come up with a unique design, try ready clothes and make measurements.</p>
                    </div>
                </div>
                {/* fisrt card */}
                <div className="flex flex-col justify-center items-center max-w-[25rem] text-white p-10 rounded-[20px] shadow-red-500 bg-black shadow-sm">
                    <div className=''><img className='flex justify-center items-center border-2 bg-red-800 rounded-[50%] w-[60px]' src={CARD1} alt="" width={50}/></div>
                    <div className="flex flex-col justify-center items-center pt-8">
                        <h2 className="text-center text-2xl font-mono pb-3">Make a Purshace</h2>
                        <p className="text-center">If you orderd bespoke tailoring, your oreder will be ready in 5-15 days. You may be asked to come for the fit check 1 tor 2 times.</p>
                    </div>
                </div>
                
            </div>
       
        </div>
    </section>
}