/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "./layout/ui/Button";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";

function AddToCart({ product }) {
  const { id, stock, colors } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
      <p className="mt-4 flex items-center gap-2">
        <span className="font-bold">Color:</span>{" "}
        {colors.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setColor(item)}
              className={`flex h-5 w-5 items-center justify-center rounded-full border-[1px] border-black dark:border-white ${color === item ? "opacity-100" : "opacity-20"}`}
              style={{ backgroundColor: item }}
            >
              {color === item && <FaCheck className="text-white" />}
            </button>
          );
        })}
      </p>
      {/* Cart Amount Toggle */}

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart">
        <Button data="Add to Cart" className={`mt-4`} />
      </NavLink>
    </>
  );
}

export default AddToCart;
