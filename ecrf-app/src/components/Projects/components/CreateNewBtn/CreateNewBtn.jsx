import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const CreateNewBtn = () => {
  const container = {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  };
  const btn = {
    width: "130px",
    height: "35px",
    background: "rgba(79, 79, 79, 0.4)",
    borderRadius: "10px",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "24px",
    padding: "8px 16px",
    color: "#F8F8F8",
    marginBottom: "15px",
  };
  return (
    <Box sx={container}>
      <Button sx={btn} colorScheme="teal" variant="solid">
        + Create new
      </Button>
    </Box>
  );
};

export default CreateNewBtn;
