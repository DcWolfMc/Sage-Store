import { ProductItem } from "@/components/ProductItem";
import {
  DummyProductsDataType,
  getProductsDataType,
} from "@/@types/dummyjsonTypes";
import { NextPage } from "next/types";
import { Pagination } from "@/components/Pagination";
import { SmallButton } from "@/components/SmallButton";
import { Faders, CurrencyDollar, Star } from "@phosphor-icons/react/dist/ssr";

const Products: NextPage<{
  searchParams: { page?: string; limit?: string };
}> = async ({ searchParams }) => {
  console.log("searchParams", searchParams);

  const currentPage = Number(searchParams?.page) || 1;
  const currentLimit = Number(searchParams?.limit) || 30;
  const data = await getProducts(currentLimit, currentPage);

  return (
    <div className="pt-4 flex flex-col items-center gap-4 md:px-8">
      <div
        id="filters-params"
        className="py-4 w-full flex flex-row gap-2 border-b border-slate-500"
      >
        <SmallButton icon={Faders} iconProps={{transform:"rotate(90)"}} children={"Filters"} />
        <SmallButton icon={CurrencyDollar} children={"Price"} />
        <SmallButton icon={Star} iconProps={{weight:"fill"}} children={"Rating"} />
      </div>
      <div id="sort-params" className="w-full flex flex-row justify-between">
        <div>
          <span>{data.total} results</span>
        </div>
        <div>
          <span>Products per page</span>
        </div>
      </div>
      <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4 xl:gap-8 w-full max-w-[1440px]">
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
const getProducts = async (limit: number, page: number) => {
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
