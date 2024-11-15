import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { DoubleSide } from "three";

const Scene = () => {
  const color = useTexture("./faiz2.png");
  let cyl = useRef();
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });

  return (
    <group rotation={[0, 1.4, 0.4]}>
      <mesh ref={cyl}>
        {/* radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, */}
        <cylinderGeometry args={[1.8, 1.8, 1, 100, 100, true]} />
        <meshStandardMaterial side={DoubleSide} transparent map={color} />
      </mesh>
    </group>
  );
};

export default Scene;
