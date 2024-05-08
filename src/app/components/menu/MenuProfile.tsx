import { toggleProfileMenu } from "@/redux/profileSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

const MenuProfile = ({ path }: any) => {
  const dispatch = useDispatch();
  const pathName = usePathname();
  return (
    <div>
      <details className="group">
        <summary
          className={`${
            pathName.startsWith(`/${path}/profile`)
              ? "text-gray-100 bg-blue-600 hover:bg-blue-500"
              : "text-gray-700 hover:bg-gray-100"
          } cursor-pointer flex items-center px-8 py-4  dark:text-gray-200 dark:bg-blue-500 dark:hover:bg-gray-700 `}
        >
          <span className="inline-block mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-5 h-5 group-"
              viewBox="0 0 16 16"
            >
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"></path>
            </svg>
          </span>
          <span> Profile</span>
          <span className="inline-block ml-auto sidenav-arrow">
            <svg
              className="w-3 h-3 group-"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-config-id="auto-svg-3-1"
            >
              <path
                d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </summary>
        <div className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu">
          <ul className="text-sm">
            <li>
              <Link
                onClick={() => {
                  dispatch(toggleProfileMenu());
                }}
                href={`/${path}/profile/account`}
                className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
              >
                <span className="text-gray-700 dark:text-gray-400 ">
                  Profile
                </span>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  dispatch(toggleProfileMenu());
                }}
                href={`/${path}/profile/bank`}
                className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
              >
                <span className="text-gray-700 dark:text-gray-400 ">Bank</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
              >
                <span className="text-gray-700 dark:text-gray-400 ">
                  Assets
                </span>
              </a>
            </li>
          </ul>
        </div>
      </details>
    </div>
  );
};

export default MenuProfile;
