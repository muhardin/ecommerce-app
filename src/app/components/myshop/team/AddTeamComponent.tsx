"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Switch from "react-switch";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";
import Select from "react-tailwindcss-select";
import toast from "react-hot-toast";
import { ClipboardEdit } from "lucide-react";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";
import Categories from "@/data/categories.json";
import RegisterComponent from "@/components/register/RegisterComponent";
import FormAddTeam from "./FormAddTeam";

interface ModalProps {
  isOpen: boolean;
  isUpdate?: boolean;
  closeModal: () => void;
}
const AddTeamComponent: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  isUpdate,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleDivClick = () => {
    // Trigger a click event on the file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // console.log(categories);

  if (!isOpen) return null;

  return (
    <>
      <div tabIndex={-1} className="drawer drawer-right drawer-open bg-white">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="drawer-content-wrapper w-5/6 ">
          <div className="drawer-content ">
            <button
              onClick={closeModal}
              className="fixed focus:outline-none z-10 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="fixed flex flex-col w-full h-full justify-between bg-white">
              <div className="w-full relative p-6 border-b border-gray-100 bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <div className="flex md:flex-row flex-col justify-between mr-20">
                  <div>
                    <h4 className="text-xl font-medium dark:text-gray-300">
                      Add Team
                    </h4>
                    <p className="mb-0 text-sm dark:text-gray-300">
                      Add new Team
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white relative overflow-hidden h-full track-horizontal thumb-horizontal w-full dark:bg-gray-700 dark:text-gray-200">
                <div className="absolute inset-0 overflow-y-scroll mr-[-17px] mb-[-17px]">
                  <div className="block" id="block">
                    <div className="p-4 md:p-2">
                      <FormAddTeam closeModal={closeModal} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="drawer-handle">
            <i className="drawer-handle-icon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTeamComponent;
