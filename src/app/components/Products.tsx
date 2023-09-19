import { getProducts } from "../helpers";
import Container from "./Container";
import ProductsData from "./ProductsData";
import { Products } from "../../../type";

const Products = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-5">
      {products?.map((item: Products) => (
        <ProductsData item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;
