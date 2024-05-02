import { useState } from "react";
import { CopyAll } from "@mui/icons-material";
import img from "../assets/img.png";

const AboutUs = () => {
  const [activeBox, setActiveBox] = useState(1);

  const handleBoxClick = (index) => {
    setActiveBox(index);
  };

  return (
    <div
      id="aboutus"
      className="lg:pt-40 pt-20 max-w-7xl mx-auto md:px-24 lg:px-16"
    >
      <div className="lg:flex justify-between lg:gap-60 bg-about-img">
        <div className="lg:flex-[1] md:flex md:flex-col md:justify-center md:items-center">
          <h1 className="lg:text-[50px] text-[36px] md:text-[45px] w-full sora lg:text-start text-center md:text-center font-semibold">
            Next level of <br />{" "}
            <span className="lg:text-[73px] text-[1.5em] md:text-[1.7em] text-[#FD532f] font-semibold">
              #crypto
            </span>
          </h1>
          <ul className="flex flex-col mt-10 gap-6 ml-7 lg:ml-7 text-[#999999]">
            <li className="list-disc">
              <p className="flex w-[95%] text-xl">
                Ordinal chain offers unique opportunities and assets, including
                ordinal inscriptions, but lacks native compatibility with
                Ethereum-based and other chain (SOL, BNB) assets. Users seeking
                to engage with both ecosystems face challenges due to the lack
                of a seamless, efficient bridge between the those chains.
                BitBullBot will help you with that!
              </p>
            </li>
            <li className="text-[15px] break-all">
              <CopyAll /> CA-0x9dc9D1c18060b45F3dc15fB8D6AB1895022C63B3
            </li>
          </ul>
        </div>
        <div className="lg:flex-[1] mt-5 mb-3">
          <h1 className="lg:text-[46px] text-[36px] md:text-[45px] sora lg:text-start text-center font-semibold">
            And{" "}
            <span className="lg:text-[73px] text-[1.3em] md:text-[1.4em] text-[#FD532f] font-semibold">
              #bot
            </span>{" "}
            <br /> product
          </h1>
          <ul className="flex flex-col mt-10 gap-6 ml-7 text-[#999999]">
            <li className="list-disc">
              Bridging assets from Ethereum/Solana/Binance to the Ordinal
              Bitcoin Chain
            </li>
            <li className="list-disc">
              Executing trades and transactions quickly and easily, directly
              from Telegram
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-32 px-5 sm:px-20 md:px-26 lg:px-56 xl:px-3 xl:ml-6 mb-10 flex flex-col xl:flex-row gap-2">
        <div
          className={`border border-[#26242C] lg:overflow-hidden sm:flex-row flex-col xl:flex-row ${
            activeBox === 1
              ? "xl:w-[60%] xl:scale-[1.03] xl:flex xl:items-center xl:justify-center"
              : "xl:max-w-[200px] transition-all ease-in-out duration-1000"
          } flex items-center cursor-pointer py-5 bg-[#FD532F] duration-300 gap-y-2 `}
          onClick={() => handleBoxClick(1)}
        >
          <div className="flex px-6">
            <div
              className={`w-10 h-10 rounded-full border-[#26242C] font-sora grid place-items-center transition-colors duration-300  ${
                activeBox === 1
                  ? "bg-black text-[#FD532f]"
                  : "border-none text-black bg-transparent"
              }`}
            >
              1
            </div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 `}
            ></div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 `}
            ></div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 `}
            ></div>
          </div>
          <div className="flex xl:flex-row sm:flex-row flex-col items-center text-black gap-3 sora">
            <span>Thicker</span>
            <span className="text-xl sm:text-2xl">$BBB</span>
          </div>
        </div>
        <div
          className={`border border-[#26242C] flex-col xl:flex-row sm:flex-row lg:overflow-hidden ${
            activeBox === 2
              ? "xl:w-[70%] xl:scale-[1.03] xl:flex xl:items-center xl:justify-center"
              : "xl:max-w-[200px]"
          } flex items-center cursor-pointer bg-[#FD532F] py-5 duration-300 gap-y-2 `}
          onClick={() => handleBoxClick(2)}
        >
          <div className="flex px-6">
            <div
              className={`w-10 h-10 rounded-full border-[#26242C] font-sora grid place-items-center transition-colors duration-300 border `}
            ></div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 ${
                activeBox === 2
                  ? "bg-black text-[#FD532f]"
                  : "xl:border-none xl:text-black xl:bg-transparent bg-black text-[#FD532f]"
              }`}
            >
              2
            </div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 `}
            ></div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 `}
            ></div>
          </div>
          <div className="flex flex-col xl:flex-row sm:flex-row items-center text-black gap-3 sora">
            <span>Total Supply</span>
            <span className="text-xl sm:text-2xl">100.000.000</span>
          </div>
        </div>
        <div
          className={`border border-[#26242C] lg:overflow-hidden sm:flex-row flex-col xl:flex-row ${
            activeBox === 3
              ? "xl:w-[70%] xl:scale-[1.03] xl:flex xl:items-center x;xl:justify-center"
              : "xl:max-w-[200px]"
          } flex items-center cursor-pointer bg-[#FD532F] py-5 duration-300 gap-y-2 `}
          onClick={() => handleBoxClick(3)}
        >
          <div className="flex px-6">
            <div
              className={`w-10 h-10 rounded-full border-[#26242C] border font-sora grid place-items-center transition-colors duration-300 `}
            ></div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 `}
            ></div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 ${
                activeBox === 3
                  ? "bg-black text-[#FD532f]"
                  : "xl:border-none xl:text-black xl:bg-transparent bg-black text-[#FD532f] "
              }`}
            >
              3
            </div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 `}
            ></div>
          </div>
          <div className="flex flex-col xl:flex-row items-center sm:flex-row text-black gap-3 sora">
            <span>Tax Buy/Sell</span>
            <span className="text-xl sm:text-2xl">5% / 5%</span>
          </div>
        </div>
        <div
          className={`border border-[#26242C] lg:overflow-hidden xl:flex-row sm:flex-row flex-col ${
            activeBox === 4
              ? "xl:w-[70%] xl:scale-[1.03] xl:flex xlitems-center xl:justify-center"
              : "xl:max-w-[200px]"
          } flex items-center cursor-pointer bg-[#FD532F] py-5 duration-300 gap-y-2 `}
          onClick={() => handleBoxClick(4)}
        >
          <div className="flex px-6">
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 `}
            ></div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 `}
            ></div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 `}
            ></div>
            <div
              className={`w-10 h-10 rounded-full border border-[#26242C] font-sora grid place-items-center transition-colors duration-300 ${
                activeBox === 4
                  ? "bg-black text-[#FD532f]"
                  : "xl:border-none xl:text-black xl:bg-transparent bg-black text-[#FD532f]"
              } `}
            >
              4
            </div>
          </div>
          <div className="flex flex-col xl:flex-row sm:flex-row items-center text-black gap-3 sora">
            <span>LP locked</span>
            <span className="text-xl sm:text-2xl">12 Months</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
