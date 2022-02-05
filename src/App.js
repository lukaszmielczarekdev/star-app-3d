import { Canvas } from "react-three-fiber";
import { Sky } from "@react-three/drei";
import { Vector3 } from "three";
import { Physics } from "@react-three/cannon";
import { Camera } from "./Camera";
import { Ground } from "./Ground";
import { Player } from "./Player";

const App = () => {
  return (
    <Canvas>
      <Camera fov={50} />
      <Sky sunPosition={new Vector3(100, 10, 100)} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics>
        <Ground />
        <Player />
      </Physics>
    </Canvas>
  );
};

export default App;
