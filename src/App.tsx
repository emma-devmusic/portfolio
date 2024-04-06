import { About, Hero, Navbar, Newsletter, Desk } from "./components"
import { MouseEvent, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const App = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current)
      ref.current.style.background =
        `radial-gradient(circle at 20px 20px, rgba(0, 0, 0, 0.750) 0%, rgba(0, 0, 0, 0.93) ${400}px)`
  }, [])


  const handleMouse = (event: MouseEvent) => {
    const x = event.clientX
    const y = event.clientY
    if (ref.current)
      ref.current.style.background =
        `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0.750) 0%, rgba(0, 0, 0, 0.93) ${400}px)`
  }


  return (
    <div onMouseMove={handleMouse} className="app">
      <div ref={ref} id="content-degrade">
        <Parallax pages={2.5} >
            <Navbar />

            <ParallaxLayer offset={0} speed={.5}>
              <Hero />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={.8} style={{position:'relative', top: '35%'}}>
              <About />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={1}>
              <Newsletter />
            </ParallaxLayer>

            {/* <ParallaxLayer offset={1.99} speed={1} style={{top: '0px'}}>
              <Desk />
            </ParallaxLayer> */}

        </Parallax>
      </div>
    </div>
  )
}

export default App
