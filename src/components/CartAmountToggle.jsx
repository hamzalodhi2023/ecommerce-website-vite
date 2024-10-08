/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
function CartAmountToggle({ amount, setDecrease, setIncrease }) {
  return (
    <div className="my-3 flex items-center gap-2 dark:text-white">
      <button
        onClick={setDecrease}
        className="px-2 py-1 text-black dark:text-white"
      >
        <FiMinus className="text-xl" />
      </button>
      <span className="text-xl font-semibold dark:text-white">{amount}</span>
      <button
        onClick={setIncrease}
        className="px-2 py-1 text-xl text-black dark:text-white"
      >
        <FaPlus className="text-xl" />
      </button>
    </div>
  );
}

export default CartAmountToggle;
