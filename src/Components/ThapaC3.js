import React from "react";

function ThapaC3() {
  const name = "tabish";

  const heading = {
    color: "#fa9191",
    textTransform: "Capitalize",
    textAlign: "Center",
    fontWeight: "bold",
    textShadow: "0px 2px 4px #ffe9c5",
    margin: "20px 0"
  };

  return (
    <div style={{ color: "green" }}>
      <h2>Challenge 3</h2>
      <h1 style={heading}> Hello, My name is {name} </h1>
    </div>
  );
}

export default ThapaC3;
