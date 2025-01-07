import React from "react";
import Navebar2 from "./Navebar2";

const Navebar = () => {
  return (
    <>
      <nav className="flex bg-emerald-400 py-5 px-10 items-center justify-between">
        <h2 className="text-2xl">logo</h2>
        <Navebar2 />
      </nav>
    </>
  );
};

export default Navebar;
