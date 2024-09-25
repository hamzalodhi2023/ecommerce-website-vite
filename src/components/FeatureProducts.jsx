import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";
import { BounceLoader } from "react-spinners";
import ProductCardGrid from "./layout/ui/ProductCardGrid";

function FeatureProducts() {
  const { isLoading, featureProducts } = useContext(ProductContext);
  if (isLoading) {
    return (
      <>
        <div className="flex h-auto w-full flex-col items-center justify-center bg-[#ffffff] text-black dark:bg-zinc-900">
          <div className="flex h-64 flex-col items-center justify-center">
            <BounceLoader color="#5471c7" size={100} />
            <p className="mt-5 animate-pulse text-2xl font-semibold dark:text-white">
              Loading...
            </p>
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
          return <ProductCardGrid item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default FeatureProducts;
