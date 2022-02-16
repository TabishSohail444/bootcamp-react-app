import React, { useState, useEffect} from 'react';
import axios from 'axios';

//Thapa React Video no. 60

function ApiCall1() {

const [num, setNum] = useState();

useEffect(() => {
    async function getData () {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    }
    getData();
});

    return (
        <>
        <h1>you choose {num} option </h1>
        <select value={num} onChange ={(e)=>setNum(e.target.value)}>
            <option value ="1"> 1 </option>
            <option value ="25"> 2 </option>
            <option value ="3"> 3 </option>
            <option value ="4"> 4 </option>
            <option value ="5"> 5 </option>
        </select>  
        </>
    )
}

export default ApiCall1;
