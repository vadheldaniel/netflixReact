import logo from "../assets/logo.svg";
import FooterList from "../component/FooterList";
import Inputfirst from "../component/Inputfirst";
import Questions from "../component/Quetions";
import ReasonCard from "../component/ReasonCard";
import SelectOption from "../component/SelectOption";
import SliderBox from "../component/SliderBox";

function LandingPage() {
  const dynamicImageUrl = `https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg`;

  return (
    <>
      <div
        className="h-[760px]  relative"
        style={{ backgroundImage: `url(${dynamicImageUrl})` }}
      >
        <div className="bg-[radial-gradient(circle,_rgba(0,0,0,0)_-30%,_rgba(0,0,0,0.8)_80%)] absolute h-full w-full top-0  "></div>
        <header className="header relative">
          <img
            src={logo}
            alt=""
            className="w-28 h-20 absolute top-2 left-32 z-[1]"
          />
          <div className="flex gap-4 absolute z-[1] right-32 top-8">
            <div className="opt rounded-lg border border-slate-200  px-2">
              <select
                name=""
                id="lang"
                className="bg-transparent
												text-white
												outline-none
											 p-1 px-4 rounded-lg "
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
              <button
                className="
							 outline-none bg-[#c11119] text-sm py-2 rounded-sm px-4 text-white"
              >
                Sign In
              </button>
            </div>
          </div>
        </header>
        <div className="center absolute w-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white">
          <h1 className="text-6xl  text-wrap font-extrabold ">
            Unlimited movies, TV shows and more
            <br />
          </h1>
          <h2 className=" mt-5 text-center text-xl font-bold">
            Starts at ₹149. Cancel at any time.
          </h2>
          <div className="input mt-9">
            <Inputfirst />
          </div>
        </div>
      </div>
      {/* curve divs */}
      <div className="h-24  text-white w-full curvey relative bottom-[65px] bg-red-500 ">
        <div className="curve h-24 "></div>
      </div>
      <div className="tranding  font-semibold h-[100px] px-36 relative bottom-[120px] z-[1] w-full">
        <h2 className=" text-white text-2xl mb-2 ml-3">Trending Now</h2>
        <SelectOption
          options={{ opt1: "india", opt2: "global" }}
          atribute={{ name: "countrie", id: "countrie" }}
        />
        <SelectOption
          options={{ opt1: "movies", opt2: "tvshows" }}
          atribute={{ name: "generes", id: "generes" }}
        />
      </div>

      <SliderBox />
      <div className="reason xl:px-36 px-[60px] bg-black text-white text-2xl font-semibold relative bottom-[170px]">
        <h1>More reasons to join</h1>
        <div className="cards flex items-center gap-2 p-4 flex-wrap box-border justify-center">
          <ReasonCard />
          <ReasonCard />
          <ReasonCard />
          <ReasonCard />
        </div>
      </div>

      <div className="relative bottom-[170px] bg-black px-36">
       <Questions/>
        <div className="py-20 text-white text-center">
        <Inputfirst/>
        </div>

          <footer className="text-slate-300">
             <p className="text-xl font-semibold">Questions? Call 000-800-919-1694</p>
             <FooterList/>

             <div className="text-center text-xl font-semibold text-red-600 h-[300px] flex 
 flex-col justify-center
">madeByMe&#x2665;&#xfe0f;</div>
          </footer>
      </div>
    </>
  );
}

export default LandingPage;
