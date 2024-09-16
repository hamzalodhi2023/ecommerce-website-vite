/* eslint-disable no-unused-vars */
import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import ProductReducer from "../reducer/ProductReducer";

export const ProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  //` initial State function in use reducer
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };

  // ` use Reducer
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // ` Get Products Function
  const getProducts = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({
        type: "SET_PRODUCTS",
        payload: products,
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      dispatch({ type: "ALL PRODUCT ARE NOT FOUND" });
    }
  };

  //` Function For SingleProduct API
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  //` Use Effect For Main API
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
