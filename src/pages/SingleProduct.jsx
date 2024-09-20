import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../components/context/ProductContext";
import SingleProductImage from "../components/SingleProductImage";

const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
  // Getting data from ProductContext with the help of useContext
  // eslint-disable-next-line no-unused-vars
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useContext(ProductContext);

  // Params Hook

  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;
  // Use Effect

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 pb-32">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:w-1/2">
          {/* <img
            src={image[0].url}
            alt="apple"
            className="mb-4 h-64 w-full object-cover"
          /> */}
          <div className="flex w-full justify-center gap-2 py-2">
            <SingleProductImage images={image} />
          </div>
        </div>
        <div className="p-4 md:w-1/2">
          <h1 className="text-3xl font-bold">
            {name
              ? name
                  .split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() +
                      word.slice(1).toLowerCase(),
                  )
                  .join(" ")
              : "Loading..."}
          </h1>
          <p className="mt-2 text-lg">
            <span className="font-bold">MRP:</span>
            <del>
              {Intl.NumberFormat("en-PK", {
                style: "currency",
                currency: "PKR",
                minimumFractionDigits: 2,
              }).format((price + 25000) / 100)}
            </del>
          </p>

          <p className="mt-4 text-[#6354e9]">
            <span className="font-bold">Deal of the day:</span>
            {Intl.NumberFormat("en-PK", {
              style: "currency",
              currency: "PKR",
              minimumFractionDigits: 2,
            }).format(price / 100)}
          </p>

          <p className="mt-2">{description}</p>
          <div className="mt-4">
            <span className="font-bold">Category:</span> {category}
          </div>
          <div className="mt-1">
            <span className="font-bold">Stock:</span>{" "}
            {stock > 0 ? "In stock" : "Out of stock"}
          </div>
          <div className="mt-1">
            <span className="font-bold">Rating:</span> {stars} Stars ({reviews}{" "}
            Reviews)
          </div>
          <div className="mt-1">
            <span className="font-bold">Product ID:</span> {alias}
          </div>
          <div className="mt-1">
            <span className="font-bold">Brand:</span> {company}
          </div>
          <button className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
