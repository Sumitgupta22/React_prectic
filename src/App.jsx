import Card from "./components/card";
const App = () => {
  const user = [
    {
      name: "Alice Johnson",
      city: "New York",
      age: 29,
      profession: "Software Engineer",
      profilePhoto: "https://example.com/photos/alice.jpg",
    },
    {
      name: "David Smith",
      city: "Los Angeles",
      age: 35,
      profession: "Graphic Designer",
      profilePhoto: "https://example.com/photos/david.jpg",
    },
    {
      name: "Maria Lopez",
      city: "Chicago",
      age: 42,
      profession: "Marketing Manager",
      profilePhoto: "https://example.com/photos/maria.jpg",
    },
    {
      name: "John Doe",
      city: "Houston",
      age: 25,
      profession: "Data Analyst",
      profilePhoto: "https://example.com/photos/john.jpg",
    },
    {
      name: "Emma Brown",
      city: "San Francisco",
      age: 31,
      profession: "UX Designer",
      profilePhoto: "https://example.com/photos/emma.jpg",
    },
  ];
  // user.forEach(function (elment) {
  //   console.log("hello", elment);
  // });

  // user.map(function () {
  //   return console.log("hayy");
  // });
  return (
    <>
      <div className="p-10">
        {user.map(function (elem, un) {
          return (
            <Card
              key={un}
              uname={elem.name}
              age={elem.age}
              city={elem.city}
              profession={elem.profession}
              photo={elem.profilePhoto}
            />
          );
        })}
      </div>
    </>
  );
};
export default App;
