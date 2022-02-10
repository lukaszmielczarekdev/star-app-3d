import React, { useState } from "react";
import { useBox } from "@react-three/cannon";
import { TextureLoader } from "three";
import { useSetCube } from "./useCubeStore";
import rock_polished from "./images/textures/rock_polished.jpg";

export const Cube = (props) => {
  const [hover, set] = useState(null);
  const addCube = useSetCube();
  const texture = new TextureLoader().load(rock_polished);
  const [ref] = useBox(() => ({
    type: "Static",
    ...props,
  }));

  return (
    <mesh
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        set(Math.floor(e.faceIndex / 2));
      }}
      onPointerOut={() => set(null)}
      onClick={(e) => {
        e.stopPropagation();

        const faceIndex = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;

        switch (faceIndex) {
          case 4: {
            addCube(x, y, z + 1);
            return;
          }
          case 2: {
            addCube(x, y + 1, z);
            return;
          }
          case 1: {
            addCube(x - 1, y, z);
            return;
          }
          case 5: {
            addCube(x, y, z - 1);
            return;
          }
          case 3: {
            addCube(x, y - 1, z);
            return;
          }
          default: {
            addCube(x + 1, y, z);
            return;
          }
        }
      }}
    >
      {[...Array(6)].map((_, index) => (
        <meshStandardMaterial
          attachArray="material"
          map={texture}
          key={index}
          color={hover === index ? "grey" : "white"}
        />
      ))}
      <boxBufferGeometry attach="geometry" />
    </mesh>
  );
};
