/* eslint-disable react/prop-types */
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
function Sort({ setLayout, layout }) {
  return (
    <div className="flex w-full items-center justify-between border-b border-zinc-300 px-5 dark:border-zinc-600 dark:bg-zinc-900">
      <div className="flex items-center justify-center gap-5 text-2xl text-white dark:text-gray-300">
        <IoGrid
          className={`${layout === "Grid" ? "bg-[#6354e9] text-white dark:text-white" : "bg-transparent text-gray-500 dark:bg-transparent"} h-10 w-10 cursor-pointer p-2 text-[#6354e9] dark:text-gray-300`}
          onClick={() => setLayout("Grid")}
        />
        <FaList
          className={`${layout === "List" ? "bg-[#6354e9] text-white dark:text-white" : "bg-transparent text-gray-500 dark:bg-transparent"} h-10 w-10 cursor-pointer p-2 text-[#6354e9] dark:text-gray-300`}
          onClick={() => setLayout("List")}
        />
      </div>
    </div>
  );
}

export default Sort;
