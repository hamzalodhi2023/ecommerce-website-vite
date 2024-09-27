/* eslint-disable react/prop-types */
import { IoGrid } from "react-icons/io5";
import { FaList, FaTimes } from "react-icons/fa";
import { useFilterContext } from "./context/FilterContext";
function Sort({ search, setSearch, item }) {
  const { gridView, setGridView, setListView } = useFilterContext();
  return (
    <div className="flex w-full items-center justify-between border-b border-zinc-300 px-5 py-2 dark:border-zinc-600 dark:bg-zinc-900">
      <div className="flex items-center justify-center gap-2 text-xl text-white dark:text-gray-300 md:gap-5 md:text-2xl">
        <IoGrid
          className={`${gridView === true ? "bg-[#6354e9] text-white dark:text-white" : "bg-transparent text-gray-500 dark:bg-transparent"} h-8 w-8 cursor-pointer p-2 text-[#6354e9] dark:text-gray-300 md:h-10 md:w-10`}
          onClick={setGridView}
        />
        <FaList
          className={`${gridView === false ? "bg-[#6354e9] text-white dark:text-white" : "bg-transparent text-gray-500 dark:bg-transparent"} h-8 w-8 cursor-pointer p-2 text-[#6354e9] dark:text-gray-300 md:h-10 md:w-10`}
          onClick={setListView}
        />
      </div>
      <span className="mx-5 hidden text-xs text-gray-500 dark:text-gray-400 sm:block md:text-sm">{`${item.length} Total Products`}</span>
      <div className="relative ml-2 block w-3/4 max-w-xs sm:w-full">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-md border bg-white px-2 py-1 text-gray-700 placeholder-gray-400 shadow-sm focus:border-blue-600 focus:bg-blue-50 dark:bg-zinc-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-500 dark:focus:bg-zinc-800 md:px-3 md:py-2"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-2"
          >
            <FaTimes className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Sort;
