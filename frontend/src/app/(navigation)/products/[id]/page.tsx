import { CarouselWithPreview } from "@/components/Carousel";
import { NextPage } from "next/types";
interface ProductPageParams {
   id: number;
    title: string;
    price: number;
    discount?: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
  
}

const ProductPage: NextPage<{params:{id:string}}> = async ({ params }) => {
  console.log("params:", params);
  const data:ProductPageParams = await getData(params.id)

  console.log("data",data);
  
  return (
    <div className="p-2 pt-4 flex lx:flex-row flex-col gap-4">
      <strong className="text-2xl">Produto ID: {data.id}</strong>
      
        <CarouselWithPreview />
        {data.stock <= 50 && (
        <div className="w-full text-center font-bold bg-amber-500 text-slate-100 dark:text-slate-900">
          Last Units
        </div>
      )}
      <div>
        <strong>Similar products</strong>
      </div>
    </div>
  );
};


export async function getData(productId:string) {
  const res = await fetch(`https://dummyjson.com/products/${productId}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default ProductPage;
