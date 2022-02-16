import React, {useState} from 'react';

function HEvent (){

    const [bhed, setBhed] = useState("Click Me");
    const [bgChang, setBgchang] = useState("pink");
    
    const ChangMe = () => {
        setBhed("I'm Change 🥇 ");
        let newB = "#34495e";
        setBgchang("purple");  //setBgchang("#34495e")
    }
    const bgBack = () => {
        setBhed("Again Change 🥈 ");
        setBgchang("pink");
    }

    return(
        <div style = {{backgroundColor: bgChang}}>
           {// <button onClick ={ChangMe} onDoubleClick = {bgBack}> {bhed} </button>
            }
            <button onMouseEnter ={ChangMe} onMouseLeave = {bgBack}> {bhed} </button>

        </div>
        )
    }

export default HEvent;

