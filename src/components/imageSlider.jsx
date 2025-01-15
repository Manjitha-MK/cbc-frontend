import { useState } from "react";

export default function ImageSlider(props){
    const images = props.images;
    const [activeImage, setActiveImage] = useState(0);

    return(
        <div className="relative flex flex-col items-center w-full aspect-square">
            <img
              src={images[activeImage]}
              className="object-cover w-full rounded-lg aspect-square"
            />
            <div className="w-full absolute h-[100px] bottom-0 backdrop-blur-lg ">
                <div className="flex items-center justify-center w-full h-full overflow-hidden">
                    {images.map((images, index) => (
                        <img 
                            onClick={()=> setActiveImage(index)}
                            key={index}
                            src={images}
                            className="object-cover w-16 h-16 mx-2 cursor-pointer"
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}