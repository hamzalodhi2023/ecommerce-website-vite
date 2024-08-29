import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useContext, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Button from "./ui/Button";
import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [close, setClose] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav
      className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-800 text-white"} flex w-full items-center justify-between overflow-hidden bg-[#e2edfa] px-5 py-5`}
    >
      <div className="logo-div">
        <NavLink to="/" className="after:hidden">
          <img src="./images/logo.png" alt="" className="w-44" />
        </NavLink>
      </div>
      <IoIosMenu
        className="text-5xl text-black md:hidden"
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
        <ul
          className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-800 text-white"} flex h-full w-full flex-col items-center justify-evenly md:flex-row`}
        >
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
          <li className="link o-h cursor-pointer text-xl">
            <IoIosSunny
              className={`${theme === false ? "hidden" : "block"}`}
              onClick={() => {
                setTheme(false);
              }}
            />
            <IoIosMoon
              className={`${theme === true ? "hidden" : "block"}`}
              onClick={() => {
                setTheme(true);
              }}
            />
          </li>
          <li>
            <NavLink
              onClick={() => {
                setClose(false);
              }}
              to="/login"
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
            >
              <CiShoppingCart className="text-3xl" />
              <span className="absolute right-0 top-0 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#717ed9] text-[10px] text-white">
                10
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
