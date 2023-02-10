import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { GetDataContextValues } from "../../contexts/data";

const TableComponent = () => {
  const [data, setData] = useState([]);
  const { dataset, setDataset } = GetDataContextValues();
  const dataSource = useRef();
  const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const output = await res.json();
      output?.products.length && setData(output?.products);
      setDataset((pre) => ({
        ...pre,
        count: output?.products.length,
        pages: Math.ceil(output?.products.length / pre?.rows),
        items: output?.products,
      }));
      output?.products.length && (dataSource.current = output?.products);
    } catch (err) {
      console.log("error ", err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <TableContainer>
      <Table
        variant="simple"
        w="100%"
        style={{ borderCollapse: "separate", borderSpacing: "0 5px" }}
      >
        <Thead>
          <Tr sx={{ borderCollapse: "none" }}>
            {[
              { ele: "Study Id" },
              { ele: "Title" },
              { ele: "Type" },
              { ele: "Current stage" },
            ].map((el) => (
              <Th
                key={el.ele}
                textTransform="none"
                fontSize="16px"
                fontWeight="500"
                alignItems="center"
                marginBottom="100px"
              >
                {el.ele}
                <ChevronUpIcon boxSize={6} />
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {dataset?.items?.length &&
            dataset?.items?.map((ele, ind) => (
              <Tr
                key={ind}
                backgroundColor="rgba(217, 217, 217, 0.3)"
                marginBottom="10px"
              >
                <Td
                  borderTopLeftRadius="10px"
                  borderBottomLeftRadius="10px"
                  height={"30px"}
                  px="20px"
                  py="13px"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100px"
                    paddingLeft="5px"
                  >
                    <span style={{ marginRight: "15px" }}>{ele?.price}</span>
                    <img
                      src="https://img.icons8.com/material-rounded/13/null/menu-2.png"
                      alt=""
                    />
                  </Box>
                </Td>
                <Td height={"30px"} px="20px" py="13px">
                  {ele?.brand}
                </Td>
                <Td height={"30px"} px="20px" py="13px">
                  {ele?.category}
                </Td>
                <Td
                  borderTopRightRadius="10px"
                  borderBottomRightRadius="10px"
                  height={"30px"}
                  px="20px"
                  py="13px"
                >
                  {ele?.stock}
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
