import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import FooterList from "./pageCompo/FooterList";
import Slider from "./mordernPageCompo/Slider";
import ReasonCard from "./mordernPageCompo/ReasonCard";
import Faq from "./mordernPageCompo/Faq";

function MordernLanding() {
  return (
    <div className="main relative overflow-x-hidden">
      <div className="bg-cover h-screen">
        <div className="relative h-100%">
          <div className="bg-heropattern h-[67rem] opacity-35 bg-cover bg-center blur-lg absolute top-0 left-0 bottom-0 w-full"></div>
          <div className=" absolute top-0 left-0 bottom-0 h-full first-grade w-full"></div>
          <div className="absolute top-0 left-0 bottom-0 h-full second-grade w-full"></div>
        </div>

        <div className="box  absolute top-0 left-0 w-full ">
          <div className="max-w-[120rem] w-full mx-auto">
            {/* header-secton */}

            <div className="header-container ">
              <div className="header header-grade ">
                <header>
                  <div className="headerWraper flex justify-between items-center px-10 py-6 ">
                    <div className="logo xl:w-40 w-20">
                      <img src="src/assets/logo.svg" alt="" />
                    </div>
                    <div className="btns w-2/3  flex justify-end">
                      <div className="flex items-center gap-4">
                        <div className="opt rounded-3xl border border-slate-600 px-2">
                          <select
                            name=""
                            id="lang"
                            className="bg-transparent	text-white outline-none p-1 sm:px-4  "
                          >
                            <option value="eng" className="text-black">
                              English
                            </option>
                            <option value="hindi" className="text-black">
                              हिन्दी
                            </option>
                          </select>
                        </div>
                        <div className="signin">
                          <button className=" outline-none bg-white text-sm py-2 rounded-3xl font-semibold px-6">
                            Sign In
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>

            {/* hero-section */}

            <div className="img-container">
              <div className="p-[2px] border-grade w-[95%] rounded-2xl mx-auto shadow-2xl image-mask">
                <div className="img-box  md:h-[35rem] h-[20rem] overflow-hidden rounded-2xl mx-auto bg-cover relative image-mask ">
                  <div className="absolute top-0 left-0 bottom-0 w-full h-full image-grade z-[1]"></div>
                  <div className="absolute top-0 left-0 bottom-0 w-full h-full bottom-grade z-10"></div>
                  <div className="img w-full animate-slide flex h-full bg-center ">
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/vlv3/dadb130d-463b-4e5b-b335-038ed912059e/web_auto_scroll/IN-en-20241118-TRIFECTA-0f09b523-5f99-4055-a5a2-ed2793845396_large.jpg"
                      alt=""
                      className="max-w-max"
                    />
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/vlv3/dadb130d-463b-4e5b-b335-038ed912059e/web_auto_scroll/IN-en-20241118-TRIFECTA-0f09b523-5f99-4055-a5a2-ed2793845396_large.jpg"
                      alt=""
                      className="max-w-max"
                    />
                  </div>
                  <div className=" text-white absolute  md:top-[60%]  top-[50%] left-16 z-20">
                    <h1 className="md:text-6xl text-3xl font-bold md:p-4 p-1">
                      Bring on ther drama
                    </h1>
                    <p className="md:text-xl text-md font-semibold ">
                      Dramas for any mood,from the riveting to ther heartfetlt
                      to those bassed on real life.
                    </p>
                  </div>
                </div>
              </div>
              <div className="input text-slate-200">
                <form className="text-wrap text-center">
                  <label htmlFor="email" className="block">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </label>
                  <input
                    name="email"
                    type="email"
                    className=" p-3 m-4 border rounded-full w-[400px] bg-[rgba(100,200,200,0.1)]"
                    placeholder="Email address"
                  />
                  <button className="bg-[#c11119] rounded-full py-3 px-6 font-semibold">
                    get Started
                    <span className="inline-block pt-1">
                      <IoIosArrowForward />
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* slider-one */}

            <Slider />

            {/* slider-tw0*/}

            <Slider />

            {/* reson-section */}

            <div className="reason  mt-10 text-white">
              <div className="">
                <div className="reson-sontainer h-full w-[80%] mx-auto">
                  <div className="title text-2xl font-semibold">
                    <h1>More Reasons</h1>
                  </div>

                  {/* resoan cards */}

                  <div className="cards flex items-center gap-4">
                    <ReasonCard />
                    <ReasonCard />
                    <ReasonCard />
                    <ReasonCard />
                  </div>
                </div>
              </div>
            </div>

            {/* quitions and anrs */}

            <Faq/>            

            {/* getstartedbtn */}

            <div>
              <div className="  text-white">
                <div className="w-1/2 text-center mx-auto p-4">
                  <div className="bt  ">
                    <button className="px-8 hover:bg-red-700 py-2 bg-red-600 rounded-3xl font-semibold text-lg">
                      getstarted
                    </button>
                  </div>
                  <div className="text p-4">
                    <span>Create or restart membership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* footer */}

            <div className="footer mt-5">
              <div className="footer-container w-full px-36">
                <footer className="text-slate-300">
                  <p className="text-xl font-semibold">
                    Questions? Call 000-800-919-1694
                  </p>
                  <FooterList />
                  <div className="text-center text-xl font-semibold text-red-600 h-96 flex flex-col justify-center">
                    madeByMe&#x2665;&#xfe0f;
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MordernLanding;
