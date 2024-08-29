import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function Trusted() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${theme === false ? "bg-[#e2edfa]" : "bg-zinc-900 text-white"} flex min-h-[50dvh] w-full flex-col items-center justify-evenly bg-[#dee1e4] px-20 pb-48`}
    >
      <p className="text-center text-xl font-semibold text-[#a1a1a1]">
        Trusted By 1000+ Companies
      </p>
      <div className="flex w-full flex-wrap items-center justify-evenly">
        <img
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
          alt="trusted-brands"
          className="aspect-[2/1.5] w-40"
        />
        <img
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
          alt="trusted-brands"
          className="aspect-[2/1.5] w-40"
        />
        <img
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
          alt="trusted-brands"
          className="aspect-[2/1.5] w-40"
        />
        <img
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
          alt="trusted-brands"
          className="aspect-[2/1.5] w-40"
        />
        <img
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
          alt="trusted-brands"
          className="aspect-[2/1.5] w-40"
        />
      </div>
    </div>
  );
}

export default Trusted;
