import { useState } from "react";

//npm run dev   for start server
function App() {
  // const [a, seta] = useState(0);
  // const increment = () => {
  //   seta(a + 1);
  // };
  const [user, setuser] = useState("");
  const submit = (e) => {
    e.preventDefault();
    console.log(user);
    setuser("");
  };
  return (
    <div>
      {/* <h1> value of a is {a}</h1>
      <button onClick={increment}>increment</button>
      <button
        onClick={() => {
          seta(a + 2);
        }}
      >
        increment 2 times
      </button>
      <button
        onClick={function () {
          seta(a - 1);
        }}
      >
        decrement
      </button> */}
      {/* <h1 className="text-5xl bg-red-700">hello guys</h1> */}
      <form
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <input
          value={user}
          onChange={(e) => {
            setuser(e.target.value);
          }}
          className="px-4 py-5 text-xl m-5 border-black rounded"
          type="text"
          placeholder="enter the name"
        />
        <button className="py-5 px-4 text-xl bg-red-700 rounded">submit</button>
      </form>
    </div>
  );
}
export default App;
