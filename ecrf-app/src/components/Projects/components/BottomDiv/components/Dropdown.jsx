import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import "./style.css";
import { GetDataContextValues } from "../../../contexts/data";

function DropdownComponent() {
  const { dataset, setDataset } = GetDataContextValues();
  useEffect(() => {
    setDataset((pre) => ({ ...pre, pages: Math.ceil(pre?.count / pre?.rows) }));
  }, [dataset?.rows]);

  const container = {
    width: "94px",
    height: "22px",
    border: "0.5px solid #A8A8A8",
    borderRadius: "5px",
  };
  const text = {
    fontsize: "14px",
    lineHeight: "17px",
    letterSpacing: "-0.03em",
    fontWeight: "300",
    color: "#1B2A37",
  };
  return (
    <Dropdown
      style={container}
      className="d-flex align-items-center outline-none"
    >
      <Dropdown.Toggle style={text} variant="none">
        {dataset?.rows} rows
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {[10, 20, 30].map((ele, ind) => (
          <Dropdown.Item
            key={ind}
            onClick={() => {
              setDataset((pre) => ({
                ...pre,
                rows: ele,
                page: 1,  
              }));
            }}
          >
            {ele}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownComponent;
