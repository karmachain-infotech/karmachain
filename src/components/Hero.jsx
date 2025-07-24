import styles from "../style";
import {
  discount,
  robot,
  robot1,
  robot2,
  Animated,
  Animated1,
} from "../assets";
import { motion } from "framer-motion";
import { useRef, useEffect, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, Float, Text3D } from "@react-three/drei"
import Logo3D from "./Logo3D";
// import { Button } from "@/components/ui/button"
// import { ChevronRight } from "lucide-react"
import * as THREE from "three"
// import { useTheme } from "next-themes"
import GetStarted from "./GetStarted";

// function ParticleField({ count = 2000, mousePosition }) {
//   const mesh = useRef()
//   const light = useRef()
//   const { viewport } = useThree()

//   // Create particles
//   const particlesPosition = new Float32Array(count * 3)
//   const particlesScale = new Float32Array(count)
//   const particlesColor = new Float32Array(count * 3)

//   for (let i = 0; i < count; i++) {
//     const i3 = i * 1
//     particlesPosition[i3] = (Math.random() - 0.5) * 15
//     particlesPosition[i3 + 1] = (Math.random() - 0.5) * 15
//     particlesPosition[i3 + 2] = (Math.random() - 0.5) * 15
//     particlesScale[i] = Math.random()

//     // Create a gradient of colors from purple to blue
//     const mixFactor = Math.random()
//     particlesColor[i3] = 0.37 + mixFactor * 0.23 // Purple to blue (R)
//     particlesColor[i3 + 1] = 0.21 + mixFactor * 0.29 // Purple to blue (G)
//     particlesColor[i3 + 2] = 0.94 - mixFactor * 0.34 // Purple to blue (B)
//   }

//   useFrame((state, delta) => {
//     if (mesh.current) {
//       mesh.current.rotation.x += delta * 0.01
//       mesh.current.rotation.y += delta * 0.02

//       // Respond to mouse movement
//       if (mousePosition.current) {
//         const { x, y } = mousePosition.current
//         mesh.current.rotation.x += (y * 0.001 - mesh.current.rotation.x) * 0.1
//         mesh.current.rotation.y += (x * 0.001 - mesh.current.rotation.y) * 0.1
//       }
//     }

//     if (light.current) {
//       light.current.position.x = Math.sin(state.clock.elapsedTime * 0.6) * 3
//       light.current.position.y = Math.cos(state.clock.elapsedTime * 0.4) * 3
//     }
//   })

//   return (
//     <>
//       <pointLight ref={light} distance={20} intensity={10} color="#5e35b1" />
//       <pointLight position={[-5, 5, 5]} distance={20} intensity={5} color="#3b82f6" />
//       <points ref={mesh}>
//         <bufferGeometry>
//           <bufferAttribute attach="attributes-position" count={count} array={particlesPosition} itemSize={3} />
//           <bufferAttribute attach="attributes-scale" count={count} array={particlesScale} itemSize={1} />
//           <bufferAttribute attach="attributes-color" count={count} array={particlesColor} itemSize={3} />
//         </bufferGeometry>
//         <pointsMaterial
//           size={0.15}
//           sizeAttenuation
//           transparent
//           vertexColors
//           blending={THREE.AdditiveBlending}
//           depthWrite={false}
//         />
//       </points>
//     </>
//   )
// }

function createCircleTexture(size = 128) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')

  const center = size / 2
  const radius = size / 2

  const gradient = ctx.createRadialGradient(center, center, 0, center, center, radius)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')

  ctx.fillStyle = gradient
  ctx.beginPath()
  ctx.arc(center, center, radius, 0, Math.PI * 2)
  ctx.fill()

  const texture = new THREE.CanvasTexture(canvas)
  return texture
}

function ParticleField({ count = 2000, mousePosition }) {
  const mesh = useRef()
  const light = useRef()
  const { viewport } = useThree()

  // ✅ Create the round texture once
  const texture = useMemo(() => createCircleTexture(128), [])

  const { positions, scales, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 15
      positions[i3 + 1] = (Math.random() - 0.5) * 15
      positions[i3 + 2] = (Math.random() - 0.5) * 15

      scales[i] = Math.random()

      const mixFactor = Math.random()
      colors[i3] = 0.37 + mixFactor * 0.23
      colors[i3 + 1] = 0.21 + mixFactor * 0.29
      colors[i3 + 2] = 0.94 - mixFactor * 0.34
    }

    return { positions, scales, colors }
  }, [count])

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()

    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.01
      mesh.current.rotation.y += delta * 0.02

      if (mousePosition.current) {
        const { x, y } = mousePosition.current
        mesh.current.rotation.x += (y * 0.001 - mesh.current.rotation.x) * 0.05
        mesh.current.rotation.y += (x * 0.001 - mesh.current.rotation.y) * 0.05
      }

      const scaleAttr = mesh.current.geometry.attributes.scale
      for (let i = 0; i < count; i++) {
        scaleAttr.array[i] = 0.6 + Math.sin(time * 2 + i) * 0.3
      }
      scaleAttr.needsUpdate = true

      const posAttr = mesh.current.geometry.attributes.position
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        posAttr.array[i3 + 1] += Math.sin(time * 0.5 + i) * 0.0005
      }
      posAttr.needsUpdate = true
    }

    if (light.current) {
      light.current.position.x = Math.sin(time * 0.6) * 3
      light.current.position.y = Math.cos(time * 0.4) * 3
    }
  })

  return (
    <>
      <pointLight ref={light} distance={20} intensity={10} color="#5e35b1" />
      <pointLight position={[-5, 5, 5]} distance={20} intensity={5} color="#3b82f6" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={count}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-scale"
            array={scales}
            count={count}
            itemSize={1}
          />
          <bufferAttribute
            attach="attributes-color"
            array={colors}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          map={texture} // 🟢 Use the round texture
          size={0.15}
          sizeAttenuation
          transparent
          alphaTest={0.5}
          vertexColors
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  )
}


function FloatingLogo() {
  const mesh = useRef()

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + 0.2
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text3D
        ref={mesh}
        font="/fonts/Inter_Bold.json"
        size={0.8}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-3.5, 0, 0]}
      >
        K
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#4c1d95"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </Float>
  )
}



const Hero = () => {
  const mousePosition = useRef({ x: 0, y: 0 })
  // const { resolvedTheme } = useTheme()
  // const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    // <section id='home' className={`flex  md:flex-row flex-col ${styles.paddingY}` }  style={{ backgroundImage: `url(${Animated})`, backgroundSize: 'cover',filter: 'brightness(70%)' }}>
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          {/* <ambientLight intensity={0.5} /> */}
          <ParticleField mousePosition={mousePosition} />
          {/* <FloatingLogo />
          <Environment preset="night" /> */}
        </Canvas>
      </div>
      {/* <div className={`${styles.boxWidth}`}> */}

      <div className="flex md:felx-center flex-col md:flex-row md:px-64  py-9">
        <div
          className={`${styles.flexStart} flex-col xl:px-0 sm:px-8 px-6`}
          style={{ zIndex: 1 }}
        >
          <div className="flex flex-row items-center px-4 py-2 sm:py-3 sm:px-6 bg-discount-gradient rounded-[10px] mb-2 sm:mb-4 w-full max-w-[700px]">
            
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "anticipate", duration: 1 }}
              viewport={{ once: true }}
              className="ml-2"
            >
              <p className={`${styles.paragraph} text-sm sm:text-base`}>
                <span className="text-white">Your Trusted</span>{" "}
                <span className="text-white">IT Solutions Provider</span>
              </p>
            </motion.div>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h1 className="flex-1 font-poppins font-semibold md:text-[72px] text-[37px] text-white md:leading-[100.8px] ">
                We Provide Services <br className="hidden" />{" "}
                {/* <span className="text-gradient">That Light Up</span>{" "} */}
              </h1>
              <h1 className="flex-1 font-poppins font-semibold md:text-[72px] text-[37px] text-white md:leading-[100.8px]" >
                <span className="text-gradient">That Light Up</span>{" "}
              </h1>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="sm:flex hidden md:mr-4 mr-0">
                {/* <GetStarted /> */}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="font-poppins font-semibold md:text-[68px] text-[37px] text-white ss:leading-[100px] w-full">
              Our Clients Faces.
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </motion.div>
        </div>
        
       
        {/* <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10"
          >
            <img
              src={Animated}
              alt="Digital Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>

          <div
            className="floating-element absolute -top-10 -left-10 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-lg shadow-lg z-20 hidden md:block"
            data-speed="0.03"
          >
            <span className="text-sm font-medium text-white">Developer</span>

          </div>

          <div
            className="floating-element absolute -bottom-5 left-1/4 bg-gray-800 px-4 py-2 rounded-lg shadow-lg z-20 hidden md:block"
            data-speed="0.05"
          >
            <span className="text-sm font-medium text-white">Developer</span>
          </div>

          <div
            className="floating-element absolute top-1/3 -right-10 bg-gray-800 px-4 py-2 rounded-lg shadow-lg z-20 hidden md:block"
            data-speed="0.07"
          >
            <span className="text-sm font-medium text-white">Designer</span>
          </div>
        </div> */}

        {/* <div className={`flex-1 flex ${styles.flexCenter} relative w-full`}>
          <motion.div className="px-4 w-full">
            <img
              src={Animated}
              alt="billing"
              className="w-full h-auto relative z-[5] rounded-3xl"
            />
          </motion.div>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-20" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-10 bottom-10 blue__gradient" />
        </div> */}
        {/* <div className={`md:invisible mt-3 ${styles.flexCenter} `}>
          <GetStarted />
        </div> */}
        {/* <div
          className={`absolute top-0 bg-fixed left-0 w-full h-full bg-gradient-to-r from-transparent to-black`}
          style={{
            backgroundImage: `url(${Animated})`,
            backgroundSize: "cover",

            opacity: "0.2", // Adjust brightness percentage as needed
            zIndex: 0,
          }}
    ></div> */}
      </div>
    </section>
  );
};

export default Hero;
