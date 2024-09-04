/* eslint-disable no-case-declarations */
function ProductReducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_PRODUCTS":
      const featureData = action.payload.filter((curElem) => curElem.featured);

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
}

export default ProductReducer;
