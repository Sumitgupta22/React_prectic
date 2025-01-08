import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <>
      <div className="text-black inline-block p-6 text-center rounded bg-slate-500">
        <h1>USERNAME {props.uname} SURNAME</h1>
        <h2>
          CITY {props.city} , age {props.age}
        </h2>
        <button>Submit</button>
      </div>
    </>
  );
};

export default Card;
