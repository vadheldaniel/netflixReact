import { useRef } from "react";
import SliderImg from "./SliderImg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SliderBox(){

 const scrollby=useRef();

	return(
		<div className="sliderbox relative h- w-full mt-12 bg-black px-36 py-6">
        <button 
					className="text-white  bg-black p-4 absolute left-48 h-[280px] z-10 mt-5 pointer opacity-65"
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
        <div className="slider  flex items-center overflow-x-scroll no-scrollbar " ref={scrollby} >
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
        <button className="text-white absolute bg-black p-4 right-48 top-10 h-[280px] opacity-65"
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