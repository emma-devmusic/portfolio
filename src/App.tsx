import { About, Hero, Navbar, Newsletter, Desk } from "./components"
import { MouseEvent, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import circle from './assets/img/parallax/circle.png'
import triangle from './assets/img/parallax/triangle.png'

const App = () => {
  
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (event: MouseEvent) => {
    const x = event.clientX
    const y = event.clientY
    if (ref.current)
      ref.current.style.background =
        `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0.850) 0%, rgba(0, 0, 0, 0.93) ${400}px)`
  }


  return (
    <div onMouseMove={handleMouse} className="app">
      <div ref={ref} id="content-degrade">
        <Navbar />
        <div className="page-content">
          <Parallax pages={2} >

            <ParallaxLayer speed={.7} style={{opacity: .5}}>
              <img className="img-rotate" src={circle} alt="circulo" style={{display: 'block', width: '30%', marginLeft: '40%', marginTop: '-10%'}}/>
            </ParallaxLayer>
            
            
            <ParallaxLayer  offset={0.7} speed={1} style={{opacity: .6}}>
              <img className="img-rotate" src={triangle} alt="triangulo" style={{display: 'block', width: '40%', marginLeft: '75%'}}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1.5} speed={.7} style={{opacity: .3}}>
              <img className="img-rotate" src={circle} alt="circulo" style={{display: 'block', width: '40%', marginLeft: '0%', marginTop: '10%'}}/>
            </ParallaxLayer>
            
            <ParallaxLayer speed={.2} >
              <Hero />
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={.5} style={{ position: 'relative', top: '40%' }}>
              <About />
            </ParallaxLayer>

            <ParallaxLayer offset={1.2} speed={1}>
              <Newsletter />
            </ParallaxLayer>

            {/* <ParallaxLayer offset={1.99} speed={1} style={{top: '0px'}}>
                <Desk />
            </ParallaxLayer> */}
            
          </Parallax>
        </div>
      </div>
    </div>
  )
}

export default App
