import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/card";

const App = () => {
  const [data, setdata] = useState([]);
  const getdataa = async () => {
    const data1 = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=20"
      //npm i axios  this api run in cmd
    );
    setdata(data1.data);

    console.log(data);
  };
  useEffect(() => {
    getdataa();
  }, []);
  return (
    <div className="p-3">
      <div className="p-5 bg-gray-400">
        {data.map(function (elem, key) {
          return (
            <Card key={key} uname={elem.author} photo={elem.download_url} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
