import React from "react";
import Child2 from "./Child2";

const Child = (props) => {
  return (
    <div>
      <h1>i am child {props.name}</h1>
      <Child2 user={props.name} />
    </div>
  );
};

export default Child;
