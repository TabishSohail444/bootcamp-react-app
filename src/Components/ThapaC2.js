import React from "react";

function ThapaC2() {
  const name = "tabish";
  const curDate = new Date().toLocaleDateString();
  const curTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Hello, My name is {name} </h1>
      <p>Today date is = {curDate}</p>
      <p>Currnt Time is = {curTime}</p>
    </div>
  );
}

export default ThapaC2;
