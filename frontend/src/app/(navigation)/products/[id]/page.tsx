import { CarouselWithPreview } from "@/components/Carousel";
import { NextPage } from "next/types";
interface ProductPageParams {
  params: { id: string };
  // Adicione outras propriedades que você precisa passar para a página
}

const ProductPage: NextPage<ProductPageParams> = ({ params }) => {
  console.log("params:", params);

  return (
    <div>
      <h1>Produto ID: {params.id}</h1>
      <div className="flex justify-center">
        <CarouselWithPreview />
      </div>
      <div>
        <strong>Similar products</strong>
      </div>
    </div>
  );
};

export default ProductPage;
