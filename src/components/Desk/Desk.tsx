import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"
import uno from '../../assets/img/parallax/5.png'
import dos from '../../assets/img/parallax/6.png'
import tres from '../../assets/img/parallax/7.png'
import cuatro from '../../assets/img/parallax/8.png'
import cinco from '../../assets/img/parallax/9.png'
import { useRef } from "react"

export const Desk = () => {
    const parallax = useRef<IParallax>(null!)

    const clg = () => {
        if (parallax.current) {
          console.log(parallax.current.content)
        }
      }
    return (
        <div id="desk">
            <Parallax 
                pages={1.3} 
                ref={parallax}
                style={{
                    height: '70%',
                    scrollbarWidth: 'none',
                }}
            >

                <ParallaxLayer 
                    offset={0}
                    factor={1.2} 
                    speed={0.5} 
                    style={{
                        backgroundImage: `url(${uno})`,
                        backgroundPosition: 'bottom center',
                        backgroundSize: 'cover',
                    }}
                />
                <ParallaxLayer 
                    offset={0}
                    factor={1.2} 
                    speed={0.4} 
                    style={{
                        backgroundImage: `url(${dos})`,
                        backgroundPosition: 'bottom left',
                        backgroundSize: 'cover',

                    }}
                />
                <ParallaxLayer 
                    offset={0}
                    factor={1.3} 
                    speed={0.3} 
                    style={{
                        backgroundImage: `url(${tres})`,
                        backgroundPosition: 'bottom center',
                        backgroundSize: 'cover',
                    }}
                />
                <ParallaxLayer 
                    offset={0}
                    factor={1.3} 
                    speed={0.1} 
                    style={{
                        backgroundImage: `url(${cuatro})`,
                        backgroundPosition: 'bottom center',
                        backgroundSize: 'cover',

                    }}

                />
                <ParallaxLayer 
                    offset={0}
                    factor={1.3} 
                    speed={0.15} 
                    style={{
                        backgroundImage: `url(${cinco})`,
                        backgroundPosition: 'bottom center',
                        backgroundSize: 'cover',
                    }}
                />
                <ParallaxLayer 
                    offset={0}
                    factor={1.3} 
                    speed={0} 
                    style={{
                        background:'rgba(0,0,0,0.200)',
                        backgroundPosition: 'center center',
                    }}
                    
                />
                
                <ParallaxLayer
                    offset={0}
                    factor={1} 
                    speed={0.4}
                >
                    <div className="title-project d-flex justify-content-center align-items-center">
                        <h2 >Proyectos</h2>
                    </div>
                </ParallaxLayer>



            </Parallax>
        </div>
    )
}
