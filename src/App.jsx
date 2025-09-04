import { useState } from "react"
import { Navbar } from "./Navbar"
import { MobileMenu } from "./Navbar/MobileMenu"
import { LoadingAmination } from "./Components/LoadingAmination"
import { Home } from "./Components/Home"
import { About } from "./Components/About"
import { Contact } from "./Components/Contact"


function App() {
  const[isLoading, setIsLoading] = useState(false)
  const[isOpen, setIsOpen] = useState(false)

  return<div className="flex flex-col gap[1rem]">
    {/* {isLoading && <LoadingAmination onComplete={()=>setIsLoading(true)} />} */}

    <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Home/>
    <About/>
    <Contact/>
      
  </div>
  


    
    
}

export default App
