import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef, useCallback } from "react";

const NodeLogo = ({ position }) => {
  const refList = useRef([]);
  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const { scene } = useGLTF("/models/nodejs-logo.glb");

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      // Rotación continua solo en Y
      gsap.to(
        refList.current.map((r) => r.rotation),
        {
          y: "+=" + Math.PI * 2, // 360 grados
          duration: 8, // tiempo de una vuelta (ajustable)
          repeat: -1, // repetir infinitamente
          ease: "linear", // suave y constante
        }
      );
    },
    { dependencies: position }
  );

  return (
    <group scale={0.5}>
      {/* Usamos el GLB en lugar de un torus */}
      <primitive object={scene} ref={getRef} />
    </group>
  );
};

useGLTF.preload("/models/nodejs-logo.glb");

export default NodeLogo;
