"use client";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

interface CarouselWithPreviewProps {}

export const CarouselWithPreview: FunctionComponent<
  CarouselWithPreviewProps
> = ({}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const tamplateImage = [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  ];

  function handleClickImagePreview(index: number) {
    setCurrent(index);
    api?.scrollTo(index);
  }
  return (
    <div id="carousel-container" className="w-full max-w-lg">
      <Carousel
        id="carousel"
        setApi={setApi}
        opts={{ align: "start" }}
        className="w-full max-w-lg"
      >
        <CarouselContent id="carousel-content" className="coisa">
          {tamplateImage.map((image, index) => (
            <CarouselItem
              id="carousel-item"
              className="relative w-full h-[320px] md:h-[400px] flex items-center"
              key={index}
            >
              <Image
                className="object-contain"
                src={image}
                alt={`${image}`}
                fill
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="h-full rounded-none border-none bg-transparent z-10 left-0" />
        <CarouselNext className="h-full rounded-none border-none bg-transparent z-10 right-0" />
      </Carousel>
      <div
        id="carousel-preview"
        className="w-full max-w-lg flex flex-row gap-1 overflow-auto scrollbar scrollbar-x"
      >
        {tamplateImage.map((image, index) => (
          <button
            onClick={() => handleClickImagePreview(index)}
            id="carousel-preview-item"
            className={`relative h-16 w-12 min-w-12 border-2  ${
              current == index + 1
                ? `border-violet-700`
                : `border-transparent hover:border-slate-500/30 dark:hover:border-slate-500/50`
            }`}
          >
            <Image
              className="object-cover"
              src={image}
              alt={`${image}`}
              quality={50}
              fill
            />
          </button>
        ))}
      </div>
    </div>
  );
};
