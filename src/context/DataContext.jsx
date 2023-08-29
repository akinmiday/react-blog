/* eslint-disable react/prop-types */
import { createContext } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{

    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
