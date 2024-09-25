import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProductCardList({ item }) {
  console.log(item);
  return (
    <NavLink to={`/singleproduct/${item.id}`} key={item.id}>
      <div className="flex items-center justify-start border-b border-gray-300 p-4 dark:border-zinc-600">
        <img
          src={item.image}
          alt={item.name}
          className="mr-4 w-44 object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold dark:text-white">
            {item.name}
          </h3>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            {item.category}
          </p>
          <p className="text-xl text-blue-600 dark:text-blue-400">
            {Intl.NumberFormat("en-PK", {
              style: "currency",
              currency: "PKR",
              minimumFractionDigits: 2,
            }).format(item.price / 100 + 250)}
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {item.description.substring(0, 100)}...
          </p>
        </div>
      </div>
    </NavLink>
  );
}

export default ProductCardList;
