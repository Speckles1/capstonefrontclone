import React from 'react'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model2(props) {
    const { scene  } = useGLTF("./3.glb");

    useFrame(() => {
        if (scene.current) {
            scene.current.rotation.y += 0.01;
        }
    });

    return <primitive object={scene} {...props} position={[6.5, -1, 0]}/>
  }