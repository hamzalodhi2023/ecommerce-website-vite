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

  // Use Effect

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return (
    <div>
      {/* Create Single Product */}
      {/* create a loading animation with tailwind css */}

      <div className="max-w-sm overflow-hidden rounded p-6 text-center shadow-lg">
        <img
          className="w-full rounded-t"
          src="https://via.placeholder.com/150"
          alt="Apple AirPods"
        />
        <div className="px-6 py-4">
          <h3 className="mb-2 text-xl font-bold">Apple AirPods</h3>
          <p className="text-base text-gray-700">Apple AirPods</p>
          <p className="mt-2 text-lg font-bold">$100</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
