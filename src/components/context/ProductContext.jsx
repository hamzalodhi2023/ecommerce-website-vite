import { createContext } from "react";

export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const myName = "John";
  return (
    <ProductContext.Provider value={myName}>{children}</ProductContext.Provider>
  );
};
