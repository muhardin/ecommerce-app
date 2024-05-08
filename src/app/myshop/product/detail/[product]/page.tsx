import ProductDetailComponent from "@/app/components/myshop/products/ProductDetailComponent";
import React from "react";

const ProductDetailPage = ({ params }: { params: { product?: string } }) => {
  const id = params.product;
  // console.log(params.product);
  return (
    <div>
      <ProductDetailComponent id={Number(params.product)} />
    </div>
  );
};

export default ProductDetailPage;
