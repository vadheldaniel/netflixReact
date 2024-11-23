import { useRef } from "react";
import SliderImg from "./SliderImg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SliderBox(){

 const scrollby=useRef();

	return(
		<div className="sliderbox relative h- w-full  bg-black xl:px-36 px-[60px] py-6 bottom-[170px]">
        <button 
					className="text-white 
					left-[70px]
					bg-black p-4 absolute xl:left-[140px] h-[280px] z-10 xl:mt-5 pointer opacity-65"
					onClick={()=>{
						scrollby.current.scrollBy({
							left: -1400, // Width of one slider item
							behavior: "smooth",
						});
						console.log(scrollby.current.scrollLeft);
						

					}}	
				>
					<div className=" hover:bg-slate-600 rounded-lg my-auto flex h-16 items-center">
					<IoIosArrowBack/>
					</div>
				</button>
        <div className="slider  flex items-center overflow-x-scroll no-scrollbar overflow-y-hidden" ref={scrollby} >
          <SliderImg/>
          <SliderImg/>
          <SliderImg/>
          <SliderImg/>
          <SliderImg/>
          <SliderImg/>
          <SliderImg/>
          <SliderImg/>
          <SliderImg/>
          <SliderImg/>
        </div>
        <button className="text-white 
				right-[70px]
				top-7
				absolute bg-black p-4 xl:right-[140px] xl:top-10 h-[280px] opacity-65"
          onClick={()=>{
						scrollby.current.scrollBy({
							left: 1400, // Width of one slider item
							behavior: "smooth",
						});
						console.log(scrollby.current.scrollLeft);
						
					}}	
        >
					<div className=" hover:bg-slate-600 rounded-lg my-auto flex h-16 items-center">

					<IoIosArrowForward/>
					</div>
					
					</button>
      </div>
	)
}

export default SliderBox;