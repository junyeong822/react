import { useState } from "react";

const Box = () => {
    const [backgroundColor,setBackgroundColor] = useState("red");
    const changeBox = () => {
        setBackgroundColor(backgroundColor == "red" ? "blue" : "red");
    }; 
    const boxStyle = {
        backgroundColor : backgroundColor,
    };
    return <div className="w-24 h-24" onClick={changeBox} style={boxStyle}></div>
} 


export default Box;