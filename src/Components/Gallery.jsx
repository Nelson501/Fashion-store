import {Galleryimages} from './GalleryImages.jsx'

export const Gallery = ()=>{

     
    return <section id="gallery" className="flex flex-col bg-slate-00 justify-center items-center bg-gray-200">
        <div className='flex flex-col justify-center items-center p-10 b'>
            <h2 className='flex text-center text-4xl font-semibold tracking-wider pb-5 text-black'> Gallery</h2>
            <p className='flex text-center text-slate-700 text-xl italic font-mono bg-red-800 p-6 rounded-xl'>Explore our collection where every piece tells a story of style, comfort, and confidence.</p>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 space-x-10 text-black p-20'>
            {Galleryimages && Galleryimages.map((item, key)=> <div key={key} className='w-[200px] '>
                <div className='w-ful'><img src={item.src} alt=""  /></div>
                <div className='pt-4 bg-slate-400 pl-1 flex flex-col font-semibold'>
                    <h2 className='pb-3 font-semibold font-mono'>Price: {item.price}</h2>
                    <span>Name: {item.name}</span>
                    <span>Gender: {item.gender}</span>
                    <span className='italic'>Description:  {item.description}</span>
                    
                </div>
            </div> )}

        </div>
        
        
        
    </section>
}