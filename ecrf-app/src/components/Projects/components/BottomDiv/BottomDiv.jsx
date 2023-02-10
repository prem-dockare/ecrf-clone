import React from "react";
import PaginationDiv from "./components/Pagination";
import DropdownComponent from "./components/Dropdown";
const container = {
  margin: "45px 0",
  // border: "1px solid black",
};
const text = {
  fontsize: "14px",
  lineHeight: "17px",
  letterSpacing: "-0.03em",
  color: "#A8A8A8",
  fontWeight: "300",
};
const divLst = {
  width: "188.35px",
  height: "22px",
};
const BottomDiv = () => {
  return (
    <div
      style={container}
      className=" d-flex w-100 justify-content-between align-items-center"
    >
      <p style={text} className="m-0 fw-light">
        Showing 1-10 of 55 Results
      </p>
      <PaginationDiv />
      <div
        style={{ width: "138px" }}
        className="d-flex justify-content-between align-items-center"
      >
        <p style={text}>Show</p>
        <DropdownComponent />
      </div>
    </div>
  );
};

export default BottomDiv;
