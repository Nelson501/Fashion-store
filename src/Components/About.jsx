import NELSS from '../assets/img/pic3.jpg'
import BESPOKE from '../assets/media/web-awesome.svg'
import FABRICS from '../assets/media/tornado.svg'
import UNIQUE from '../assets/media/globe.svg'

export const About = ()=>{
    return <section id="about" className="flex flex-col justify-center items-center">
        <div className='grid grid-cols-1 lg:flex justify-center text-black items-center bg-slate-200'>
            <div className="flex justify-center items-center w-full ">
            <div className='flex flex-col justify-center items-center text-white bg-red-700 min-h-screen'>
                <h1 className='flex text-start text-4xl font-mono font-semibold italic p-4 '> About US </h1>
                <p className='text-start px-[4rem] text-xl'>Welcome to Nelson Dayo, your ultimate destiantion for style, trends and self-expression. We believe fashion is more tan just clothing-it's a lifestyle, a statemet, and a way to showcase individuality. Our mission is make fashion acccessible, inspiring and tailored to your unique taste.</p>
                <p className='text-start px-[4rem] text-xl pb-6'>At Nelson Dayo, we bring together creativity and technology to deliver a seamless fashion exprience. whether you your're looking for the latest trends, timeless classics, or personalized recommendations, we've designed this platform to help you expolre, discover and express your style with confidence &copy; </p>
            </div>
            <div className='hidden lg:flex text-center items-center relative right-20 tracking-[2rem] rotate-90'>
                <h1 className='italic font-extrabold text-red-700 bg-clip-text flex text-start text-[80px]'>About</h1>
            </div>           
        </div>
        <div className=' hidden lg:flex min-h-screen' >
            <img className='min-h-screen h-full' src={NELSS} alt="image" width={500} />
        </div>
        
        </div>
        <div className='flex flex-col justify-center items-center bg-black/90'>
            <div className='flex flex-col justify-center items-center py-10 px-20'>
                <div className='flex flex-col justify-center items-center pb-10'>
                    <h1 className='text-center text-4xl font-semibold pb-4'>How Are We Different?</h1>
                    <p className='text-center italic tracking-wider'>There Are hundrends of fashion designers and ateliers in Nigeria, so why should you use our <br /> services and clothes? Here is why &copy;
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:flex justify-center items-center pt-12 space-x-15'>
                    {/* first card */}
                    <div className='flex flex-col justify-center space-y-6 pt-8'>
                        <div className='pb-10'><img className=' bg-white rounded-[50%]' src={BESPOKE} alt="photo"  width={50}/></div>
                        <div className='' >
                            <h2 className='text-2xl pb-4'>Bespoke Atelier</h2>
                            <p>We create unique outfits and alterations. We can hem your jeans or create an evening gown from scratch</p>
                        </div>
                        <div className='pt-4'>
                            <ul className='list-disc list-item'>
                                <li>Any alterations</li>
                                <li>Made-to-measure</li>
                                <li>Restoration services</li>
                            </ul>
                        </div>
                        
                    </div>

                    {/* second card */}
                    <div className='flex flex-col justify-center space-y-6 pt-8'>
                        <div className='pb-4'><img className='bg-white rounded-[50%]' src={FABRICS} alt="photo" width={50} /></div>
                        <div>
                            <h2 className='text-2xl pb-4'>Best Fabrics</h2>
                            <p>We make bespoke clothes and items for our collectios only from the best natural fabrics from italy</p>
                        </div>
                        <div className='pt-4'>
                            <ul className='list-disc list-item'>
                                <li>100% organic cotton</li>
                                <li>Suede and skin</li>
                                <li>Exclusive patterns</li>
                            </ul>
                        </div>
                        
                    </div>

                    {/* third card */}
                    <div className='flex flex-col justify-center space-y-6 pt-8'>
                        <div className='pb-10'><img className=' bg-white rounded-[50%]' src={UNIQUE} alt="photo" width={50} /></div>
                        <div>
                            <h2 className='pb-4 text-2xl'>Unique collections</h2>
                            <p>Each item our collection is presented only in 1 copy in each size. You are unlikely to meet a person in the same clothes.</p>
                        </div>
                        <div className='pt-4'>
                            <ul className='list-disc list-item'>
                                <li>Clothes, shoues and accessories</li>
                                <li>Street style and casual</li>
                                <li>Mix-and-match</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </section>
}