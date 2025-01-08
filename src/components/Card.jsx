import React from "react";

const Card = (name) => {
  console.log(name.user);
  return (
    <>
      <h1 className="text-3xl">This is a cade</h1>
      <h1 className="text-3xl">user name is {name.user} </h1>
    </>
  );
};

export default Card;
