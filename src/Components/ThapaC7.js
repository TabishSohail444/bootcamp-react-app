import React, {useState, useEffect} from 'react'

function ThapaC7() {

    const [num, setNum] = useState(0);

    useEffect(()=> {
    //alert("I am clicked");
    document.title = `you clicked me ${num} times`;
    }, []);

    return (
        <div>
            <button onClick = {()=>setNum(num +1)}> Click me {num} </button>
        </div>
    )
}

export default ThapaC7;
