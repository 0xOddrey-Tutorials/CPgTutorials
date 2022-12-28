import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber";
import Balloon from "./Balloon"

export default function Cursor() {
    let cursorRef = useRef();
    const {viewport, mouse, size } = useThree();

    useFrame(({mouse}) => {
        let x = (mouse.x * viewport.width) / 2;
        let y = (mouse.y * viewport.height) / 2;
        cursorRef.current.position.set(x,y,2);
    });


    return(
        <mesh ref={cursorRef} position={[0,0,2]} >
            <pointLight position={[0,20,10]} intensity={1.5} />
            <Balloon />
        </mesh>
    )
}