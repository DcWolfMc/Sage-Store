export type DummyProductsDataType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: DummyProductsDimensionsType;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: DummyProductsReviewsType[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: DummyProductsMetadataType;
  images: string[];
  thumbnail: string
};

export type DummyProductsDimensionsType = {
  width: number;
  height: number;
  depth: number;
};

export type DummyProductsReviewsType = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};
export type DummyProductsMetadataType = {
    createdAt: string
    updatedAt: string
    barcode: string
    qrCode: string
}

