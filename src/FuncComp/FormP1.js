import React, {useState} from 'react';

function FormP1 (){
    
    const [name, setName] = useState();
    const [fullname, setFullname] = useState();
    const [lastname, setLastname] = useState();
    const [laname, setLaname] = useState();
    
    const Subm = (e) => { 
        e.preventDefault();
       setFullname(name);
       setLaname(lastname);
    }

    const inputChang = (e) => {
        setName(e.target.value);
    }
    const inputChangTo = (e) => {
        setLastname(e.target.value);
    }

    return(
        <div className = "main_div">
        <form onSubmit={Subm} >
        <div>
            <h1> Hello {fullname} {laname} </h1>
            <input type = "text" placeholder = "Enter your name" onChange = {inputChang} value={name} />
            <input type = "text" placeholder = "Enter your Last name" onChange = {inputChangTo} value={lastname} />
            <br />
            {/* <button onClick ={Subm} className ="butFP1"> Submit </button> 
            */}
             <button type = "submit" className ="butFP1"> Submit </button>
        </div>
        </form>
        </div>
    )
}

export default FormP1; 