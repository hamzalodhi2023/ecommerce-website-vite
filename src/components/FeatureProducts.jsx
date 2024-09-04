import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";
import { ThemeContext } from "./context/ThemeContext";
import { NavLink } from "react-router-dom";

function FeatureProducts() {
  const { theme } = useContext(ThemeContext);
  const { isLoading, featureProducts } = useContext(ProductContext);
  if (isLoading) {
    return (
      <>
        <div
          className={`${theme === false ? "bg-[#ffffff]" : "bg-zinc-800 text-white"} flex h-screen w-full flex-col items-center justify-center text-black`}
        >
          <h1
            className={`${theme === false ? "text-black" : "text-white"} m-5 text-5xl`}
          >
            Loading...
          </h1>
          <div className="flex items-center justify-center">
            <br />
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div
      className={`${theme === false ? "bg-[#ffffff]" : "bg-zinc-900 text-white"} flex w-full flex-col items-center justify-center gap-4 px-20 pb-10`}
    >
      <div className="w-full py-10">
        <p className="text-[#5471c7]">CHECK NOW!</p>
        <h2 className="text-4xl font-semibold">Our Featured Products</h2>
      </div>
      <div className="card-main-div flex h-full w-full flex-col items-center justify-center gap-4 lg:flex-row lg:justify-evenly">
        {featureProducts.map((item) => {
          console.log(item);
          return (
            <NavLink to={`/singleproduct/${item.id}`} key={item.id}>
              <div
                className="product product relative h-[200px] w-[300px] overflow-hidden rounded-2xl shadow-lg shadow-zinc-600"
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
                <div className="flex h-[15%] w-full items-center justify-between px-4">
                  <span>{item.name}</span>
                  <span className="text-[#5471c7]">
                    {Intl.NumberFormat("en-PK", {
                      style: "currency",
                      currency: "PKR",
                      minimumFractionDigits: 2,
                    }).format(item.price / 100)}
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
