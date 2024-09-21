/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

function Stars({ stars, reviews }) {
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
  });
  return (
    <span>
      <span className="font-bold">Rating: </span>
      {stars} Stars ({reviews} Reviews)
      <FaRegStar />
      <FaRegStarHalfStroke />
      <FaStar />
    </span>
  );
}

export default Stars;
