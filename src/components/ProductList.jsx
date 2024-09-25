/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import ProductCardGrid from "./layout/ui/ProductCardGrid";
import ProductCardList from "./layout/ui/ProductCardList";
function ProductList({ item, layout, setLayout }) {
  return (
    <div
      className={`${layout === "List" ? "grid-cols-1" : "grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3"} grid w-full gap-5 bg-white py-10 dark:bg-zinc-900`}
    >
      {item.map((current) => {
        return layout === "Grid" ? (
          <ProductCardGrid item={current} key={current.id} />
        ) : (
          <ProductCardList item={current} key={current.id} />
        );
      })}
    </div>
  );
}

export default ProductList;
