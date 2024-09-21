/* eslint-disable react/prop-types */
import { FaRegStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

function Stars({ stars, reviews }) {
  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-yellow-500" />
        ) : stars >= number ? (
          <FaRegStarHalfStroke className="text-yellow-500" />
        ) : (
          <FaRegStar className="text-yellow-500" />
        )}
      </span>
    );
  });

  return (
    <span className="flex items-center">
      <span className="font-bold">Rating: &nbsp;</span>
      <div className="flex items-center">{ratingStars}</div>&nbsp;({reviews}{" "}
      Customer Reviews)
    </span>
  );
}

export default Stars;
