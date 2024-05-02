import React from "react";
import img from "../assets/logo-black.svg";
import svg from "../assets/take-profit.webp";
import arrow from "../assets/arrow-top-right (1).webp";
import arrow2 from "../assets/stop-loss.webp";
import svg2 from "../assets/anti-mev.webp";
import svg3 from "../assets/anti-rug.webp";

const Ability = () => {
  return (
    <div
      id="ability"
      className="lg:pt-40 px-2 pt-20 max-w-7xl mb-20 mx-auto md:px-5 lg:px-16"
    >
      <h2 className="sora  text-white text-2xl sm:text-[26px] md:text-[32px] lg:text-[40px] xl:text-[47px] leading-[140%] max-w-[1160px]">
        <span className="inline-flex  items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 xl:py-2.5 bg-[#Fd523f] -translate-y-1">
          <img src={img} alt="" />
          <span className="text-sm md:text-base xl:text-lg font-semibold text-black">
            BitBullBot
          </span>
        </span>
        IS THE PIONEER BRC-20 ORDERBOOK TG-BASED DEX OFFERS TRADING, BRIDGING &
        STORING BRC-20 TOKEN FROM TELEGRAM
      </h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-12 sm:gap-y-10 gap-x-6 md:mt-10 w-fit mx-auto">
        <div className="w-full flex flex-col max-w-[450px]">
          <img src={svg} alt="" />
          <div className="mt-4 flex sora flex-col gap-3">
            <h1 className="text-white text-xl md:text-2xl">Bridging</h1>
            <p className="text-[#777] text-[17px]">
              Transfer assets from Binance/Solana/Ethereum to Ordinal Bitcoin
              Chain through Lightning Network
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#FD532f] px-11 py-3 mb-4 flex items-center justify-between text-black font-bold uppercase sora">
            <span className="text-sm">TRY BITBULLBOT</span>
            <img src={arrow} alt="" className="object-cover" />
          </div>
          <div className="w-full flex flex-col max-w-[450px]">
            <img src={svg2} alt="" />
            <div className="mt-4 flex sora flex-col gap-3">
              <h1 className="text-white text-xl md:text-2xl">Inscription</h1>
              <p className="text-[#777] text-[17px]">
                Create an inscription quickly through Telegram
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col max-w-[450px]">
          <img src={arrow2} alt="" />
          <div className="mt-4 flex sora flex-col gap-3">
            <h1 className="text-white text-xl md:text-2xl">Bridging</h1>
            <p className="text-[#777] text-[17px]">
              Transfer assets from Binance/Solana/Ethereum to Ordinal Bitcoin
              Chain through Lightning Network
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#FD532f] px-11 py-3 mb-4 flex items-center justify-between text-black font-bold uppercase sora">
            <span className="text-sm">SHARE IT
</span>
            <img src={arrow} alt="" className="object-cover" />
          </div>
          <div className="w-full flex flex-col max-w-[450px]">
            <img src={svg2} alt="" />
            <div className="mt-4 flex sora flex-col gap-3">
              <h1 className="text-white text-xl md:text-2xl">
                Revenue Sharing
              </h1>
              <p className="text-[#777] text-[17px]">
                $BBB will release a revenue-sharing mechanism that reinforces
                the value of holding tokens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ability;
