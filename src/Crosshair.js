import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const Crosshair = () => {
  const { camera, mouse } = useThree();
  const mouseReticle = useRef();

  useFrame(() => {
    if (mouseReticle.current) {
      const vector = new Vector3(mouse.x, mouse.y).unproject(camera);
      mouseReticle.current.position.set(...vector.toArray());
    }
  });

  return (
    <mesh ref={mouseReticle}>
      <sphereBufferGeometry args={[0.001, 100, 100]} />
      <meshBasicMaterial color={"white"} />
    </mesh>
  );
};

export default Crosshair;
