import React, {useState} from 'react';

function FormP2 (){
    const [name, setName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });
      
    const Subm = (e) => { 
        e.preventDefault();
        alert("Form Submitted");
    }

    const inputChang = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);

        // const value = e.target.value;   // tabish , iqbal
        // const name = e.target.name;     //fname   , lname

        let {value, name} = e.target;

        setName((preValue)=>{
            // console.log(preValue);
            return{
                ...preValue,
                [name] : value,
            };
            // if(name === "fname"){
            //     return{
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     };
            // }else if(name === "lname"){
            //     return{
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     };
            // }else if(name === "email"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.phone,
            //     };
            // }else if(name === "phone"){
            //     return{
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value,
            //     };
            // }
        });
    }
    
    return(
        <div className = "main_div">
        <form onSubmit={Subm} >
        <div>
            <h1> Hello {name.fname} {name.lname} </h1>
            <h3>{name.email}</h3>
            <h3>{name.phone}</h3>
            <input type = "text" placeholder = "Enter your First name" name='fname' onChange = {inputChang} value={name.fname} />
            <input type = "text" placeholder = "Enter your Last name" name='lname' onChange = {inputChang} value={name.lname} />
            <input type = "text" placeholder = "Enter your Email" name='email' onChange = {inputChang} value={name.email} />
            <input type = "text" placeholder = "Enter your Number" name='phone' onChange = {inputChang} value={name.phone} />

            <br />
            {/* <button onClick ={Subm} className ="butFP1"> Submit </button> 
            */}
             <button type = "submit" className ="butFP1"> Submit </button>
        </div>
        </form>
        </div>
    )
}

export default FormP2; 