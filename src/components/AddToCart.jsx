import Button from "./layout/ui/Button";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

function AddToCart({ product }) {
  const { id, stock, colors } = product;
  const [color, setColor] = useState(colors[0]);
  return (
    <>
      <p className="mt-4 flex items-center gap-2">
        <span className="font-bold">Color:</span>{" "}
        {colors.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setColor(item)}
              onDoubleClick={() => alert(color)}
              className={`flex h-5 w-5 items-center justify-center rounded-full ${color === item ? "opacity-100" : "opacity-20"}`}
              style={{ backgroundColor: item }}
            >
              {color === item && <FaCheck className="text-white" />}
            </button>
          );
        })}
      </p>

      <Button data="Add to Cart" className={`mt-4`} />
    </>
  );
}

export default AddToCart;
