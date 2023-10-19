import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useLocation } from "react-router";
const Greeting = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar />
      <h1>
        Hello {location.state.fname} {location.state.lname}
      </h1>
      <h3>
        What is the issue?
      </h3>
    </div>
  );
};

export default Greeting;
