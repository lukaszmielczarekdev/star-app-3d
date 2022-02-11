import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Stars } from "@react-three/drei";
import { Camera } from "./Camera";
import { Ground } from "./Ground";
import { Player } from "./Player";
import { Cube } from "./Cube";
import { useCube } from "./useCubeStore";
import { RecoilRoot } from "recoil";
import Crosshair from "./Crosshair";

const Cubes = () => {
  const cubes = useCube();
  return [<Cube position={[0, 0.5, -10]} />, ...cubes];
};

const App = () => {
  return (
    <>
      <Canvas shadowMap sRGB gl={{ alpha: false }}>
        <RecoilRoot>
          <Camera fov={50} />
          <Crosshair />
          <ambientLight intensity={0.3} />
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
          <Physics gravity={[0, -30, 0]}>
            <Ground />
            <Player />
            <Cubes />
          </Physics>
        </RecoilRoot>
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
        />
      </Canvas>
      <span className="hud">
        WSAD - Move // Space - Jump // Click - Add Block // Alt(Option) + Click
        - Remove Block
      </span>
    </>
  );
};

export default App;
