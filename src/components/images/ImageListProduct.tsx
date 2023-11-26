import Image from "next/image";
import { ProductGallery } from "../../../type";

interface Props {
  items: ProductGallery[]; // Correct the type here
}
const ImageListProduct = ({ items }: Props) => {
  console.log(items);
  return (
    <>
      <div className="flex flex-row gap-1 justify-between">
        {items?.length > 0 ? (
          items.map((item, index) => (
            <a
              key={index} // Add a unique key for each iteration
              href="#"
              className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
              <Image
                width={500}
                height={500}
                src={`${process.env.SERVER_ENDPOINT}/${item.url}`}
                alt=""
                className="object-cover w-full lg:h-20"
              />
            </a>
          ))
        ) : (
          <div> Loading... </div>
        )}
      </div>
    </>
  );
};

export default ImageListProduct;
