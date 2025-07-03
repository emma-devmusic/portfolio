import { AboutProject, Hero, Newsletter } from "./components";
import pc1 from "./assets/img/padel-center/padel-center-1.png";
import pc2 from "./assets/img/padel-center/padel-center-2.png";
import cg1 from "./assets/img/clinica-giuliani/clinica-giuliani-1.png";
import cg2 from "./assets/img/clinica-giuliani/clinica-giuliani-2.png";
import sm1 from "./assets/img/sm-innova/sm-innova-1.png"
import sm2 from "./assets/img/sm-innova/sm-innova-2.png"
import { MouseEvent, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import circle from "./assets/img/parallax/circle.png";
import triangle from "./assets/img/parallax/triangle.png";

const App = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouse = (event: MouseEvent) => {
    const xNorm = event.clientX / window.innerWidth; // 0 (izq) → 1 (der)
    const yNorm = event.clientY / window.innerHeight; // 0 (arriba) → 1 (abajo)

    // Calcular un ángulo entre 0° (horizontal) y 180° (horizontal invertido),
    // combinando x e y para que, al subir y mover a la derecha, bote hacia arriba-derecha.
    const angle = (xNorm + (1 - yNorm)) * 90;

    if (ref.current) {
      ref.current.style.background = `
        linear-gradient(
          ${angle}deg,
          rgba(0, 16, 33, 0.95) 0%,
          rgba(14, 26, 57, 0.95) 100%
        )`;
    }
  };
  return (
    <div onMouseMove={handleMouse} className="app">
      <div ref={ref} id="content-degrade">
        {/* <Navbar /> */}
        <div className="page-content">
          <Parallax pages={3}>
            <ParallaxLayer speed={0.7} style={{ opacity: 0.5 }}>
              <img
                className="img-rotate"
                src={circle}
                alt="circulo"
                style={{
                  display: "block",
                  width: "30%",
                  marginLeft: "40%",
                  marginTop: "-10%",
                }}
              />
            </ParallaxLayer>

            <ParallaxLayer offset={0.7} speed={1} style={{ opacity: 0.6 }}>
              <img
                className="img-rotate"
                src={triangle}
                alt="triangulo"
                style={{ display: "block", width: "40%", marginLeft: "75%" }}
              />
            </ParallaxLayer>

            <ParallaxLayer offset={1.5} speed={0.7} style={{ opacity: 0.3 }}>
              <img
                className="img-rotate"
                src={circle}
                alt="circulo"
                style={{
                  display: "block",
                  width: "40%",
                  marginLeft: "0%",
                  marginTop: "10%",
                }}
              />
            </ParallaxLayer>

            <ParallaxLayer speed={0.2}>
              <Hero />
            </ParallaxLayer>

            <ParallaxLayer offset={.9} speed={.5}>
              <AboutProject imgBack={pc1} imgFront={pc2} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.5} speed={.5}>
              <AboutProject imgBack={cg2} imgFront={cg1} />
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={.5}>
              <AboutProject imgBack={sm1} imgFront={sm2} />
            </ParallaxLayer>

            {/* <ParallaxLayer offset={2} speed={1}>
              <Newsletter />
            </ParallaxLayer> */}

            {/* <ParallaxLayer offset={1.99} speed={1} style={{top: '0px'}}>
                <Desk />
            </ParallaxLayer> */}
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default App;
