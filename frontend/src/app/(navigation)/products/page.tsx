import { ProductItem } from "@/components/ProductItem";
import {
  DummyProductsDataType,
  getProductsDataType,
} from "@/@types/dummyjsonTypes";
import { NextPage } from "next/types";
import { Pagination } from "@/components/Pagination";

const Products: NextPage<{
  searchParams: { page?: string; limit?: string };
}> = async ({ searchParams }) => {
  console.log("searchParams", searchParams);

  const currentPage = Number(searchParams?.page) || 1;
  const currentLimit = Number(searchParams?.limit) || 30;
  const data = await getProducts(currentLimit, currentPage);

  return (
    <div className="pt-4 flex flex-col items-center gap-4">
      <div id="filters-params"></div>
      <div id="sort-params"></div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 xl:gap-8 w-full max-w-[1440px]">
        {data.products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            stock={product.stock}
            brand={product.brand}
            thumbnail={product.thumbnail}
            discount={product.discount}
          />
        ))}
      </div>
      <Pagination totalOfProducts={data.total} />
    </div>
  );
};
export const getProducts = async (limit: number, page: number) => {
  let skip = 0;
  if (page) {
    skip = (page - 1) * limit;
  }

  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit ? limit : "30"}&skip=${skip}`,
    { next: { revalidate: 60 * 60 * 1 /*1 hour*/ } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data: Promise<getProductsDataType> = res.json().then((response) => {
    let products = [];
    products = response.products.map((product: DummyProductsDataType) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        discount: product.discountPercentage,
        rating: product.rating,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
        thumbnail: product.thumbnail,
      };
    });
    return {
      products: products,
      total: response.total,
      skip: response.skip,
      limit: response.limit,
    };
  });

  return data;
};

export default Products;
