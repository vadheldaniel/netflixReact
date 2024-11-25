import { useRef } from "react";
import SliderImg from "./SliderImg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import useFetch from "../hooks/useFetch";

function SliderBox({ movies }) {
  const scrollby = useRef();
  const movieurl =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const tvUrl = `https://api.themoviedb.org/3/account/21140243/rated/tv?language=en-US&page=1&sort_by=created_at.asc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTEwNmE5YWUzOTZhYWIyYTg1MTliOTE4YjNjZTU2YyIsIm5iZiI6MTczMjQ2NTI3Ni45MjgyMzM2LCJzdWIiOiI2NjAyYWY1NjQ1OWFkNjAxODdmYzA5NjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WvOw08juCvTm45e7YcOsqLZQDex_IWCGXGHfJFxTuvQ.L8G80D5BOV8Qeek0mV19JFekd9vLVnI4QiiKdV95zlE",
    },
  };
  // const url = movies? movieurl : tvUrl;
	// console.log(url);
	
  const { data, loading, error } = useFetch(movieurl, options);
  // const{ data, loading, error } = useFetch(movieurl, options);

  if (data && data.results) {
    const list = data.results.slice(0, 10); // Safely slice the results array
    console.log(list);

    return (
      <div className="sliderbox relative h-fit my-3 w-full  bg-black xl:px-36 sm:px-[60px] px-14 py-6 lg:bottom-[170px] bottom-[140px] ">
        <button
          className="text-white 
					hidden
					md:block
					left-[70px]
					bg-black p-4 absolute xl:left-[140px] lg:h-[225px] z-10 xl:mt-5 pointer opacity-65 lg:top-10
					h-48 top-8
					"
          onClick={() => {
            scrollby.current.scrollBy({
              left: -1400, // Width of one slider item
              behavior: "smooth",
            });
            console.log(scrollby.current.scrollLeft);
          }}
        >
          <div className=" hover:bg-slate-600 rounded-lg my-auto flex h-16 items-center">
            <IoIosArrowBack />
          </div>
        </button>
        <div
          className="slider  flex items-center overflow-x-scroll no-scrollbar overflow-y-hidden"
          ref={scrollby}
        >
          {list.map((item) => (
            <SliderImg backdrop={item.poster_path} />
          ))}
        </div>
        <button
          className="text-white 
				right-[70px]
				hidden
				md:block
				lg:top-7
				absolute bg-black p-4 xl:right-[140px] xl:top-10 lg:h-[225px] opacity-65
					h-48 top-8
				"
          onClick={() => {
            scrollby.current.scrollBy({
              left: 1400, // Width of one slider item
              behavior: "smooth",
            });
            console.log(scrollby.current.scrollLeft);
          }}
        >
          <div className=" hover:bg-slate-600 rounded-lg my-auto flex h-16 items-center">
            <IoIosArrowForward />
          </div>
        </button>
      </div>
    );
  }
}

export default SliderBox;
