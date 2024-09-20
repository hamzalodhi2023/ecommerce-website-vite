/* eslint-disable react/prop-types */
function SingleProductImage({ images = [{ url: "", filename: "" }] }) {
  console.log(images);

  return (
    <>
      {/* {images.forEach((image, index) => {
        return (
          <figure key={index}>
            <img
              src={image.url}
              alt={image.filename}
              className="w-1/5 cursor-pointer object-cover"
            />
          </figure>
        );
      })} */}

      {images.map((image, index) => {
        return (
          <figure key={index}>
            <img
              src={image.url}
              alt={image.filename}
              className="w-1/5 cursor-pointer object-cover"
            />
          </figure>
        );
      })}
    </>
  );
}

export default SingleProductImage;
