import Link from "next/link";
import React from "react";

const MenuBanner = ({ store }: { store: Number }) => {
  return (
    <div>
      <div className="flex flex-row justify-end mt-2 mb-1 gap-1">
        <Link
          href={"/myshop/store/setting/customize/" + store}
          className="p-2 bg-sky-500 text-white hover:bg-sky-700">
          Slide Show
        </Link>
        <Link
          href={"/myshop/store/setting/toppicture/" + store}
          className="p-2 bg-sky-500 text-white hover:bg-sky-700">
          Top Picture
        </Link>
      </div>
    </div>
  );
};

export default MenuBanner;
