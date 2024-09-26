import { useState } from "react";
import { useFilterContext } from "../components/context/FilterContext";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";

function Products() {
  const { filteredProducts } = useFilterContext();
  const [layout, setLayout] = useState("Grid");
  const [search, setSearch] = useState("");
  const filterData = filteredProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mb-20 grid min-h-screen w-full grid-cols-[25%_75%]">
      <ProductFilter />
      <div className="grid grid-rows-[60px]">
        <Sort
          item={filterData}
          setLayout={setLayout}
          layout={layout}
          search={search}
          setSearch={setSearch}
        />
        <ProductList item={filterData} layout={layout} setLayout={setLayout} />
      </div>
    </div>
  );
}

export default Products;
