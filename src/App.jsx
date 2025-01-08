import axios from "axios";
import React, { useState } from "react";
import Card from "./components/card";

const App = () => {
  const [data, setdata] = useState([]);
  const getdataa = async () => {
    const data1 = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
      //npm i axios  this api run in cmd
    );
    setdata(data1.data);

    console.log(data);
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
          return <Card uname={elem.author} photo={elem.download_url} />;
        })}
      </div>
    </div>
  );
};

export default App;
