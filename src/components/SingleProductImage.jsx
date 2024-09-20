import { useState } from "react";

/* eslint-disable react/prop-types */
function SingleProductImage({ images = [{ url: "", filename: "" }] }) {
  const [selectedImage, setSelectedImage] = useState(images[0].url);

  return (
    <div className="flex flex-col items-center md:w-1/2">
      <img src={selectedImage} alt="apple" className="mb-4 h-72 object-cover" />
      <div className="flex w-full justify-center gap-2 py-2">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image.url}
              alt={image.filename}
              onClick={() => setSelectedImage(image.url)}
              className="w-1/5 cursor-pointer object-cover"
            />
          );
        })}
      </div>
    </div>
  );
}

export default SingleProductImage;
