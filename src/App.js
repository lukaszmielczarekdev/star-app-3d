import { Canvas } from "react-three-fiber";
import { Sky } from "@react-three/drei";
import { Vector3 } from "three";
import { Physics } from "@react-three/cannon";
import { Camera } from "./Camera";
import { Ground } from "./Ground";
import { Player } from "./Player";
import { Cube } from "./Cube";
import { useCube } from "./useCubeStore";
import { RecoilRoot } from "recoil";

const Cubes = () => {
  const cubes = useCube();
  return [<Cube position={[0, 0.5, -10]} />, ...cubes];
};

const App = () => {
  return (
    <Canvas shadowMap sRGB gl={{ alpha: false }}>
      <RecoilRoot>
        <Camera fov={50} />
        <Sky sunPosition={new Vector3(100, 10, 100)} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Physics gravity={[0, -30, 0]}>
          <Ground />
          <Player />
          <Cubes />
        </Physics>
      </RecoilRoot>
    </Canvas>
  );
};

export default App;
