import React, {useState} from 'react';
//import './App.css';

function Incre (){
    
    const [count, setCount] = useState(1);
    
    const IncNum = () => { 
       setCount(count+ 1);
       // console.log("hi " + count++);
    }

    const deNum = () => { 
        setCount(count - 1);
     }

    return(
        <div>
            <h1> {count} </h1>
            <button onClick ={IncNum} > Increment </button>
            <button onClick ={deNum} > decrement </button>
        </div>
        )
    }

export default Incre;

