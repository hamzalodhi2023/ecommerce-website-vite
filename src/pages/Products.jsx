import { useState } from "react";
import { useFilterContext } from "../components/context/FilterContext";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";

function Products() {
  const { filteredProducts } = useFilterContext();
  const [search, setSearch] = useState("");
  const filterData = filteredProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mb-20 grid min-h-screen w-full grid-cols-[25%_75%]">
      <ProductFilter filteredProducts={filteredProducts} />
      <div className="grid grid-rows-[60px]">
        <Sort item={filterData} search={search} setSearch={setSearch} />
        <ProductList item={filterData} />
      </div>
    </div>
  );
}

export default Products;
