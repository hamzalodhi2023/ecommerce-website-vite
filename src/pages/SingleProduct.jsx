import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../components/context/ProductContext";

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
    <div>
      <div className="container mx-auto p-4 pb-32">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center md:w-1/2">
            <img
              src={`https://api.pujakaitem.com/images/${id}_large.jpg`}
              alt={`Large ${name}`}
              className="mb-4 h-64 w-full object-cover"
            />
            <div className="flex w-full justify-around">
              <img
                src={`https://api.pujakaitem.com/images/${id}_1.jpg`}
                alt={`${name} 1`}
                className="w-1/4 cursor-pointer object-cover"
                onClick={() => setMainImage(`${id}_1.jpg`)}
              />
              <img
                src={`https://api.pujakaitem.com/images/${id}_2.jpg`}
                alt={`${name} 2`}
                className="w-1/4 cursor-pointer object-cover"
                onClick={() => setMainImage(`${id}_2.jpg`)}
              />
              <img
                src={`https://api.pujakaitem.com/images/${id}_3.jpg`}
                alt={`${name} 3`}
                className="w-1/4 cursor-pointer object-cover"
                onClick={() => setMainImage(`${id}_3.jpg`)}
              />
              <img
                src={`https://api.pujakaitem.com/images/${id}_4.jpg`}
                alt={`${name} 4`}
                className="w-1/4 cursor-pointer object-cover"
                onClick={() => setMainImage(`${id}_4.jpg`)}
              />
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
              <span className="font-bold"> Deal of the day: </span>
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
              <span className="font-bold">Rating:</span> {stars} Stars (
              {reviews} Reviews)
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
    </div>
  );
}

export default SingleProduct;
