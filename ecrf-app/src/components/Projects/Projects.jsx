import React from "react";
import NavBar from "./components/NavBar/NavBar";
import TabsPanel from "./components/Tabs/Tabs";
import CreateNewBtn from "./components/CreateNewBtn/CreateNewBtn";
import TableComponent from "./components/Table/Table";
const Projects = () => {
  const containerStyle = {
    position: "absolute",
    top: "100px",
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
        <TableComponent />
      </div>
    </>
  );
};

export default Projects;
