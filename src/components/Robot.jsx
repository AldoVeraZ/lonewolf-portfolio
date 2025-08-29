// src/components/Robot.jsx
import { useGSAP } from "@gsap/react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Robot = (props) => {
  // 1) Referencia para transformaciones/animaciones si más adelante las queremos
  const robotRef = useRef();

  // 2) Cargamos el modelo desde /public (ruta absoluta desde la raíz del sitio)
  const { scene, animations } = useGLTF("/models/robot-draco.glb");

  // 3) Hook para controlar animaciones embebidas en el GLB (si las hay)
  const { actions } = useAnimations(animations, scene);

  // 4) Efecto: si existe una animación "Idle", la reproducimos.
  useEffect(() => {
    if (actions && actions.Idle) {
      actions.Idle.play();
    }
    // 5) Opcional pro: habilitar sombras en todas las mallas del robot
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [actions, scene]);

  // Animación GSAP para "flotar" arriba/abajo
  useGSAP(
    () => {
      if (robotRef.current) {
        gsap.to(robotRef.current.position, {
          y: robotRef.current.position.y + 0.5,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    },
    { scope: robotRef }
  );

  // 6) Devolvemos el modelo como primitive dentro de un contenedor transformable
  //    - mantenemos una rotación inicial similar al Target para “caer parado” en tu escena
  //    - scale = 1.5 igual que tu Target actual (lo afinamos después si hace falta)
  return (
    <mesh ref={robotRef} {...props} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

useGLTF.preload("/models/robot-draco.glb");

export default Robot;
