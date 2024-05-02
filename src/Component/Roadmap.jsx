import React, { useState } from "react";
import video from "../assets/roadmap.mp4";
import { NorthEast } from "@mui/icons-material";
import bear from "../assets/footer-bear.webp";

const Roadmap = () => {
  const [activeBox, setActiveBox] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const handleBoxClick = (section) => {
    setActiveBox((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <div
        id="roadmap"
        className="lg:pt-40 px-2 pt-20 max-w-7xl mb-20 mx-auto md:px-5 lg:px-16"
      >
        <div className="flex gap-5 items-start flex-col lg:flex-row">
          <div>
            <video
              src={video}
              className="w-full lg:min-w-[530px]"
              autoPlay
              loop
              controls
              muted
            ></video>
          </div>
          <div className="w-full flex flex-col gap-6">
            <h2 className="font-sora text-4xl sm:text-5xl xl:text-5xl text-white font-semibold text-center lg:text-start mb-2 lg:mb-0">
              <span className="text-[#FD532f]">$BBB</span> Roadmap
            </h2>
            <div className="flex flex-col gap-3 w-full">
              <div
                className={
                  activeBox.section1
                    ? "px-6 w-full sora bg-white text-black"
                    : "px-6 w-full sora border border-[#24232c]"
                }
              >
                <div className="flex items-center justify-between py-3">
                  <h3>Q4 - 2023</h3>
                  <button
                    className="w-12 h-12 text-[#666] border border-[#666] grid place-items-center rounded-full transition-transform duration-200 false"
                    onClick={() => handleBoxClick("section1")}
                  >
                    <NorthEast
                      className={activeBox.section1 ? "rotate-90" : "rotate-0"}
                    />
                  </button>
                </div>
                {activeBox.section1 && (
                  <ul
                    className={
                      activeBox.section1
                        ? "list-disc px-4 grid md:grid-cols-2 lg:grid-cols-2 gap-4 transition ease-in-out duration-1000 py-3 text-sm"
                        : ""
                    }
                  >
                    <li>Private Sale Round</li>
                    <li>Socials Formation</li>
                    <li>Smart Contract Development</li>
                    <li>Telegram Community</li>
                    <li>Website Development</li>
                    <li>BBB Bot Testing</li>
                    <li>Uniswap Stealth Launch</li>
                  </ul>
                )}
              </div>
              <div
                className={
                  activeBox.section2
                    ? "px-6 w-full sora bg-white text-black"
                    : "px-6 w-full sora border border-[#24232c]"
                }
              >
                <div className="flex items-center justify-between py-3">
                  <h3>Q1 - 2024</h3>
                  <button
                    className="w-12 h-12 text-[#666] border border-[#666] grid place-items-center rounded-full transition-transform duration-200 false"
                    onClick={() => handleBoxClick("section2")}
                  >
                    <NorthEast
                      className={activeBox.section2 ? "rotate-90" : "rotate-0"}
                    />
                  </button>
                </div>
                {activeBox.section2 && (
                  <ul
                    className={
                      activeBox.section2
                        ? "list-disc px-4 grid md:grid-cols-2 lg:grid-cols-2 gap-4 text-sm transition ease-in-out duration-1000 py-2"
                        : ""
                    }
                  >
                    <li>Coinmarketcap & Coingecko Listings</li>
                    <li>Revenue Sharing System Live</li>
                    <li>1000 Holders</li>
                    <li>Big Twitter Marketing Campaign</li>
                    <li>KOLs, Influencers Partnership</li>
                  </ul>
                )}
              </div>
              <div
                className={
                  activeBox.section3
                    ? "px-6 w-full sora bg-white text-black"
                    : "px-6 w-full sora border border-[#24232c]"
                }
              >
                <div className="flex items-center justify-between py-3">
                  <h3>Q2 - 2024</h3>
                  <button
                    className="w-12 h-12 text-[#666] border border-[#666] grid place-items-center rounded-full transition-transform duration-200 false"
                    onClick={() => handleBoxClick("section3")}
                  >
                    <NorthEast
                      className={activeBox.section3 ? "rotate-90" : "rotate-0"}
                    />
                  </button>
                </div>
                {activeBox.section3 && (
                  <ul
                    className={
                      activeBox.section3
                        ? "list-disc px-4 grid md:grid-cols-2 lg:grid-cols-2 gap-4 transition ease-in-out duration-1000 py-2 text-sm"
                        : ""
                    }
                  >
                    <li>OrdinalHUB for $BBB Holders</li>
                    <li>$BBB Staking</li>
                    <li>$BBB Marketplace</li>
                    <li>Airdrop for BBB Bot users</li>
                  </ul>
                )}
              </div>
              <div
                className={
                  activeBox.section4
                    ? "px-6 w-full sora bg-white text-black"
                    : "px-6 w-full sora border border-[#24232c]"
                }
              >
                <div className="flex items-center justify-between py-3">
                  <h3>Q3 - 2024</h3>
                  <button
                    className="w-12 h-12 text-[#666] border border-[#666] grid place-items-center rounded-full transition-transform duration-200 false"
                    onClick={() => handleBoxClick("section4")}
                  >
                    <NorthEast
                      className={activeBox.section4 ? "rotate-90" : "rotate-0"}
                    />
                  </button>
                </div>
                {activeBox.section4 && (
                  <ul
                    className={
                      activeBox.section4
                        ? "list-disc px-4 grid md:grid-cols-2 lg:grid-cols-2 gap-4 transition ease-in-out duration-1000 py-2 text-sm"
                        : ""
                    }
                  >
                    <li>BBB Bot Version 2</li>
                    <li>World Press</li>
                    <li>BBB on Windows, Mac OS</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative flex flex-col items-center mt-[50px] xl:mt-[80px]">
        <img src={bear} alt="" />
      </footer>
    </>
  );
};

export default Roadmap;
