import { CubeTextureLoader } from "three";
import { useThree } from "@react-three/fiber";

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([""]);

  scene.background = texture;
  return null;
};

export default SkyBox;
