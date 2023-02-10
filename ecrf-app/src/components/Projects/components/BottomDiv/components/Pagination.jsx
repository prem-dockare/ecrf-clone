import Pagination from "react-bootstrap/Pagination";
import { useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { GetDataContextValues } from "../../../contexts/data";
import "./style.css";
function PaginationDiv() {
  const { dataset, setDataset } = GetDataContextValues();
  const arr = new Array(dataset?.pages).fill(1);
  const sourceData = useRef(dataset?.items);

  const container = {
    width: "15%",
    // border: "1px solid black",
  };
  useEffect(() => {
    setDataset((pre) => ({
      ...pre,
      items: sourceData?.current?.splice(
        (dataset?.page - 1) * dataset?.rows,
        dataset?.page * dataset?.rows <= dataset?.count
          ? dataset?.page * dataset?.rows - 1
          : dataset?.count - 1
      ),
    }));
  }, [dataset?.page]);
  return (
    <div
      style={container}
      className="d-flex justify-content-between align-items-center "
    >
      <ChevronLeftIcon
        color="#a8a8a8"
        className={dataset?.page === 1 ? "notAllowed" : "pageNums"}
        onClick={() => {
          setDataset((pre) => ({
            ...pre,
            page: dataset?.page === 1 ? 1 : pre.page - 1,
          }));
        }}
      />
      {arr?.map((ele, ind) => (
        <p
          onClick={() => {
            setDataset((pre) => ({ ...pre, page: ind + 1 }));
          }}
          key={ind}
          className={
            dataset?.page === ind + 1 ? "pageNums selectedPage" : "pageNums"
          }
        >
          {ind + 1}
        </p>
      ))}
      <ChevronRightIcon
        color="#a8a8a8"
        className={dataset?.page === dataset?.pages ? "notAllowed" : "pageNums"}
        onClick={() => {
          setDataset((pre) => ({
            ...pre,
            page:
              dataset?.page === dataset?.pages
                ? dataset?.pages
                : dataset?.page + 1,
          }));
        }}
      />
    </div>
  );
}

export default PaginationDiv;
