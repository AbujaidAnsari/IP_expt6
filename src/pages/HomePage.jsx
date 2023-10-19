import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Section from "../components/Section/Section.jsx";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
const Home = () => {
  return (
    <>
      <Navbar />
      <Section/>
      <div >
        <ProfileInfo
          name={"GitHub"}
          username={"AbujaidAnsari"}
          email={"Abujaid@gmail.com"}
          link={""}
        />
        <ProfileInfo
          name={"Instagram"}
          username={"Abujaid"}
          email={"Abujaid@gmail.com"}
          link={"https://www.instagram.com"}
        />
        <ProfileInfo
          name={"LinkedIn"}
          username={"Abujaid"}
          email={"Abujaid@gmail.com"}
          link={""}
        />
      </div>
    </>
  );
};
export default Home;
