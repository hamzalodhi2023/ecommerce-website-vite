/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import FilterReducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filteredProducts: [],
  allProducts: [],
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useContext(ProductContext);

  const [state, dispatch] = useReducer(FilterReducer, initialState);

  useEffect(() => {
    dispatch({ type: "loadFilterProducts", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
