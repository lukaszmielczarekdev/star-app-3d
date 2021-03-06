import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { nanoid } from "nanoid";
import { $cubes } from "./state";
import { Cube } from "./Cube";
import SimplexNoise from "simplex-noise";
const simplex = new SimplexNoise();

export const useCube = () => useRecoilValue($cubes);

export const useSetCube = () => {
  const setCubes = useSetRecoilState($cubes);
  return (x, y, z) =>
    setCubes((cubes) => [
      ...cubes,
      <Cube key={nanoid()} position={[x, y, z]} />,
    ]);
};

export const useGenerateWorld = () => {
  const blocks = [];
  let x_dim = 0;
  let z_dim = 0;
  const height_increase = 0.05;
  const amplitude = 3;
  for (let x = 0; x < 20; x++) {
    x_dim = 0;
    for (let z = 0; z < 20; z++) {
      let v = Math.abs(
        Math.round(simplex.noise2D(x_dim, z_dim) * amplitude) - 0.5
      );
      blocks.push(<Cube key={nanoid()} position={[x, v, z]} />);
      x_dim = x_dim + height_increase;
    }
    z_dim = z_dim + height_increase;
  }
  return blocks;
};

export const useRemoveCube = () => {
  const setCubes = useSetRecoilState($cubes);
  return (x, y, z) =>
    setCubes((cubes) =>
      cubes.filter(
        (cube) =>
          JSON.stringify(cube.props.position) !== JSON.stringify([x, y, z])
      )
    );
};
