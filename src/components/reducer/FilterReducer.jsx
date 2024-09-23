function FilterReducer(state, action) {
  switch (action.type) {
    case "loadFilterProducts":
      return {
        ...state,
        filteredProducts: [...action.payload],
        allProducts: [...action.payload],
      };
    default:
      return state;
  }
}

export default FilterReducer;
