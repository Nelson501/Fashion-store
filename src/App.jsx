import { useState } from "react";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./Navbar/MobileMenu";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Gallery } from "./Components/Gallery";
import { Contact } from "./Components/Contact";
import { Services } from "./Components/Services";
import { LoadingAmination } from "./Components/LoadingAmination";

function App() {
  const [isLoading, setIsLoading] = useState(true);   // 👈 start as true
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-[0.5rem]">

      {/* Loader */}
      {isLoading && (
        <LoadingAmination onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Content (only shows when not loading) */}
      {!isLoading && (
        <>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
          <Home />
          <About />
          <Gallery />
          <Services />
          <Contact />
        </>
      )}

    </div>
  );
}

export default App;