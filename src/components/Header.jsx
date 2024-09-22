import { NavLink } from "react-router-dom";
import Button from "./layout/ui/Button";
// eslint-disable-next-line react/prop-types
function Header({ data }) {
  return (
    <div className="flex h-[80dvh] w-full items-center justify-center gap-5 px-20 pb-10">
      <div className="text-div flex w-full flex-col justify-evenly gap-4 text-justify lg:w-1/2 lg:items-start">
        <div>
          <p className="text-xl text-[#5471c7]">WELCOME TO</p>
          <h1 className="text-5xl font-bold">{data}</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nam
          recusandae. Consequatur iusto, necessitatibus alias molestiae incidunt
          consequuntur commodi saepe, laboriosam fugit quam suscipit aspernatur
          deserunt sed blanditiis deleniti at fuga eius quae soluta, tempore id.
        </p>
        <NavLink to="/products" className="w-fit">
          <Button data={"SHOP NOW"} />
        </NavLink>
      </div>
      <div className="img-div relative hidden h-full w-1/2 items-center justify-center lg:flex">
        <figure className="absolute z-10">
          <img
            src="./images/hero.jpg"
            alt="Internal Server Error"
            className="w-[450px] border-8 border-white object-cover"
          />
        </figure>
      </div>
    </div>
  );
}

export default Header;
