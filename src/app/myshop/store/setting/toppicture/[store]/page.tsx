import MyStoreTopPicture from "@/app/components/myshop/store/topbanner/MyStoreTopPicture";

const page = ({ params }: { params: { slug: string; store: number } }) => {
  const id = params.store;
  console.log(params);
  return (
    <div className="p-0 h-auto">
      <MyStoreTopPicture store={id} />
    </div>
  );
};

export default page;
