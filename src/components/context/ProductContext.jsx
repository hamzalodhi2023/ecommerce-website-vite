import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import ProductReducer from "../reducer/ProductReducer";

export const ProductContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  //` initial State function in use reducer
  const initialState = {
    loading: false,
    isError: false,
    products: [],
    featureProducts: [],
  };

  // ` use Reducer
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // ` Get Products Function
  const getProducts = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({
        type: "SET_PRODUCTS",
        payload: products,
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  //` Use Effect
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {children}
    </ProductContext.Provider>
  );
};
