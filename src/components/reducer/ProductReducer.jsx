function ProductReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SET_PRODUCTS":
      const featureData = action.payload.filter((curElem) => curElem.featured);

      return {
        ...state,
        loading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        loading: false,
        isError: true,
      };

    default:
      return state;
  }
}

export default ProductReducer;
