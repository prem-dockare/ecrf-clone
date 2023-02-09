import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Box,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

const TableComponent = () => {
  return (
    <TableContainer>
      <Table
        variant="simple"
        w="100%"
        style={{ borderCollapse: "separate", borderSpacing: "0 5px" }}
      >
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
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
          <Tr backgroundColor="rgba(217, 217, 217, 0.3)" marginBottom="10px">
            <Td
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              <Box display="flex" alignItems="center">
                <span style={{ marginRight: "15px" }}>inches</span>
                <img
                  src="https://img.icons8.com/material-rounded/13/null/menu-2.png"
                  alt=""
                />
              </Box>
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              millimetres (mm)
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              25.4
            </Td>
            <Td
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              25.4
            </Td>
          </Tr>
          <Tr backgroundColor="rgba(217, 217, 217, 0.3)" marginBottom="10px">
            <Td
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              <Box display="flex" alignItems="center">
                <span style={{ marginRight: "15px" }}>inches</span>
                <img
                  src="https://img.icons8.com/material-rounded/13/null/menu-2.png"
                  alt=""
                />
              </Box>
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              millimetres (mm)
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              25.4
            </Td>
            <Td
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              25.4
            </Td>
          </Tr>
          <Tr backgroundColor="rgba(217, 217, 217, 0.3)" marginBottom="10px">
            <Td
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              <Box display="flex" alignItems="center">
                <span style={{ marginRight: "15px" }}>inches</span>
                <img
                  src="https://img.icons8.com/material-rounded/13/null/menu-2.png"
                  alt=""
                />
              </Box>
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              millimetres (mm)
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              25.4
            </Td>
            <Td
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              25.4
            </Td>
          </Tr>
          <Tr backgroundColor="rgba(217, 217, 217, 0.3)" marginBottom="10px">
            <Td
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              <Box display="flex" alignItems="center">
                <span style={{ marginRight: "15px" }}>inches</span>
                <img
                  src="https://img.icons8.com/material-rounded/13/null/menu-2.png"
                  alt=""
                />
              </Box>
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              millimetres (mm)
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              25.4
            </Td>
            <Td
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              25.4
            </Td>
          </Tr>
          <Tr backgroundColor="rgba(217, 217, 217, 0.3)" marginBottom="10px">
            <Td
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              <Box display="flex" alignItems="center">
                <span style={{ marginRight: "15px" }}>inches</span>
                <img
                  src="https://img.icons8.com/material-rounded/13/null/menu-2.png"
                  alt=""
                />
              </Box>
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              millimetres (mm)
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              25.4
            </Td>
            <Td
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              25.4
            </Td>
          </Tr>
          <Tr backgroundColor="rgba(217, 217, 217, 0.3)" marginBottom="10px">
            <Td
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              <Box display="flex" alignItems="center">
                <span style={{ marginRight: "15px" }}>inches</span>
                <img
                  src="https://img.icons8.com/material-rounded/13/null/menu-2.png"
                  alt=""
                />
              </Box>
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              millimetres (mm)
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              25.4
            </Td>
            <Td
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              25.4
            </Td>
          </Tr>
          <Tr backgroundColor="rgba(217, 217, 217, 0.3)" marginBottom="10px">
            <Td
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              <Box display="flex" alignItems="center">
                <span style={{ marginRight: "15px" }}>inches</span>
                <img
                  src="https://img.icons8.com/material-rounded/13/null/menu-2.png"
                  alt=""
                />
              </Box>
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              millimetres (mm)
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              25.4
            </Td>
            <Td
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              25.4
            </Td>
          </Tr>
          <Tr backgroundColor="rgba(217, 217, 217, 0.3)" marginBottom="10px">
            <Td
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              <Box display="flex" alignItems="center">
                <span style={{ marginRight: "15px" }}>inches</span>
                <img
                  src="https://img.icons8.com/material-rounded/13/null/menu-2.png"
                  alt=""
                />
              </Box>
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              millimetres (mm)
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              25.4
            </Td>
            <Td
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              25.4
            </Td>
          </Tr>
          <Tr backgroundColor="rgba(217, 217, 217, 0.3)" marginBottom="10px">
            <Td
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              <Box display="flex" alignItems="center">
                <span style={{ marginRight: "15px" }}>inches</span>
                <img
                  src="https://img.icons8.com/material-rounded/13/null/menu-2.png"
                  alt=""
                />
              </Box>
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              millimetres (mm)
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              25.4
            </Td>
            <Td
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              25.4
            </Td>
          </Tr>
          <Tr backgroundColor="rgba(217, 217, 217, 0.3)" marginBottom="10px">
            <Td
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              <Box display="flex" alignItems="center">
                <span style={{ marginRight: "15px" }}>inches</span>
                <img
                  src="https://img.icons8.com/material-rounded/13/null/menu-2.png"
                  alt=""
                />
              </Box>
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              millimetres (mm)
            </Td>
            <Td height={"30px"} px="20px" py="13px">
              25.4
            </Td>
            <Td
              borderTopRightRadius="10px"
              borderBottomRightRadius="10px"
              height={"30px"}
              px="20px"
              py="13px"
            >
              25.4
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
