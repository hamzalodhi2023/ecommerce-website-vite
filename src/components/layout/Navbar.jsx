import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Button from "./ui/Button";
import { FaSun } from "react-icons/fa";
import { IoMoonSharp } from "react-icons/io5";

function Navbar() {
  const [close, setClose] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      setTheme(true);
    } else {
      document.body.classList.remove("dark");
      setTheme(false);
    }
  }, [setTheme]);

  return (
    <nav className="flex w-full items-center justify-between overflow-hidden bg-[#e2edfa] px-5 py-5 dark:bg-zinc-800 dark:text-white">
      <div className="logo-div">
        <NavLink to="/" className="after:hidden">
          <img
            src={`./images/logo${theme === false ? "Light" : "Dark"}Mode.png`}
            alt=""
            className="w-44"
          />
        </NavLink>
      </div>
      <IoIosMenu
        className="text-5xl text-black dark:text-white md:hidden"
        onClick={() => setClose(true)}
      />
      <div
        className={`${close ? "flex" : "hidden"} fixed left-0 top-0 z-50 h-screen w-full bg-white md:static md:flex md:h-full md:w-[80%] md:bg-transparent`}
      >
        <IoClose
          onClick={() => {
            setClose(false);
          }}
          className="absolute right-5 top-5 text-3xl text-red-600 md:hidden"
        />
        <ul className="flex h-full w-full flex-col items-center justify-evenly dark:bg-zinc-800 dark:text-white md:flex-row">
          <li className="o-h">
            <NavLink
              onClick={() => {
                setClose(false);
              }}
              to="/"
              className="link text-xl"
            >
              Home
            </NavLink>
          </li>
          <li className="o-h">
            <NavLink
              onClick={() => {
                setClose(false);
              }}
              to="/about"
              className="link text-xl"
            >
              About Us
            </NavLink>
          </li>
          <li className="o-h">
            <NavLink
              onClick={() => {
                setClose(false);
              }}
              to="/contact"
              className="link text-xl"
            >
              Contact Us
            </NavLink>
          </li>
          <li className="o-h">
            <NavLink
              onClick={() => {
                setClose(false);
              }}
              to="/products"
              className="link text-xl"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setClose(false);
              }}
              to="/login"
              className="after:hidden"
            >
              <Button data={"LOGIN"} />
            </NavLink>
          </li>
          <li className="relative flex h-[40px] w-[40px] items-center justify-center">
            <NavLink
              onClick={() => {
                setClose(false);
              }}
              to="/cart"
              className="after:hidden"
            >
              <CiShoppingCart className="text-3xl" />
              <span className="absolute right-0 top-0 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#717ed9] text-[10px] text-white">
                9
              </span>
            </NavLink>
          </li>
          <li
            className="relative flex h-[40px] w-[40px] cursor-pointer items-center justify-center"
            onClick={() => {
              setTheme(!theme);
              document.body.classList.toggle("dark");
              !theme
                ? localStorage.setItem("theme", "dark")
                : localStorage.setItem("theme", "light");
            }}
          >
            {theme === false ? (
              <FaSun className="cursor-pointer text-xl text-[#6354e9]" />
            ) : (
              <IoMoonSharp
                className="cursor-pointer text-xl text-[#5471c7]"
                onClick={() => {
                  setTheme(!theme);
                }}
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
