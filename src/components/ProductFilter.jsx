/* eslint-disable react/prop-types */
function ProductFilter({ filteredProducts }) {
  const categories = [
    "All",
    ...new Set(filteredProducts.map((product) => product.category)),
  ];

  return (
    <div className="flex flex-col bg-white p-4 pl-4 dark:bg-zinc-900">
      <h3 className="text-xl font-bold dark:text-white">Category</h3>
      <ul className="mt-2 flex flex-col gap-2 dark:text-white">
        {categories.map((category) => (
          <li
            key={category}
            className="cursor-pointer"
            onClick={() => category}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilter;
