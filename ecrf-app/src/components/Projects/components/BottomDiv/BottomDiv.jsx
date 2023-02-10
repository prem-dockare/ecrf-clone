import React from "react";
import PaginationDiv from "./components/Pagination";
import DropdownComponent from "./components/Dropdown";
const BottomDiv = () => {
  return (
    <div className="container d-flex w-100 justify-content-between align-items-center">
      <p className="m-0">Showing 1-10 of 55 Results</p>
      <PaginationDiv />
      <div className="d-flex justify-content-between align-items-center">
        <p>Show</p>
        <DropdownComponent />
      </div>
    </div>
  );
};

export default BottomDiv;
