/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
// Import the correct context object, not the provider
import { ProductContext } from "./ProductContext";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  // Access the product from ProductContext
  const { products } = useContext(ProductContext);
  console.log(products);

  return (
    <FilterContext.Provider value={{ products }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
