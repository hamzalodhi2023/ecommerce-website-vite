import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";
import { NavLink } from "react-router-dom";

function FeatureProducts() {
  const { isLoading, featureProducts } = useContext(ProductContext);
  if (isLoading) {
    return (
      <>
        <div className="flex h-screen w-full flex-col items-center justify-center bg-[#ffffff] text-black">
          <div className="flex h-64 items-center justify-center">
            <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-[#ffffff] px-20 pb-10 dark:bg-zinc-900 dark:text-white">
      <div className="w-full py-10">
        <p className="text-[#5471c7]">CHECK NOW!</p>
        <h2 className="text-4xl font-semibold">Our Featured Products</h2>
      </div>
      <div className="card-main-div flex h-full w-full flex-col items-center justify-center gap-4 lg:flex-row lg:justify-evenly">
        {featureProducts.map((item) => {
          return (
            <NavLink to={`/singleproduct/${item.id}`} key={item.id}>
              <div
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
                }}
                className="product product relative h-[400px] w-[300px] overflow-hidden rounded-2xl"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-[85%] w-full object-cover"
                />
                <span className="absolute right-[10px] top-[10px] rounded-2xl bg-[white] px-4 py-1 text-[#5471c7] shadow-lg shadow-zinc-600">
                  {item.category}
                </span>
                <div className="flex h-[15%] w-full items-center justify-between px-4 dark:bg-zinc-800">
                  <span>{item.name}</span>
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
        })}
      </div>
    </div>
  );
}

export default FeatureProducts;
