//import React from "react";

const Card = (props) => {
  //console.log(props);
  return (
    <>
      <div className="text-black mr-2 inline-block p-6 text-center rounded bg-white">
        <img
          src={props.photo}
          className="ml-1 h-32 w-32 align-middle rounded-full mb-3"
          alt=""
        />
        <h1 className="text-2xl font-semibold mb-4">
          {props.uname} Age({props.age})
        </h1>

        <h2 className="text-xl font-semibold mb-0">{props.city}</h2>
        <h2 className="text-xl text-blue-700 font-semibold mb-2">
          {props.profession}
        </h2>
        <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded font-medium mt-4">
          About Us
        </button>
      </div>
    </>
  );
};

export default Card;
