/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ImageSlider(props) {
  const images = props.images;
  const [activeImage, setActiveImage] = useState(0);  

  return (
    <div className="relative flex flex-col items-center w-full aspect-square">
      <img src={images[activeImage]} className="object-cover w-full aspect-square" />
      <div className="absolute bottom-0 w-full h-[100px] backdrop-blur-lg">
        <div className="flex items-center justify-center w-full h-full overflow-hidden">
          {images.map((image, index) => (
            <img
              onClick={() => setActiveImage(index)}
              key={index}
              src={image}
              className="object-cover w-16 h-16 mx-2 cursor-pointer "
            />
          ))}
        </div>
      </div>
    </div>
  );
}