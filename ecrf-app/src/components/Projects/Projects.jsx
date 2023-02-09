import React from "react";
import NavBar from "./components/NavBar/NavBar";
import TabsPanel from "./components/Tabs/Tabs";
import CreateNewBtn from "./components/CreateNewBtn/CreateNewBtn";
const Projects = () => {
  const containerStyle = {
    position: "absolute",
    top: "125px",
    left: "45px",
    right: "45px",
    // border: "1px solid black",
  };
  return (
    <>
      <NavBar />
      <div style={containerStyle}>
        <TabsPanel />
        <CreateNewBtn />
      </div>
    </>
  );
};

export default Projects;
