import Icon from "@/utils/icons";
import React from "react";
import Image from "next/image";
import solona from "@/assets/Images/SOLCoin.svg";
import convert from "../../../../utils/icons/convertnow.svg";
export const WithdrawTransactionModel = ({
  setisConverTransaction,
  isConverTransaction,
  activeCurrency,
}) => {
  console.log("activeCurrency", activeCurrency);
  return (
    <div>
      {/* Modal */}
      {!!isConverTransaction && (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 backdrop-blur-[20px] transition-opacity"
            aria-hidden="true"
            onClick={() => setisConverTransaction("")}
            style={{
              background:
                "linear-gradient(90deg, rgba(77, 137, 240, 0.2) 0%, rgba(145, 132, 234, 0.2) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
            }}
          ></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-[20px] bg-brand-blue-dark text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[825px] px-[40px] py-6">
                <div className=" flex items-center justify-end ">
                  <Icon
                    name="cross-icon"
                    onClick={() => setisConverTransaction("")}
                    mainClassName="cursor-pointer"
                    className="w-[30px] h-[30px]"
                  />
                </div>

                <div className=" bg-dark-blue flex items-center justify-between p-10 rounded-[20px] mt-5">
                  {isConverTransaction === "withdraw" ? (
                    <>
                      <h2 className="text-[48px] font-robot font-semibold text-brand-white-1 leading-[56px]">
                        10,000 i
                      </h2>
                      <Image src={convert} alt="covert now" />
                      <Image src={solona} alt="solona" />
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-center gap-4">
                        <Icon name="winr-icon" className="w-[50px]  w- h-11" />
                        <h2 className="font-Roboto font-black leading-[65px] text-base md:text-[47px] text-brand-white-1">
                          {activeCurrency?.balance?.winr}
                        </h2>
                      </div>
                      <Image src={convert} alt="covert now" />
                      <h2 className="text-[48px] font-robot font-semibold text-brand-white-1 leading-[56px]">
                        10,000 i
                      </h2>
                    </>
                  )}
                </div>

                <div className="w-3/4 flex flex-col gap-4 pl-2 my-3">
                  {activeCurrency?.transactionInfo?.status && (
                    <div>
                      <h3 className="font-Roboto text-paragraph leading-[30.46px] font-normal opacity-[70%] text-brand-white-1 py-2">
                        Status
                      </h3>
                      <p className="font-Roboto text-paragraph leading-[30.46px] font-normal text-brand-white-1">
                        {activeCurrency?.transactionInfo?.status}
                      </p>
                    </div>
                  )}
                  {activeCurrency?.transactionInfo?.date && (
                    <div>
                      <h3 className="font-Roboto text-paragraph leading-[30.46px] font-normal opacity-[70%] text-brand-white-1 py-2">
                        Date
                      </h3>
                      <p className="font-Roboto text-paragraph leading-[30.46px] font-normal  text-brand-white-1">
                        {activeCurrency?.transactionInfo?.date}
                      </p>
                    </div>
                  )}
                  {activeCurrency?.transactionInfo?.messageID && (
                    <div className="w-full">
                      <h3 className="font-Roboto text-paragraph leading-[30.46px] font-normal opacity-[70%] text-brand-white-1 py-2 ">
                        Message ID
                      </h3>
                      <p className="font-Roboto text-paragraph leading-[30.46px] font-normal text-brand-blue-dark-1 underline break-words">
                        {activeCurrency?.transactionInfo?.messageID}
                      </p>
                    </div>
                  )}
                  {activeCurrency?.transactionInfo?.recievingAddress && (
                    <div>
                      <h3 className="font-Roboto text-paragraph leading-[30.46px] font-normal opacity-[70%] text-brand-white-1 py-2">
                        Receive Address
                      </h3>
                      <p className="font-Roboto text-paragraph leading-[30.46px] font-normal text-brand-white py-2 break-words">
                        {activeCurrency?.transactionInfo?.recievingAddress}
                      </p>
                    </div>
                  )}
                  {activeCurrency?.transactionInfo?.amount && (
                    <div>
                      <h3 className="font-Roboto text-paragraph leading-[30.46px] font-normal opacity-[70%] text-brand-white py-2">
                        Amount
                      </h3>
                      <p className="font-Roboto text-paragraph leading-[30.46px] font-normal  text-brand-white">
                        {activeCurrency?.transactionInfo?.amount}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
