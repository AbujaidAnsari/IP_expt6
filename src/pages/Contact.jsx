import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ fname: "", lname: "", age: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    navigate("/greeting", { state: formData });
  };

  return (
    <div>
      <Navbar />
    
    <div >
      <h2>Contact Us</h2>
      <form >
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
