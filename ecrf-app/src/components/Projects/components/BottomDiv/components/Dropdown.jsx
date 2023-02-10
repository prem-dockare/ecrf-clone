import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import "./style.css";

function DropdownComponent() {
  const [rows, setRows] = useState("");
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
        10 rows
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {[10, 20, 30].map((ele) => (
          <Dropdown.Item
            key={ele}
            onClick={() => {
              setRows(ele);
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
