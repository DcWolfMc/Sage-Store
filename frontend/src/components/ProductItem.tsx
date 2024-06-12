import Image from "next/image";
import { FunctionComponent } from "react";
import { Tag } from "./Tag";
import { RatingStars } from "./RatingStars";
import Link from "next/link";

export interface ProductItemProps {
  id: number;
  title: string;
  price: number;
  discount?: number;
  rating: number;
  stock: number;
  brand?: string;
  thumbnail: string;
}

export const ProductItem: FunctionComponent<ProductItemProps> = ({
  brand,
  id,
  price,
  rating,
  stock,
  thumbnail,
  title,
  discount,
}) => {
  function showPrice() {
    if (!discount) {
      return price;
    }
    return price * ((100 - discount) / 100);
  }
  return (
    <Link
      href={`products/${id}`}
      className="max-w-full md:max-w-[320px] w-full py-4 flex flex-col justify-center md:justify-between items-center gap-2 border border-slate-500 rounded-lg transition-all hover:bg-slate-500/30"
    >
      <div className="w-full flex flex-row md:flex-col ">
        <div className="relative w-[128px]  md:w-full h-[160px] md:h-[300px] flex items-center">
          <Image
            className="p-2 object-cover md:object-cover"
            alt={title}
            src={thumbnail}
            sizes="(max-width: 320px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </div>
        <div className="flex-1 w-full px-4 md:px-8">
          <h3 className="text-base md:text-lg line-clamp-2 text-wrap">
            {title}
          </h3>
          {brand&&<Tag tagName={brand} interactable={false} checked />}
          <div className="flex flex-row gap-2 items-center align-middle">
            <RatingStars
              className=" text-amber-500 dark:text-amber-400"
              rating={rating}
            />
            <span className="text-sm md:text-base align-middle">
              {rating.toFixed(2)}
            </span>
          </div>
          <strong className="text-lg md:text-2xl">
            USD$ {showPrice().toFixed(2)}
          </strong>
          {!discount|| discount>=5 && (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 text-md md:text-lg">
              <strong className="text-slate-500 line-through">
                USD$ {price.toFixed(2)}
              </strong>
              <strong className="text-violet-700 dark:text-violet-500 ">{-discount}%</strong>
            </div>
          )}
        </div>
      </div>
      {stock <= 50 ? (
        <div className="w-full text-center font-bold bg-amber-500 text-slate-100 dark:text-slate-900">
          Last Units
        </div>
      ) : (
        <div className="h-6"></div>
      )}
    </Link>
  );
};
