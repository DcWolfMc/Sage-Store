import Image from "next/image";
import { FunctionComponent } from "react";
import { Tag } from "./Tag";
import { RatingStars } from "./RatingStars";

interface ProductItemProps {
  id: number;
  title: string;
  price: number;
  discount?: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export const ProductItem: FunctionComponent<ProductItemProps> = ({
  brand,
  category,
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
    <div className="max-w-[320px] w-full py-4 flex flex-col justify-center items-center gap-2 border border-slate-500 rounded-lg">
      <div className="relative w-full h-[300px]">
        <Image className="p-2 object-cover" alt={title} src={thumbnail} fill />
      </div>
      <div className="flex-1 w-full px-8">
        <h3 className="text-lg line-clamp-2 text-wrap">{title}</h3>
        <Tag tagName={brand} interactable={false} />
        <div className="flex flex-row gap-2 items-center">
          <RatingStars
            className="text-amber-500 dark:text-amber-400"
            rating={rating}
          />
          <span>{rating.toFixed(2)}</span>
        </div>
        <strong className="text-2xl">USD$ {showPrice().toFixed(2)}</strong>
        <div className="flex flex-row items-center gap-2 text-lg">
          <strong className="text-slate-500 line-through">
            USD$ {price.toFixed(2)}
          </strong>
          <strong className="text-violet-700 ">{discount}%</strong>
        </div>
      </div>
      {stock <= 50 ? (
        <div className="w-full text-center font-bold bg-amber-500 text-slate-100 dark:text-slate-900">
          Last Units
        </div>
      ) : (
        <div className="h-6"></div>
      )}
    </div>
  );
};
