import React, { useState } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  const [counter, setCounter] = useState("");

  let users = [
    { name: "Kristina", lastName: "Tigay", age: 19, id: 1 },
    { name: "Albina", lastName: "Narynbekova", age: 18, id: 2 },
    { name: "Nursultan", lastName: "Dragoverlord", age: 18, id: 3 },
    { name: "Aidar", lastName: "Talantbekov", age: 16, id: 4 },
  ];
  console.log(users);
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
