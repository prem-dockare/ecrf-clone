import React from "react";
import { useState } from "react";
import "./components/styles.css";
const TabsPanel = () => {
  const [selctedItem, setSelectedItem] = useState("All");
  const select = (e) => {
    setSelectedItem(e);
  };
  return (
    <div className="tabs d-flex">
      <div className="d-flex flexContainer justify-content-between align-items-center">
        {[{ value: "All" }, { value: "Archived" }].map((ele) => (
          <p
            key={ele.value}
            onClick={() => {
              select(ele.value);
            }}
            className={
              selctedItem === ele.value ? "texts selectedItem" : "texts"
            }
          >
            {ele.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TabsPanel;
