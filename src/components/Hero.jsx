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
      className={`flex md:flex-row lg:flex-row xl:flex-row flex-col sm:py-6 sm:pb-14 py-6`}
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ParticleField mousePosition={mousePosition} />
        </Canvas>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:px-64 lg:px-36 xl:px-64  relative z-10 w-full">
        {/* Left Content */}
        <div
          className={`${styles.flexStart} flex-col xl:px-0 sm:px-8 px-6 flex-1`}
        >
          {/* Top Gradient Banner */}
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

          {/* Main Headings */}
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="font-poppins font-semibold 
    text-[32px] sm:text-[40px] md:text-[50px] lg:text-[30px] xl:text-[70px] 2xl:text-[80px] 
    text-white leading-tight sm:leading-[50px] md:leading-[70px] lg:leading-[60px] xl:leading-[95px] 2xl:leading-[105px]">
              We Provide Digital Solutions
            </h1>

            <h1 className="font-poppins font-semibold 
    text-[28px] sm:text-[36px] md:text-[45px] lg:text-[50px] xl:text-[65px] 2xl:text-[72px] 
    text-white leading-snug sm:leading-[45px] md:leading-[65px] lg:leading-[62px] xl:leading-[90px] 2xl:leading-[100px]">
              <span className="text-gradient">That Empower Businesses</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "linear", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="font-poppins font-semibold 
    text-[28px] sm:text-[36px] md:text-[45px] lg:text-[50px] xl:text-[65px] 2xl:text-[72px] 
    text-white leading-snug sm:leading-[45px] md:leading-[65px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[100px] 
    w-full">
              to Grow.
            </h1>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
              At Karmachain Infotech, we don’t just build digital solutions — we craft intelligent experiences that help businesses scale, engage, and succeed. From startups to enterprises, we deliver next-gen{" "}
              <span className="text-white font-semibold">
                Web, Mobile, Blockchain,
              </span>{" "}
              and{" "}
              <span className="text-white font-semibold">AI Solutions</span>
              that drive measurable growth.
            </p>
          </motion.div>
        </div>

        {/* Right Side Button (center on large, below on mobile) */}
        <div className="mt-6 md:mt-0 md:ml-8 flex justify-center md:justify-center md:self-center flex-1">
          <GetStarted />
        </div>
      </div>
    </section>


  );
};

export default Hero;
