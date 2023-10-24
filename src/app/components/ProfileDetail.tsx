"use client";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useSession } from "next-auth/react";
import { SyntheticEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import z from "zod";
import ModalErrorComponent from "./ui/ModalError";
import LoadingComponent from "./ui/Loading";

export default function Example() {
  const [isLoading, setIsLoading] = useState(false);
  const [valModal, setValModal] = useState<boolean>(false);
  const handleValueChange = (newValue: boolean) => {
    setValModal(newValue);
    setIsLoading(!isLoading);
  };

  const { data: session } = useSession();
  const [data, setData]: any = useState(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.SERVER_ENDPOINT!}/api/user/profile`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.bearer}`,
          },
        }
      );

      const data = await response.json();
      const dataD = data?.data;
      setData(dataD);
      setLoaded(true);
      // console.log(dataD);
    };
    setTimeout(() => {
      fetchData();
    }, 3000);
    // fetchData();
  }, [session?.bearer, data]);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const config = {
    headers: { Authorization: `Bearer ${session?.bearer}` },
  };

  const [errMessage, setErrMessage]: any = useState<string[]>([]);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (event: SyntheticEvent) => {
    setIsLoading(true);
    event.preventDefault();
    toast.loading("loading....");
    try {
      const formData = {
        currentPassword: currentPassword,
        newPassword: newPassword,
        newPassword_confirmation: confirmPassword,
      };
      // formDataOrder.parse(formData);
      // Form data is valid; submit it using Axios
      const response = await axios.post(
        process.env.SERVER_ENDPOINT + "/api/user/profile/password",
        formData,
        config
      );
      // console.log(response.status);

      if (response.status == 200) {
        toast.dismiss();
        toast.success("Success", { duration: 6000 });

        setIsLoading(false);
        console.log(response);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else if (response.status == 201) {
        setErrMessage(response.data.message.error);
        setValModal(true);
        toast.dismiss();
        //   console.log(response);
      } else if (response.status == 500) {
        toast.error("System on maintenance mode");
        toast.dismiss();
      }
    } catch (error) {
      toast.dismiss();
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.reduce(
          (errors, err) => ({
            ...errors,
            [err.path[0]]: err.message,
          }),
          {}
        );
        setFormErrors(fieldErrors);
      }
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastNamer] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmitProfile = async (event: SyntheticEvent) => {
    setIsLoading(true);
    event.preventDefault();
    toast.loading("loading....");
    try {
      const formProfile = {
        first_name: firstName ? firstName : data?.first_name,
        last_name: lastName ? lastName : data?.last_name,
        phone_number: phoneNumber ? phoneNumber : data?.phone_number,
      };
      // formDataOrder.parse(formData);
      // Form data is valid; submit it using Axios
      const response = await axios.post(
        process.env.SERVER_ENDPOINT + "/api/user/profile/update",
        formProfile,
        config
      );
      console.log(firstName);

      if (response.status == 200) {
        toast.dismiss();
        toast.success("Success", { duration: 6000 });

        setIsLoading(false);
        console.log(response);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else if (response.status == 201) {
        setErrMessage(response.data.message.error);
        setValModal(true);
        toast.dismiss();
        //   console.log(response);
      } else if (response.status == 500) {
        toast.error("System on maintenance mode");
        toast.dismiss();
      }
    } catch (error) {
      toast.dismiss();
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.reduce(
          (errors, err) => ({
            ...errors,
            [err.path[0]]: err.message,
          }),
          {}
        );
        setFormErrors(fieldErrors);
      }
    }
  };
  return (
    <>
      <div className="sm:col-span-12  md:col-span-12 lg:col-span-6 xl:col-span-6 ">
        <div className="w-full relative overflow-hidden">
          <div className="p-0">
            <div id="myTabContent">
              <div
                className="active"
                id="Settings"
                role="tabpanel"
                aria-labelledby="Settings-tab"
              >
                <div className="grid md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
                    <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative">
                      <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70">
                        <h4 className="font-medium">Personal Information</h4>
                      </div>
                      {/*end card-header*/}
                      <div className="flex-auto p-4">
                        <form onSubmit={handleSubmitProfile}>
                          <div className="grid md:grid-cols-12 lg:grid-cols-12">
                            <div className="col-span-12 md:col-span-12 lg:col-span-3 self-center text-right mr-2">
                              <label
                                htmlFor="First_Name"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                              >
                                First Name
                              </label>
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-9 mb-2">
                              <input
                                type="text"
                                id="First_Name"
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                defaultValue={data?.first_name}
                                value={firstName ? firstName : data?.first_name}
                                onChange={(e) => {
                                  setFirstName(e.currentTarget.value);
                                }}
                                placeholder="First name"
                                required
                              />
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-3 self-center text-right mr-2">
                              <label
                                htmlFor="Last_Name"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                              >
                                Last Name
                              </label>
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-9  mb-2">
                              <input
                                type="text"
                                id="Last_Name"
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                defaultValue={data?.last_name}
                                onChange={(e) => {
                                  setLastNamer(e.currentTarget.value);
                                }}
                                placeholder="Last name"
                                required
                              />
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-3 self-center text-right mr-2">
                              <label
                                htmlFor="Company_Name"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                              >
                                Company Name
                              </label>
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-9  mb-2">
                              <input
                                type="text"
                                id="Company_Name"
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                defaultValue="Example Themes"
                                placeholder="Last name"
                                required
                              />
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-3 self-center text-right mr-2">
                              <label
                                htmlFor="Contact_Phone"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                              >
                                Contact Phone
                              </label>
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-9  mb-2">
                              <input
                                type="text"
                                id="Contact_Phone"
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                defaultValue={data?.phone_number}
                                placeholder="Last name"
                                value={
                                  phoneNumber ? phoneNumber : data?.phone_number
                                }
                                onChange={(e) => {
                                  setPhoneNumber(e.currentTarget.value);
                                }}
                                required
                              />
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-3 self-center text-right mr-2">
                              <label
                                htmlFor="Your_Email"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                              >
                                Your email
                              </label>
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-9  mb-2">
                              <input
                                type="email"
                                id="Your_Email"
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                defaultValue={data?.email}
                                placeholder="Last name"
                                required
                              />
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-3 self-center text-right mr-2">
                              <label
                                htmlFor="Contact_Phone"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                              >
                                Website Link
                              </label>
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-9  mb-2">
                              <input
                                type="text"
                                id="Contact_Phone"
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                defaultValue=""
                                placeholder="Website"
                              />
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-3 self-center text-right mr-2">
                              <label
                                htmlFor="countries"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                              >
                                Countries
                              </label>
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-9  mb-2">
                              <select
                                id="countries"
                                className=" w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-[6.5px] focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                              >
                                <option selected>Indonesia</option>
                              </select>
                            </div>
                            {/*end col*/}
                            <div className="flex flex-row gap-2 col-start-4 col-end-13  mb-2">
                              <button className="inline-block focus:outline-none text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent border border-gray-200 dark:bg-transparent dark:text-primary-500 dark:hover:text-white dark:border-gray-700 dark:hover:bg-primary-500  text-sm font-medium py-1 px-3 rounded">
                                Submit
                              </button>
                              <button
                                type="reset"
                                className="inline-block focus:outline-none text-red-500 hover:bg-red-500 hover:text-white bg-transparent border border-gray-200 dark:bg-transparent dark:text-red-500 dark:hover:text-white dark:border-gray-700 dark:hover:bg-red-500  text-sm font-medium py-1 px-3 rounded"
                              >
                                Cancel
                              </button>
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end grid*/}
                        </form>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                  <div className="col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
                    <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative">
                      <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70">
                        <h4 className="font-medium">Change Password</h4>
                      </div>
                      {/*end card-header*/}
                      <div className="flex-auto p-4">
                        <form onSubmit={handleSubmit}>
                          <div className="grid md:grid-cols-12 lg:grid-cols-12">
                            <div className="col-span-12 md:col-span-12 lg:col-span-3 self-center text-right mr-2">
                              <label
                                htmlFor="Current_Password"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                              >
                                Current Password
                              </label>
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-9 mb-2">
                              <input
                                type="password"
                                id="Current_Password"
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                placeholder="Current Password"
                                required
                                value={currentPassword}
                                onChange={(e) =>
                                  setCurrentPassword(e.target.value)
                                }
                              />
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-3 self-center text-right mr-2">
                              <label
                                htmlFor="New_Password"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                              >
                                New Password
                              </label>
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-9  mb-2">
                              <input
                                type="password"
                                id="New_Password"
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                placeholder="New Password"
                                required
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                              />
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-3 self-center text-right mr-2">
                              <label
                                htmlFor="Confirm_Password"
                                className="font-medium text-sm text-slate-600 dark:text-slate-400"
                              >
                                Confirm Password
                              </label>
                            </div>
                            {/*end col*/}
                            <div className="col-span-12 md:col-span-12 lg:col-span-9  mb-2">
                              <input
                                type="password"
                                id="Confirm_Password"
                                className="form-input w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-1 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                                placeholder="Confirm Password"
                                required
                                value={confirmPassword}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                              />
                            </div>
                            {/*end col*/}
                            <div className="flex gap-2 col-start-4 col-end-13  mb-2">
                              <button className="inline-block focus:outline-none text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent border border-gray-200 dark:bg-transparent dark:text-primary-500 dark:hover:text-white dark:border-gray-700 dark:hover:bg-primary-500  text-sm font-medium py-1 px-3 rounded">
                                Change Password
                              </button>
                              <button
                                type="reset"
                                className="inline-block focus:outline-none text-red-500 hover:bg-red-500 hover:text-white bg-transparent border border-gray-200 dark:bg-transparent dark:text-red-500 dark:hover:text-white dark:border-gray-700 dark:hover:bg-red-500  text-sm font-medium py-1 px-3 rounded"
                              >
                                Cancel
                              </button>
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end grid*/}
                        </form>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="bg-white dark:bg-slate-800 shadow  rounded-md w-full relative mt-4">
                      <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70">
                        <h4 className="font-medium">Other Settings</h4>
                      </div>
                      {/*end card-header*/}
                      <div className="flex-auto p-4">
                        <form>
                          <label className="custom-label block mb-2 dark:text-slate-300">
                            <div className="bg-white border border-slate-200 rounded w-4 h-4  inline-block leading-4 text-center -mb-[3px]">
                              <input type="checkbox" className="hidden" />
                              <i className="fas fa-check hidden text-xs text-slate-700 " />
                            </div>
                            Email Notifications{" "}
                            <span className="text-slate-400">
                              Do you need them?
                            </span>
                          </label>
                          <label className="custom-label block dark:text-slate-300">
                            <div className="bg-white border border-slate-200 rounded w-4 h-4  inline-block leading-4 text-center -mb-[3px]">
                              <input type="checkbox" className="hidden" />
                              <i className="fas fa-check hidden text-xs text-slate-700" />
                            </div>
                            API Access{" "}
                            <span className="text-slate-400">
                              Enable/Disable access
                            </span>
                          </label>
                        </form>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end grid*/}
              </div>
            </div>
          </div>
        </div>
        {/*end inner-grid*/}
      </div>
      <div className={`${!isLoading ? "hidden" : "block"}`}>
        <LoadingComponent />
      </div>
      <ModalErrorComponent
        errMessage={errMessage}
        modalToggle={handleValueChange}
        valModal={valModal}
      />
    </>
  );
}
