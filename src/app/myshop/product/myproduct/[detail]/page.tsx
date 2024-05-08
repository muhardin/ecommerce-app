import ProductDetailComponent from "@/app/components/myshop/myproduct/ProductDetailComponent";

const ProductDetailPage = ({ params }: { params: { detail?: string } }) => {
  const id = params.detail;
  console.log(params.detail);
  return (
    <div>
      <ProductDetailComponent id={Number(params.detail)} />
    </div>
  );
};

export default ProductDetailPage;
