import { CleaningServices } from "@mui/icons-material";
import { useState, useContext, createContext } from "react";

const DataContext = createContext();

export const DataContextProvider = () => {
  const [dataset, setDataset] = useState({ page: 1, rows: 10, count: 0 });

  return <DataContext.Provider value={dataset}></DataContext.Provider>;
};

export const GetDataContextValues = () => {
  const value = useContext(DataContext);
  console.log(value);
  //   return { dataset };
};
