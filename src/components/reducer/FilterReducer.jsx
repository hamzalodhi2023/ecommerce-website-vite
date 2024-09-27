function FilterReducer(state, action) {
  switch (action.type) {
    case "loadFilterProducts":
      return {
        ...state,
        filteredProducts: [...action.payload],
        allProducts: [...action.payload],
      };
    case "SetGridView":
      return {
        ...state,
        gridView: true,
      };
    case "SetListView":
      return {
        ...state,
        gridView: false,
        listView: true,
      };
    default:
      return state;
  }
}

export default FilterReducer;
