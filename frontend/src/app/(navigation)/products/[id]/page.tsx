import {NextPage} from 'next/types'
interface ProductPageParams {
  params:{id: string};
  // Adicione outras propriedades que você precisa passar para a página
}

const ProductPage:NextPage<ProductPageParams> = ({params}) => {

  console.log("params:", params);
  
  
  return (
    <div>
      <h1>Produto ID: {params.id}</h1>
      {/* Renderize outras informações sobre o produto aqui */}
    </div>
  );
};

export default ProductPage;
