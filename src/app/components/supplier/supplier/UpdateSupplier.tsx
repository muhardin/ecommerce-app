import { SyntheticEvent, useState } from "react";
import { Address, DataToAdd } from "../../../../../type";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import Select from "react-tailwindcss-select";
import cities from "../../../../data/cities.json";
import data from "../../../../data/sub_districts.json";
import useSWR from "swr";
import { Supplier } from "../../../../../adminType";

type AddSupplier = {
  supplier_name: string;
  contact_person: string;
  phone: string;
  description: string;
  address: string;
  zip_code: string;
  city_id?: number; // Make city_id optional
  subdistrict?: number; // Make subdistrict optional
  id?: number; // Make subdistrict optional
};

const UpdateSupplier = ({ item }: { item: Supplier }) => {
  const [modal, setModal] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [errMessage, setErrMessage] = useState<string[]>([]);

  // const [getBank, setBank] = useState<any>({
  //   value: item.city,
  //   label: item.city_name,
  //   disabled: false,
  // });

  const [getCityId, setCityId] = useState(item.city_id);
  const [getAreaId, setAreaId] = useState<any>({
    value: item.subdistrict,
    label: item.subdistrict_name,
    disabled: false,
  });
  const [getInCity, setInCity] = useState<any>({
    value: item.city_id,
    label: item.city_name,
    disabled: false,
  });

  const { data: session } = useSession();
  const [formData, setFormData] = useState<AddSupplier>({
    id: item.id,
    supplier_name: item.supplier_name,
    contact_person: item.contact_person,
    phone: item.phone,
    description: item.description,
    address: item.address,
    zip_code: item.zip_code,
    city_id: item.city_id,
    subdistrict: item.subdistrict,
  });
  const handleChangeCity = (value: any) => {
    setInCity(value);
    setCityId(value.value);
    setAreaId(null);
  };
  const handleChangeArea = (value: any) => {
    // console.log(value);
    setAreaId(value);
    setFormData({
      ...formData,
      subdistrict: value.value,
    });
  };
  const options = data.filter((item) => item.city_id === getCityId.toString());

  const handleSubmitAddress = async (e: SyntheticEvent) => {
    e.preventDefault();
    toast.loading("loading...");
    setErrMessage([]);
    const config = {
      headers: { Authorization: `Bearer ${session?.bearer}` },
    };
    const post = await axios.post(
      `${process.env.SERVER_ENDPOINT}/api/supplier-board/suppliers/update`,
      formData,
      config
    );

    if (post.status == 200) {
      toast.dismiss();
      toast.success("Success", { duration: 6000 });
      setModal(false);
    } else if (post.status == 201) {
      setErrMessage(post.data.message.error);
      setIsFail(true);
      toast.dismiss();
      // console.log(post.data.message.error);
    } else if (post.status == 500) {
      toast.error("System on maintenance mode");
      toast.dismiss();
      // console.log(post.data.message.error);
    }
  };
  function toggleModal() {
    setModal(!modal);
  }

  console.log(item);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setModal(true);
          }}
          className="bg-sky-500 hover:bg-sky-400 p-2 text-white rounded-md"
        >
          Update
        </button>

        <div
          className={`relative z-10 ${
            modal ? "visible" : "invisible"
          } overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="w-full flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <form onSubmit={handleSubmitAddress}>
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    {isFail ? (
                      <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
                        <div
                          className="absolute top-2.5 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
                          data-dismissible-target="alert"
                        >
                          <button
                            onClick={() => {
                              setIsFail(false);
                            }}
                            role="button"
                            className="w-max rounded-lg p-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        Register Fail !
                        {errMessage.map((item: string, index) => (
                          <div className="" key={item[index]}>
                            <li className="text-md font-bold text-white text-sm">
                              {item}
                            </li>
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="flex flex-col sm:flex sm:items-start">
                      <div className="w-full mb-6 md:mb-0 pr-4">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Supplier Name
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="My Aunty"
                          value={
                            formData.supplier_name
                              ? formData.supplier_name
                              : item?.supplier_name
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              supplier_name: e.target.value,
                            })
                          }
                          required
                        />
                        {/* <p className="text-red-500 text-xs italic">
                          Please fill out this field.
                        </p> */}
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                          >
                            Contact Person
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="My Aunty"
                            value={
                              formData.contact_person
                                ? formData.contact_person
                                : item?.contact_person
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                contact_person: e.target.value,
                              })
                            }
                            required
                          />
                          {/* <p className="text-red-500 text-xs italic">
                          Please fill out this field.
                        </p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-last-name"
                          >
                            Phone
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="628137285998"
                            value={
                              formData.phone ? formData.phone : item?.phone
                            }
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 justify-between">
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              City
                            </label>
                            {/* <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="password"
                          placeholder="******************"
                        /> */}
                            <Select
                              primaryColor={"indigo"}
                              value={getInCity}
                              onChange={handleChangeCity}
                              options={cities}
                              isSearchable={true}
                              classNames={{
                                menuButton: ({ isDisabled }: any) =>
                                  `flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none ${
                                    isDisabled
                                      ? "bg-gray-200"
                                      : "bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                                  }`,
                                menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
                                listItem: ({ isSelected }: any) =>
                                  `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                                    isSelected
                                      ? `text-white bg-blue-500`
                                      : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                                  }`,
                              }}
                            />
                            <p className="text-gray-600 text-xs italic">
                              Make it as long and as crazy as youd like
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                          <div className="w-full px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Area
                            </label>
                            {/* <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="password"
                          placeholder="******************"
                        /> */}
                            <Select
                              primaryColor={"indigo"}
                              value={getAreaId}
                              onChange={handleChangeArea}
                              options={options}
                              isSearchable={true}
                            />

                            <p className="text-gray-600 text-xs italic">
                              Make it as long and as crazy as youd like
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full mb-2">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Address Detail
                        </label>
                        <textarea
                          required
                          value={
                            formData.address ? formData.address : item?.address
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
                          className="block w-full h-24 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-28 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Address Detail"
                        ></textarea>
                      </div>
                      <div className="w-full md:w-1/3 mb-6 mt-2 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-zip"
                        >
                          Zip
                        </label>
                        <input
                          required
                          value={
                            formData.zip_code
                              ? formData.zip_code
                              : item?.zip_code
                          }
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              zip_code: e.target.value,
                            })
                          }
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-zip"
                          type="text"
                          placeholder="90210"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      // onClick={handleSubmitAddress}
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Save
                    </button>
                    <button
                      onClick={toggleModal}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default UpdateSupplier;
