import { useState } from "react"
import { Navbar } from "./Navbar"
import { MobileMenu } from "./Navbar/MobileMenu"
import { LoadingAmination } from "./Components/LoadingAmination"
import { Home } from "./Components/Home"


function App() {
  const[isLoading, setIsLoading] = useState(false)
  const[isOpen, setIsOpen] = useState(false)

  return<div className="flex flex-col gap[1rem]">
    {/* {isLoading && <LoadingAmination onComplete={()=>setIsLoading(true)} />} */}

    <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Home/>
      
  </div>
  


    
    
}

export default App
