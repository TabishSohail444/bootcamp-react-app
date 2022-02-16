import React, {useState} from 'react';

function TimeC (){
    const curtTime = new Date().toLocaleTimeString();
    
    const [cTime, setCTime] = useState(curtTime);
    
    const TimeUp = () => { 
       let curtNTime = new Date().toLocaleTimeString();
       setCTime(curtNTime);

       /* curtTime = new Date().toLocaleTimeString();
       setCTime(curtTime); */
    }

    return(
        <div>
            <h1> {cTime} </h1>
            <button onClick ={TimeUp} > Update time </button>
        </div>
        )
    }

export default TimeC;

