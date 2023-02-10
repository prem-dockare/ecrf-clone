import Pagination from "react-bootstrap/Pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { GetDataContextValues } from "../../../contexts/data";
function PaginationDiv() {
  const { dataset, setDataset } = GetDataContextValues();
  const arr = new Array(dataset?.pages).fill(1);
  const container = {
    width: "15%",
    // border: "1px solid black",
  };
  return (
    <div
      style={container}
      className="d-flex justify-content-between align-items-center "
    >
      <ChevronLeftIcon color="#a8a8a8" className="pageNums" />
      {arr?.map((ele, ind) => (
        <p key={ind} className="pageNums">
          {ind + 1}
        </p>
      ))}
      <ChevronRightIcon color="#a8a8a8" className="pageNums" />
    </div>
  );
}

export default PaginationDiv;
