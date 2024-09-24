/* eslint-disable react/prop-types */
import ProductCard from "./layout/ui/ProductCard";

function ProductList({ item }) {
  return (
    <div className="grid w-full grid-cols-1 place-items-center gap-5 bg-white py-10 dark:bg-zinc-900 md:grid-cols-2 lg:grid-cols-3">
      {item.map((current) => {
        return <ProductCard item={current} key={current.id} />;
      })}
    </div>
  );
}

export default ProductList;
