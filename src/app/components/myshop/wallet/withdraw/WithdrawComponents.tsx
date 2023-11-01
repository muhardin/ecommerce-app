import FormattedPrice from "@/app/components/FormattedPrice";
import { formatDateAndTime } from "@/app/helpers";
import { CheckCheck, FileInput, FileOutput } from "lucide-react";
import { Wallet, Withdraw } from "../../../../../../type";

const WithdrawComponents = ({ items }: { items: Withdraw }) => {
  return (
    <>
      <div className="mt-2 overflow-hidden rounded-xl border shadow">
        <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead className="hidden border-b lg:table-header-group">
            <tr className="">
              <td
                width="50%"
                className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
              >
                Invoice
              </td>

              <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Date
              </td>

              <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Amount
              </td>

              <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Status
              </td>
            </tr>
          </thead>

          <tbody className="lg:border-gray-300">
            {items.map((item: Withdraw) => (
              <tr className="" key={item.id}>
                <td
                  width="50%"
                  className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                >
                  {item.bank_name}
                  <div className="mt-1 lg:hidden">
                    <p className="font-normal text-gray-500">
                      {formatDateAndTime(item.created_at)}
                    </p>
                  </div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  {formatDateAndTime(item.created_at)}
                </td>

                <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                  <FormattedPrice amount={item.amount} />
                  <div className="flex mt-1 ml-auto w-fit items-center rounded-full  py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                    {item.status === 2 ? (
                      <CheckCheck className="text-green-600" />
                    ) : (
                      <FileOutput className="text-green-600" />
                    )}
                  </div>
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                  <div className="inline-flex items-center text-white">
                    {item.status === 2 ? (
                      <CheckCheck className="text-green-600" />
                    ) : (
                      <FileOutput className="text-red-600" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WithdrawComponents;
