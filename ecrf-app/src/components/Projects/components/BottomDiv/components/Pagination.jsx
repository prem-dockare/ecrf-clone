import Pagination from "react-bootstrap/Pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

function PaginationDiv() {
  const arr = new Array(6).fill(1);
  const container = {
    width: "15%",
    // border: "1px solid black",
  };
  return (
    <div
      style={container}
      className="d-flex justify-content-between align-items-center "
    >
      <ChevronLeftIcon color="red.500" />
      {arr?.map((ele, ind) => (
        <p>{ind + 1}</p>
      ))}
      <ChevronRightIcon color="red.500" />
    </div>
  );
}

export default PaginationDiv;
