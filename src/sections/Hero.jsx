// import { Leva, useControls } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
import Robot from "../components/Robot.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import { calculateSizes } from "../constants/index.js";
import NodeLogo from "../components/NodeLogo.jsx";
import ViolatorClown from "../components/ViolatorClown.jsx";
import CyberpunkLaptop from "../components/CyberpunkLaptop.jsx";

const Hero = () => {
  // const x = useControls("CyberpunkLaptop", {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10,
  //   },
  // });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTable = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTable);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I'm Aldo <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Software Engineer & Web Developer
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera isMobile={isMobile} isTablet={isTable}>
              {/* <HackerRoom
                // scale={0.07}
                // position={[0, 0, 0]}
                // rotation={[0, 280, 0]}
                // position={[x.positionX, x.positionY, x.positionZ]}
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                rotation={[0, -Math.PI, 0]}
                /> */}

              <CyberpunkLaptop
                // scale={6}
                // position={[x.positionX, x.positionY, x.positionZ]}
                // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                // scale={[x.scale, x.scale, x.scale]}
                // PErsonal position={[0, -4.7, 10]}
                position={sizes.deskPosition}
                scale={sizes.deskScale}
                rotation={[0.2, 0.1, 0]}
              />
            </HeroCamera>

            <group>
              {/* <Target
                position={sizes.targetPosition}
                // scale={sizes.targetScale}
              /> */}
              <Robot position={sizes.robotPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              {/* <Rings position={sizes.ringPosition} /> */}
              <NodeLogo position={sizes.nodePosition} />
              {/* <Cube position={sizes.cubePosition} /> */}
              {/* <PulpFiction position={sizes.pulpfictionPosition} /> */}
              <ViolatorClown position={sizes.violatorPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's Work Together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
