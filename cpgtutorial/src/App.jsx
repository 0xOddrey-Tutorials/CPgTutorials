
import { GradientTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Cursor from "./components/Cursor"
import Experience from "./components/Experience"

function Light({brightness, color}) {
  return (
    <rectAreaLight 
    width={10}
    height={10}
    color={color}
    intensity={brightness}
    position={[-2,1,5]}
    lookAt={[0,0,0]}
    castShadow
    />
  )
}

function Backdrop() {
  return (
    <mesh rotation={[0,0,-.5]} position={[0,-1,-5]}>
      <planeBufferGeometry 
      args={[100,100]}/>
      <meshBasicMaterial>
        <GradientTexture 
        stops={[.15, .3, .5, .6, .7, 1]}
        colors={["#D0956D", "#ADD8E6", "#D3BB9A", "#ADD8E6", "#D0956D", "#D3BB9A"]}
        >
        </GradientTexture>
        />
      </meshBasicMaterial>
    </mesh>
  )
}
function App() {

  return (
    <Canvas> 
      <Backdrop />
      <Cursor />
      <Light brightness={15} color={"#D3BB9A"} />
      <Experience />
    </Canvas>
  )
}

export default App
