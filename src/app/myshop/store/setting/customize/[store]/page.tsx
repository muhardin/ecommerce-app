import MyStoreCustomize from "@/app/components/myshop/store/MyStoreCustomize";

const page = ({ params }: { params: { slug: string; store: number } }) => {
  const id = params.store;
  console.log(params);
  return (
    <div className="p-0 h-auto">
      <MyStoreCustomize store={id} />
    </div>
  );
};

export default page;
