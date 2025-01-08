import React from "react";
import Header from "./components/Header";
import Navebar from "./components/Navebar";
import Footers from "./components/Footers";
import Card from "./components/card";
const App = () => {
  const user = "naman";
  return (
    <>
      <Card user={user} />
      <Card user="ramesh" />
      {/* this is prmps */}
    </>
  );
};
export default App;
