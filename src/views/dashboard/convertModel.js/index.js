import Icon from "@/utils/icons";
import React from "react";
import ConvertNow from "./convertNow";
import Withdraw from "./withdraw/withdraw";
export const ConvertModel = ({
  isOpenModel,
  setisOpenModel,
  activeCurrency,
  setOpenWithdrawInfo,
  setisConverTransaction,
}) => {
  // Function to toggle modal open/close
  const toggleModal = () => setisOpenModel("");

  return (
    <div>
      {/* Modal */}
      {!!isOpenModel && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* <div
            className="fixed inset-0 bg-transparent bg-opacity-75 transition-opacity"
            aria-hidden="true"
            onClick={toggleModal} // Close modal when clicking outside
          ></div> */}

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-[20px] bg-brand-blue-dark text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[1242px] p-[30px]">
                <div className="w-full flex justify-between mb-3">
                  <h2 className="font-Roboto text-brand-white-1 text-base md:text-small-heading font-black leading-7">
                    {isOpenModel === "convert" ? "Convert Now" : "Withdraw"}
                  </h2>
                  <Icon
                    name="cross-icon"
                    onClick={toggleModal}
                    mainClassName="cursor-pointer"
                    className="w-[30px] h-[30px]"
                  />
                </div>
                {isOpenModel === "convert" && (
                  <ConvertNow activeCurrency={activeCurrency} />
                )}
                {isOpenModel === "withdraw" && (
                  <Withdraw
                    activeCurrency={activeCurrency}
                    setOpenWithdrawInfo={setOpenWithdrawInfo}
                  />
                )}

                <button
                  onClick={() => setisConverTransaction(isOpenModel)}
                  className="w-full font-Roboto bg-main-gradient font-black leading-7 text-base md:text-[26px] text-brand-white-1 py-5 rounded-2xl"
                >
                  {isOpenModel === "convert" ? "Convert" : "Withdraw"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
