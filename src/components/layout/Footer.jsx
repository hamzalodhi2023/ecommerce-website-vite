import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative min-h-[50dvh] w-full bg-[#06132f] px-10 pt-20 md:px-40">
      <div className="absolute left-[50%] top-[-20%] flex h-[20dvh] w-[80%] translate-x-[-50%] items-center justify-between rounded-xl bg-[#f6f8fa] px-20">
        <p>
          Ready to get Started?
          <br />
          Talk to us today
        </p>
        <NavLink to="/contact" className="after:hidden">
          <Button data={"GET STARTED"} />
        </NavLink>
      </div>
      <div className="flex w-full flex-col flex-wrap items-start justify-evenly gap-5 pb-5 md:flex-row">
        <div className="flex w-52 flex-col items-start justify-between gap-5">
          <p className="text-white">Hamza Store</p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex w-72 flex-col items-start justify-between gap-5">
          <p className="text-white">Subscribe to get important updates.</p>
          <form
            action="https://formspree.io/f/meojnjdk"
            method="POST"
            className="flex flex-col items-start justify-between gap-3"
          >
            <input
              type="email"
              placeholder="Your E-mail"
              name="E-mail"
              required
              autoComplete="off"
              className="w-[220px] px-2 py-1 outline-none"
            />
            <Button data={"SUBSCRIBE"} />
          </form>
        </div>
        <div className="w-42 flex flex-col items-start justify-between gap-5">
          <p className="text-white">Follow Us</p>
          <div className="flex items-center justify-center gap-2">
            <a
              href="https://discord.com/users/1208299744984694785"
              target="_blank"
            >
              <FaDiscord className="h-10 w-10 cursor-pointer rounded-full border-[1px] border-white p-2 text-white duration-300 ease-in hover:bg-white hover:text-[#06132f]" />
            </a>
            <a href="https://github.com/hamzalodhi2023" target="_blank">
              <FaGithub className="h-10 w-10 cursor-pointer rounded-full border-[1px] border-white p-2 text-white duration-300 ease-in hover:bg-white hover:text-[#06132f]" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61554896643347"
              target="_blank"
            >
              <FaFacebookF className="h-10 w-10 cursor-pointer rounded-full border-[1px] border-white p-2 text-white duration-300 ease-in hover:bg-white hover:text-[#06132f]" />
            </a>
          </div>
        </div>
        <div className="w-42 flex flex-col items-start justify-between gap-5">
          <p className="text-white">Call Us</p>
          <a href="tel:03303622257" className="text-white">
            +92 3303622257
          </a>
        </div>
      </div>
      <hr />
      <div className="flex w-full flex-col items-center justify-center gap-5 py-5 text-center text-white md:flex-row md:justify-between">
        <p>@{new Date().getFullYear()} HamzaStore. All Rights Reserved.</p>
        <p>
          Privacy Policy <br />
          Terms & Conditions
        </p>
      </div>
    </div>
  );
}

export default Footer;
