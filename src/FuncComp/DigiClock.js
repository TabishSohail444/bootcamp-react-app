import React, { useState } from "react";

function Digi() {
  
  const ccTime = new Date().toLocaleTimeString();

  let [cTime, setCTime] = useState(ccTime);

  const UpdatedTime = () => {
    let srTime = new Date().toLocaleTimeString();
    setCTime(srTime);
  }

  /*setInterval(() => {
     UpdatedTime()
  }, 1000); */

  setInterval(UpdatedTime, 1000);
 
  return (
    <div>
      <h1>{cTime}</h1> 
    </div>
  );
}

export default Digi;
