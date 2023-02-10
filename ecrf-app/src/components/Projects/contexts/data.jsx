import { useState, useContext, createContext } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataset, setDataset] = useState({
    page: 1,
    rows: 10,
    count: 0,
    pages: 0,
    items: [],
  });

  return (
    <DataContext.Provider value={{ dataset, setDataset }}>
      {children}
    </DataContext.Provider>
  );
};

export const GetDataContextValues = () => {
  const { dataset, setDataset } = useContext(DataContext);
  return { dataset, setDataset };
};
