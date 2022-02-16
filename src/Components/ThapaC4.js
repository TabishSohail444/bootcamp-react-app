import React from "react";
import "./Thacss.css";

function ThapaC4() {
  const cuTime = new Date().getHours();
  let greeting = "";
  const csStyle = {};

  if (cuTime >= 1 && cuTime < 12) {
    greeting = "Good Morning";
    csStyle.color = "green";
  } else if (cuTime >= 12 && cuTime < 19) {
    greeting = "Good Afternoon";
    csStyle.color = "yellow";
  } else {
    greeting = "Good Night";
    csStyle.color = "blue";
  }

  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={csStyle}> {greeting} </span>{" "}
        </h1>
      </div>
    </>
  );
}

export default ThapaC4;
