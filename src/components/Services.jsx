import { TbTruckDelivery } from "react-icons/tb";
import { IoShield } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

function Services() {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-5 bg-white px-20 pb-6 dark:bg-zinc-900 lg:min-h-[50dvh] lg:flex-row">
      {/* Desktop Started */}
      <div className="hidden h-[40dvh] flex-col items-center justify-center rounded-2xl bg-[#e8f0f9] px-4 text-black dark:bg-zinc-800 dark:text-white lg:flex">
        <TbTruckDelivery className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9] dark:bg-zinc-900" />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div className="hidden h-[40dvh] flex-col items-center justify-between overflow-hidden bg-transparent px-2 lg:flex">
        <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e8f0f9] px-20 py-4 text-black dark:bg-zinc-800 dark:text-white">
          <IoShield className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9] dark:bg-zinc-900" />
          <p>Super Fast and Free Delivery</p>
        </div>
        <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e8f0f9] px-20 py-4 text-black dark:bg-zinc-800 dark:text-white">
          <RiSecurePaymentLine className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9] dark:bg-zinc-900" />
          <p>Super Fast and Free Delivery</p>
        </div>
      </div>
      <div className="hidden h-[40dvh] flex-col items-center justify-center rounded-2xl bg-[#e8f0f9] px-4 text-black dark:bg-zinc-800 dark:text-white lg:flex">
        <TbTruckDelivery className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9] dark:bg-zinc-900" />
        <p>Super Fast and Free Delivery</p>
      </div>
      {/* Desktop Ended */}
      {/* Mobile Started */}
      <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e8f0f9] px-20 py-5 text-black dark:bg-zinc-800 dark:text-white lg:hidden">
        <TbTruckDelivery className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9] dark:bg-zinc-900" />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e8f0f9] px-20 py-5 text-black dark:bg-zinc-800 dark:text-white lg:hidden">
        <IoShield className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9] dark:bg-zinc-900" />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e8f0f9] px-20 py-5 text-black dark:bg-zinc-800 dark:text-white lg:hidden">
        <RiSecurePaymentLine className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9] dark:bg-zinc-900" />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e8f0f9] px-20 py-5 text-black dark:bg-zinc-800 dark:text-white lg:hidden">
        <GiReceiveMoney className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9] dark:bg-zinc-900" />
        <p>Super Fast and Free Delivery</p>
      </div>
      {/* Mobile Ended */}
    </div>
  );
}

export default Services;
