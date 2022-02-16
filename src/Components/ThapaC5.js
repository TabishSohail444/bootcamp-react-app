import React from "react";

function Add(a, b) {
  const sum = a + b;
  return sum;
}

function Sub(aa, bb) {
  const sub = aa - bb;
  return sub;
}

function Mult(aa, bb) {
  const multi = aa * bb;
  return multi;
}

function Dev(aa, bb) {
  let devi = aa / bb;
  devi = devi.toFixed(2);
  return devi;
}

export default Add;
export { Sub, Mult, Dev };
