import { DummyProductsDataType } from "@/@types/dummyjsonTypes";
import { CarouselWithPreview } from "@/components/Carousel";
import { RatingStars } from "@/components/RatingStars";
import { Tag } from "@/components/Tag";
import { NextPage } from "next/types";

const ProductPage: NextPage<{ params: { id: string } }> = async ({
  params,
}) => {
  console.log("params:", params);
  const data: DummyProductsDataType = await getData(params.id);

  console.log("data", data);

  function showPrice() {
    if (!data.discountPercentage) {
      return data.price;
    }
    return data.price * ((100 - data.discountPercentage) / 100);
  }

  return (
    <div className="p-2 pt-4 flex flex-col gap-4">
      <div className="flex lg:flex-row flex-col gap-8">
        <CarouselWithPreview images={data.images} />
        <div className="max-w-[480px] py-4 flex flex-col items-start gap-4">
          <strong className="text-2xl">{data.title}</strong>
          <div className="flex flex-row gap-4">
            {data.brand && (
              <Tag tagName={data.brand} interactable={false} checked />
            )}
            <Tag tagName={data.category} interactable={false} />
            {/* {data.tags.map((tag, index)=>(

            <Tag key={`${tag}-${index}`} tagName={tag} interactable={false} />
          ))} */}
          </div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <RatingStars
              className="size-8 text-amber-300"
              rating={data.rating}
            />
            <span className="text-lg">{data.rating}</span>
          </div>
          <strong className="text-lg md:text-3xl">
            USD$ {showPrice().toFixed(2)}
          </strong>
          {!data.discountPercentage ||
            (data.discountPercentage >= 5 && (
              <div className="flex flex-row items-center gap-1 md:text-2xl text-base">
                <strong className="text-slate-500 line-through">
                  USD$ {data.price.toFixed(2)}
                </strong>
                <strong className="text-violet-700 dark:text-violet-500 ">
                  {-data.discountPercentage}%
                </strong>
              </div>
            ))}
          {data.stock <= 50 && (
            <div className="w-full text-center font-bold bg-amber-500 text-slate-100 dark:text-slate-900">
              Last Units
            </div>
          )}
          <div className="p-4 flex flex-col gap-2 ">
            <strong className="text-2xl">Description</strong>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <div>
        <strong>Similar products</strong>
      </div>
    </div>
  );
};

async function getData(productId: string) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default ProductPage;
