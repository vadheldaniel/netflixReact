import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function MordernLanding() {
  return (
    <div className="main relative overflow-x-hidden">
      <div className="bg-cover ">
        <div className="relative h-[67rem]">
          <div className="bg-heropattern h-[67rem] opacity-15 bg-cover bg-center blur-lg absolute top-0 left-0 bottom-0 w-full"></div>
          <div className=" absolute top-0 left-0 bottom-0 h-full first-grade w-full"></div>
          <div className="absolute top-0 left-0 bottom-0 h-full second-grade w-full"></div>
        </div>
        <div className="box  absolute top-0 left-0 w-full">
          <div className="hero-container max-w-[120rem] w-full mx-auto">
            <div className="header-container ">
              <div className="header header-grade ">
                <header>
                  <div className="headerWraper flex justify-between items-center px-10 py-6 ">
                    <div className="logo w-40 ">
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
            <div className="img-container">
              <div className="p-[2px] border-grade w-[95%] rounded-2xl mx-auto shadow-2xl image-mask">
                <div className="img-box  h-[35rem] overflow-hidden rounded-2xl mx-auto  relative image-mask ">
                  <div className="absolute top-0 left-0 bottom-0 w-full h-full image-grade z-[1]"></div>
                  <div className="absolute top-0 left-0 bottom-0 w-full h-full bottom-grade z-10"></div>
                  <div className="img w-full animate-slide flex h-full bg-center ">
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/vlv3/dadb130d-463b-4e5b-b335-038ed912059e/web_auto_scroll/IN-en-20241118-TRIFECTA-0f09b523-5f99-4055-a5a2-ed2793845396_large.jpg"
                      alt=""
                    />
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/vlv3/dadb130d-463b-4e5b-b335-038ed912059e/web_auto_scroll/IN-en-20241118-TRIFECTA-0f09b523-5f99-4055-a5a2-ed2793845396_large.jpg"
                      alt=""
                    />
                  </div>
                  <div className=" text-white absolute  top-[60%] left-16 z-20">
                    <h1 className="text-6xl font-bold p-4">
                      Bring on ther drama
                    </h1>
                    <p className="text-xl font-semibold p-4">
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
          </div>
        </div>
        <div className="slider">
          
        </div>
      </div>
    </div>
  );
}

export default MordernLanding;

//background: rgba(249, 146, 151, 0.2);
