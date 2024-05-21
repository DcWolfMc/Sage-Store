import { ProductItem } from "@/components/ProductItem";

const product = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  images: [
    "https://cdn.dummyjson.com/product-images/1/1.jpg",
    "https://cdn.dummyjson.com/product-images/1/2.jpg",
    "https://cdn.dummyjson.com/product-images/1/3.jpg",
    "https://cdn.dummyjson.com/product-images/1/4.jpg",
    "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  ],
};

export default function Products() {
  return (
    <div className="flex flex-col p-4">
      Products
      <ProductItem
        id={product.id}
        title={product.title}
        price={product.price}
        rating={product.rating}
        stock={product.stock}
        brand={product.brand}
        category={product.category}
        thumbnail={product.thumbnail}
        discount={product.discountPercentage}
      />
    </div>
  );
}
