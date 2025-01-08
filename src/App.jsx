import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setdata] = useState([]);
  const getdataa = async () => {
    const data1 = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10"
      //npm i axios  this api run in cmd
    );
    setdata(data1.data);

    // console.log(data);
  };
  return (
    <div className="p-3">
      <button
        onClick={getdataa}
        className="bg-teal-500 active:scale-90 rounded text-white font-semibold text=2xl px-6 py-3"
      >
        Get Data
      </button>
      <div className="p-5 bg-gray-400">
        {data.map(function (elem, key) {
          return (
            <div
              key={key}
              className="bg-gray-50 items-center flex justify-between px-7 w-full py-6 rounded mb-3"
            >
              <img className=" w-80" src={elem.download_url} alt="" />
              <h1>Author : {elem.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
