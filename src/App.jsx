import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Scene from "./components/Scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 35 }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            intensity={10.0} // The bloom intensity.
            luminanceThreshold={0.01} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.1} // smoothness of the luminance threshold. Range is [0, 1]
            // mipmapBlur={false} // Enables or disables mipmap blur.
          />
        </EffectComposer>
      </Canvas>
      <h1> faeizmn.</h1>
    </>
  );
};

export default App;
