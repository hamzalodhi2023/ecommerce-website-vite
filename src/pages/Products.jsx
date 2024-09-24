import { useFilterContext } from "../components/context/FilterContext";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";

function Products() {
  const { filteredProducts } = useFilterContext();
  return (
    <div className="mb-20 grid min-h-screen w-full grid-cols-[25%_75%]">
      <ProductFilter />
      <div className="grid grid-rows-[60px]">
        <Sort />
        <ProductList item={filteredProducts} />
      </div>
    </div>
  );
}

export default Products;
