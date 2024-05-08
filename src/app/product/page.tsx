import { Products } from "../../../type";
import Container from "../components/Container";
import ProductsData from "../components/ProductsData";
import SingleProduct from "../components/SingleProduct";
import TrendingProduct from "../components/TrendingProduct";
import { getSingleProduct, getTrendingProducts } from "../helpers";
import { headers } from "next/headers";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const ProductPage = async ({ searchParams }: Props) => {
  const _idString = searchParams?.id;
  const _image = searchParams?.image;
  const image = String(_image);
  const id = Number(_idString);
  // const product = await getSingleProduct(id);
  // const data = await getTrendingProducts();
  const headersList = headers();
  const domain = headersList.get("host") || "";
  // console.log(domain);
  return (
    <div>
      <Container>
        {/* Detail Product */}
        <SingleProduct
          product={id}
          primaryImage={`${image ? image : "/assets/images/no-image.png"}`}
        />

        {/* Trending Product */}
        <TrendingProduct domain={domain} />
        {/* <div className="">
          <p className="text-xl py-1 font-semibold">Trending Products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
            {data?.map((item: Products) => (
              <ProductsData key={item.id} item={item} />
            ))}
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default ProductPage;
