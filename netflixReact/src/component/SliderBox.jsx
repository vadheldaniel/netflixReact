import { useRef } from "react";
import SliderImg from "./SliderImg";


function SliderBox(){

 const scrollby=useRef();

	return(
		<div className="sliderbox relative h- w-full mt-12 bg-black px-48 py-5">
        <button 
					className="text-white  bg-red-400 p-4 absolute left-48 h-[280px] z-10 mt-5"
					onClick={()=>{
						scrollby.current.scrollBy({
							left: -1400, // Width of one slider item
							behavior: "smooth",
						});
					}}	
				>
						lft
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
        <button className="text-white absolute bg-red-400 p-4  right-48 top-10 h-[280px]"
          onClick={()=>{
						scrollby.current.scrollBy({
							left: 1400, // Width of one slider item
							behavior: "smooth",
						});
					}}	
        >right</button>
      </div>
	)
}

export default SliderBox;