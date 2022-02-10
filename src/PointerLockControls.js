import React, { useRef, useEffect } from "react";
import { extend, useThree } from "@react-three/fiber";
import { PointerLockControls as PointerLockControlsExtended } from "three/examples/jsm/controls/PointerLockControls";
extend({ PointerLockControlsExtended });

export const PointerLockControls = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    document.addEventListener("click", () => {
      controls.current.lock();
    });
  }, []);

  return (
    <pointerLockControlsExtended
      ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};
