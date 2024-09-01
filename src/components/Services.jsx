import { TbTruckDelivery } from "react-icons/tb";
import { IoShield } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
function Services() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme === false ? "bg-[#ffffff]" : "bg-zinc-900"} flex h-auto w-full flex-col items-center justify-center gap-5 px-20 pb-6 lg:min-h-[50dvh] lg:flex-row`}
    >
      {/* Desktop Started */}
      <div
        className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-700 text-white"} hidden h-[40dvh] flex-col items-center justify-center rounded-2xl bg-[#e0efff] px-4 lg:flex`}
      >
        <TbTruckDelivery
          className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-400"} h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]`}
        />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div className="hidden h-[40dvh] flex-col items-center justify-between overflow-hidden bg-transparent px-2 lg:flex">
        <div
          className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-700 text-white"} card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-4`}
        >
          <IoShield
            className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-400"} h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]`}
          />
          <p>Super Fast and Free Delivery</p>
        </div>
        <div
          className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-700 text-white"} card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-4`}
        >
          <RiSecurePaymentLine
            className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-400"} h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]`}
          />
          <p>Super Fast and Free Delivery</p>
        </div>
      </div>
      <div
        className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-700 text-white"} hidden h-[40dvh] flex-col items-center justify-center rounded-2xl bg-[#e0efff] px-4 lg:flex`}
      >
        <TbTruckDelivery
          className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-400"} h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]`}
        />
        <p>Super Fast and Free Delivery</p>
      </div>
      {/* Desktop Ended */}
      {/* Mobile Starte */}
      <div
        className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-700 text-white"} card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-5 lg:hidden`}
      >
        <TbTruckDelivery
          className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-400"} h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]`}
        />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div
        className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-700 text-white"} card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-5 lg:hidden`}
      >
        <IoShield
          className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-400"} h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]`}
        />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div
        className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-700 text-white"} card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-5 lg:hidden`}
      >
        <RiSecurePaymentLine
          className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-400"} h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]`}
        />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div
        className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-700 text-white"} card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-5 lg:hidden`}
      >
        <GiReceiveMoney
          className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-400"} h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]`}
        />
        <p>Super Fast and Free Delivery</p>
      </div>
      {/* Mobile Ended */}
    </div>
  );
}

export default Services;
