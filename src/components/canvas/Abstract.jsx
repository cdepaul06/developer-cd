import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// ! Sketchfab.com is a great place for different models (use this when changing the desktop model)
const Abstract = ({ isMobile }) => {
  const computer = useGLTF("./abstract/scene.gltf");

  const mesh = useRef();

  useFrame(({ clock }) => {
    mesh.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh}>
      <hemisphereLight intensity={0.25} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 65, 25]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.2 : 1.5}
        position={isMobile ? [0, 0, -0.3] : [0, -0.5, -0.2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// ! This handles most of the 3D rendering, might need to make adjustments after you change the model1
const AbstractCanvas = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // This sets the initial state of isMobile based on the result of the media query
    setisMobile(mediaQuery.matches);

    // This function updates the state of isMobile whenever the media query result changes
    const handleMediaQueryChange = (e) => {
      setisMobile(e.matches);
    };

    // This adds an event listener to call handleMediaQueryChange whenever the media query result changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // This removes the event listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Abstract isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default AbstractCanvas;
