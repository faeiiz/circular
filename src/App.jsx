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
      <Canvas flat camera={{ fov: 25 }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            intensity={20.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
            // mipmapBlur={false} // Enables or disables mipmap blur.
          />
        </EffectComposer>
      </Canvas>
      <h1> faeizmn.</h1>
    </>
  );
};

export default App;
