import { OrbitControls } from "@react-three/drei"
import CpgModel from "./CpgModel"
import Balloon from "./Balloon"
const Experience = () => {

    return (
        <>
            <OrbitControls /> 
           
            <CpgModel position={[0,0,-2]} rotation={[.50,0,0]}/>
        </>
    )
}

export default Experience 