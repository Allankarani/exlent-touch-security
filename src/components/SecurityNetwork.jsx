import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

export default function SecurityNetwork() {
  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Central Server */}
      <Sphere position={[0, 0, 0]} args={[1.5, 32, 32]}>
        <meshStandardMaterial color="#9c1931" metalness={0.8} roughness={0.2} />
      </Sphere>

      {/* Satellite Nodes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Sphere
          key={i}
          position={[
            Math.cos((i * Math.PI) / 4) * 5,
            Math.sin((i * Math.PI) / 4) * 5,
            0
          ]}
          args={[0.5, 32, 32]}
        >
          <meshStandardMaterial color="#00ffff" metalness={0.8} />
        </Sphere>
      ))}

      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}