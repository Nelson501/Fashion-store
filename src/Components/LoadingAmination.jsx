import { useEffect, useState } from "react"

export const LoadingAmination = ({onComplete})=>{
    const[text, setText] = useState("")

    const fulltext = "You Are Welcome To My Website"

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() =>{
            setText(fulltext.substring(0, index));
            index++

            if(index >= fulltext.length){
                clearInterval(interval)
                setTimeout(()=>{onComplete()},1000);
            }
        }, 100)

        return () => clearInterval(interval)

    }, [onComplete])


    return <div className="bg-black fixed insert-0 z-50 text-white flex flex-col items-center justify-center gap-5">
        <div className="w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 aminate-loading"></div>
        </div>

        <div className="mb-4 text-2xl font-serif font-semibold" >
            {text}
            <span className="aminate-blink ml-1 text-2xl front-bold">&copy;</span>
        </div>

        <div className="w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 aminate-loading"></div>
        </div>
    </div>
}