import React from "react";
import Header from "./components/Header";
import Navebar from "./components/Navebar";
import Footers from "./components/Footers";
import Card from "./components/card";
const App = () => {
  const user = "naman";
  return (
    <>
      <div className="p-10">
        <Card uname="sumit" age="22" city="satna"></Card>
      </div>
    </>
  );
};
export default App;
