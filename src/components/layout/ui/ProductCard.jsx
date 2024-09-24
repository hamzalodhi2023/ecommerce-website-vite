/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <NavLink to={`/singleproduct/${item.id}`} key={item.id}>
      <div
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
        }}
        className="product relative h-[250px] w-[300px] overflow-hidden rounded-2xl"
        key={item.id}
      >
        <img src={item.image} alt="" className="h-[85%] w-full object-cover" />
        <span className="absolute right-[10px] top-[10px] rounded-2xl bg-[white] px-4 py-1 text-[#5471c7] shadow-lg shadow-zinc-600">
          {item.category}
        </span>
        <div className="flex h-[15%] w-full items-center justify-between px-4 dark:bg-zinc-800">
          <span className="dark:text-white">{item.name}</span>
          <span className="text-[#5471c7]">
            {Intl.NumberFormat("en-PK", {
              style: "currency",
              currency: "PKR",
              minimumFractionDigits: 2,
            }).format(item.price / 100 + 250)}
          </span>
        </div>
      </div>
    </NavLink>
  );
}

export default ProductCard;
