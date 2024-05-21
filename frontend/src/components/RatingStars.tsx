import { Star, StarHalf } from "@phosphor-icons/react/dist/ssr";
import { IconProps } from "@phosphor-icons/react/";
import { FunctionComponent } from "react";

interface RatingStarsProps extends IconProps {
  rating: number;
  gap?: number;
}
export const RatingStars: FunctionComponent<RatingStarsProps> = ({
  rating,
  gap = 4,
  size,
  ...rest
}) => {

  let clampedRating = Math.min(rating, 5);
  let int = Math.floor(clampedRating);
  let decimal = clampedRating - int;
  let halfStar = decimal >= 0.5 && decimal <=0.8? 1 : 0;
  decimal>=0.8&& int++
  let emptyStars = 5 - int - halfStar;
  
  return (
    <div className={`flex flex-row items-center justify-center gap-[${gap}px]`}>
      {Array.from({ length: int }).map((_, index) => (
        <Star key={index} size={size ? size : 18} weight={"fill"} {...rest} />
      ))}
      {halfStar === 1 && (
        <StarHalf size={size ? size : 18} weight={"fill"} {...rest} />
      )}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star key={index + int + halfStar} size={size ? size : 18} {...rest} />
      ))}
      
    </div>
  );
};
