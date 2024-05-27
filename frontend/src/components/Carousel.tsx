import Image from "next/image";
import { FunctionComponent } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

interface CarouselWithPreviewProps {}

export const CarouselWithPreview: FunctionComponent<
  CarouselWithPreviewProps
> = ({}) => {
  const tamplateImage = [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  ];
  return (
    <Carousel opts={{align:"start"}} className="w-full max-w-lg">
      
      <CarouselContent className="">
        {tamplateImage.map((image, index) => (
          <CarouselItem
            className="relative w-full h-[320px] md:h-[400px] flex items-center"
            key={index}
          >
            <Image className="object-contain" src={image} alt={`${image}`} fill />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-full rounded-none border-none bg-transparent z-10 left-0"/>
      <CarouselNext className="h-full rounded-none border-none bg-transparent z-10 right-0"/>
    </Carousel>
  );
};
