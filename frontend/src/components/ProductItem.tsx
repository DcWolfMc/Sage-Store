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
    <div className="border border-slate-500 rounded-lg">
      <div className="relative max-w-[250px] max-h[300px]">
        <Image className="object-contain" alt={title} src={thumbnail} fill />
      </div>
      <div>
        <h3 className="text-lg line-clamp-2">{title}</h3>
        <Tag tagName={brand} interactable={false} />
        <div className="flex flex-row gap-2 items-center">
          <RatingStars rating={rating} color="#FCD34D"/>
          <span>{rating.toFixed(2)}</span>
        </div>
        <strong className="text-2xl">USD$ {showPrice()}</strong>
        <div className="flex flex-row items-center gap-2 text-lg">
          <strong className="text-slate-500 line-through">USD$ {showPrice()}</strong>
          <strong className="text-violet-700 ">{discount}%</strong>
        </div>
      </div>
      {stock <= 50 && <div></div>}
    </div>
  );
};
