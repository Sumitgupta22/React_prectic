import React from "react";

const Navebar = () => {
  return (
    <>
      <nav className="flex bg-emerald-400 py-5 px-10 items-center justify-between">
        <h2 className="text-2xl">logo</h2>
        <div className="flex gap-8 items-center">
          <h4 className="text-xl">About</h4>
          <h4 className="text-xl">Contect</h4>
          <h4 className="text-xl">Home</h4>
          <h4 className="text-xl">Contect</h4>
        </div>
      </nav>
    </>
  );
};

export default Navebar;
