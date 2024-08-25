import { TbTruckDelivery } from "react-icons/tb";
import { IoShield } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
function Services() {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-5 px-20 md:min-h-[50dvh] md:flex-row">
      {/* Desktop Started */}
      <div className="hidden h-[40dvh] flex-col items-center justify-center rounded-2xl bg-[#e0efff] px-4 md:flex">
        <TbTruckDelivery className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]" />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div className="hidden h-[40dvh] flex-col items-center justify-between overflow-hidden bg-transparent px-2 md:flex">
        <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-4">
          <IoShield className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]" />
          <p>Super Fast and Free Delivery</p>
        </div>
        <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-4">
          <RiSecurePaymentLine className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]" />
          <p>Super Fast and Free Delivery</p>
        </div>
      </div>
      <div className="hidden h-[40dvh] flex-col items-center justify-center rounded-2xl bg-[#e0efff] px-4 md:flex">
        <TbTruckDelivery className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]" />
        <p>Super Fast and Free Delivery</p>
      </div>
      {/* Desktop Ended */}
      {/* Mobile Starte */}
      <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-5 md:hidden">
        <TbTruckDelivery className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]" />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-5 md:hidden">
        <IoShield className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]" />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-5 md:hidden">
        <RiSecurePaymentLine className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]" />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div className="card flex flex-col items-center justify-center rounded-xl bg-[#e0efff] px-20 py-5 md:hidden">
        <GiReceiveMoney className="h-[60px] w-[60px] rounded-full bg-white p-3 text-5xl text-[#6354e9]" />
        <p>Super Fast and Free Delivery</p>
      </div>
      {/* Mobile Ended */}
    </div>
  );
}

export default Services;
