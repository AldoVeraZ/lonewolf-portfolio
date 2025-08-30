import { useRef, useState, useEffect } from "react";
import { Float, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ViolatorClown = ({ position }) => {
  const { scene, nodes, materials } = useGLTF(
    "https://pub-6292fb89d115492b847883e921b4e11f.r2.dev/violator-clown.glb"
  );
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    console.log("Escena del modelo ViolatorClown:", scene);
    console.log("Nodos:", nodes);
    console.log("Materiales:", materials);

    // Ajustar inclinación inicial (que no mire tanto hacia abajo)
    if (groupRef.current) {
      groupRef.current.rotation.x = -0.2; // gira un poquito hacia arriba
    }
  }, [scene, nodes, materials]);

  useGSAP(() => {
    if (!groupRef.current) return;
    gsap
      .timeline({ repeat: -1, repeatDelay: 0.5 })
      .to(groupRef.current.rotation, {
        y: hovered ? "+=1" : `+=${Math.PI * 2}`,
        duration: 16, // más lento
      });
  });

  return (
    <Float
      floatIntensity={0.2} // menos intensidad de movimiento para que no se acerque tanto
      rotationIntensity={0.1} // rotación más suave
      position={[position[0], position[1], position[2] - 1]} // alejar un poco hacia atrás
    >
      <primitive
        ref={groupRef}
        object={scene}
        scale={1}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      />
    </Float>
  );
};

useGLTF.preload(
  "https://pub-6292fb89d115492b847883e921b4e11f.r2.dev/violator-clown.glb"
);
export default ViolatorClown;

// // ViolatorClown.jsx
// import { useRef, useEffect } from "react";
// import { useGLTF } from "@react-three/drei";

// const ViolatorClown = (props) => {
//   const group = useRef();
//   const { scene, nodes, materials } = useGLTF("/models/violator-clown.glb"); // ajusta la ruta si es necesario

//   useEffect(() => {
//     console.log("Escena del modelo ViolatorClown:", scene);
//     console.log("Nodos:", nodes);
//     console.log("Materiales:", materials);
//   }, [scene, nodes, materials]);

//   return <primitive ref={group} object={scene} {...props} />;
// };

// export default ViolatorClown;
