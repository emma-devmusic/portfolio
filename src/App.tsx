import {
  Hero,
  Contact,
  WelcomeVisitor,
  FloatingCircle1,
  FloatingTriangle,
  FloatingCircle2,
  Loading,
  ProjectsList,
} from "./components";
import {
  useIntroScrollLock,
  useInteractiveBackground,
  useParallaxTriangle,
} from "./hooks";
import { useRef, useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const circleRef1 = useRef<HTMLDivElement>(null);
  const triangleRef = useRef<HTMLDivElement>(null);
  const circleRef2 = useRef<HTMLDivElement>(null);
  const trianglePointerRef = useRef({ x: 0, y: 0 });

  const isScrollLocked = useIntroScrollLock(showContent, contentRef);
  useParallaxTriangle(
    showContent,
    contentRef,
    triangleRef,
    trianglePointerRef,
  );
  const { handleMouse } = useInteractiveBackground(
    contentRef,
    circleRef1,
    circleRef2,
    trianglePointerRef,
  );

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  if (isLoading) {
    return <Loading onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div
      onMouseMove={handleMouse}
      className={`app relative h-screen overflow-hidden ${showContent ? "app-fade-in" : "app-loading"}`}
    >
      <FloatingTriangle ref={triangleRef} />
      <FloatingCircle1 ref={circleRef1} />
      <FloatingCircle2 ref={circleRef2} />
      <div
        ref={contentRef}
        id="content-degrade"
        className={`relative h-screen ${showContent ? "background-fade-in" : "background-hidden"} ${isScrollLocked ? "scroll-locked" : ""}`}
      >
        <div className="relative h-screen">
          <div className="flex max-[1199px]:flex-col relative">
            <div
              className={`mx-auto max-[1366px]:w-full max-[1366px]:max-w-100 max-[1199px]:max-h-125 max-w-125 min-[1200px]:sticky w-fit top-0 h-fit basis-1/3 ${showContent ? "" : "content-hidden"}`}
            >
              <Hero />
            </div>
            <div
              className={`max-w-5xl mx-auto w-full ${showContent ? "content-slide-in-right" : "content-hidden"}`}
            >
              <div className="max-w-4xl mx-auto px-4">
                <WelcomeVisitor className="reveal" />
                <ProjectsList />
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
