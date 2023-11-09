"use client";
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const AddProductComponent = () => {
  const [content, setContent] = useState<string>("");
  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };
  return (
    <>
      <div className="p-4">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <div className="flex flex-col gap-2">
              <div className="text-xl font-semibold font-mono">Add Product</div>
              <div className="flex flex-row gap-1 items-center">
                <div className="">Home</div>
                <div className="bg-gray-400 w-2 h-2 rounded-full">
                  <span></span>
                </div>
                <div className="">Add Product</div>
              </div>
            </div>
          </div>
          <div className="mb-2 flex sm:justify-end items-center flex-wrap">
            <button className="bg-sky-400 text-white rounded-md px-10 py-2 mr-2 sm:mb-0 mb-2">
              Publish{" "}
            </button>
            <button className="px-10 py-2 mr-2 sm:mb-0 mb-2 border-gray-400 border rounded-lg">
              Save Draft
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default AddProductComponent;
