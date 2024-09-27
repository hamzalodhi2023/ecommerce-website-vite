/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductContext } from "./ProductContext";
import FilterReducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  listView: false,
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useContext(ProductContext);

  const [state, dispatch] = useReducer(FilterReducer, initialState);

  useEffect(() => {
    dispatch({ type: "loadFilterProducts", payload: products });
  }, [products]);

  const setGridView = () => {
    dispatch({ type: "SetGridView" });
  };
  const setListView = () => {
    dispatch({ type: "SetListView" });
  };

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
