import { Suspense,  } from "react";
import { Canvas,  } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import Model from "./Model";
import Model2 from "./Model2";
import Model3 from "./Model3";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Center from "@/components/Center";

export default function AR() {
    return (
        <>
        <Header />
        <Center>
        <div>
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 75, position: [0, 0, 25] }} style={{ "position": "absolute"}} >
                <PresentationControls>
                    <OrbitControls enablePan={true}></OrbitControls>
                    <Suspense fallback>={null}
                        <Model scale={3} /> 
                        <ambientLight />
                    </Suspense>
                </PresentationControls>
            </Canvas>
        </div>
        <div>
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 75, position: [0, 0, 25] }} style={{ "position": "absolute"}} >
                <PresentationControls>
                    <OrbitControls enablePan={true}></OrbitControls>
                    <Suspense fallback>={null}
                        <Model3 scale={3}/> 
                        <ambientLight />
                    </Suspense>
                </PresentationControls>
            </Canvas>
        </div>
        <div>
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 75, position: [0, 0, 25] }} style={{ "position": "absolute"}} >
                <PresentationControls>
                    <OrbitControls enablePan={true}></OrbitControls>
                    <Suspense fallback>={null}
                        <Model2 scale={0.7} /> 
                        <ambientLight />
                    </Suspense>
                </PresentationControls>
            </Canvas>
        </div>
        </Center>
        <Footer />
        </>
    );
}