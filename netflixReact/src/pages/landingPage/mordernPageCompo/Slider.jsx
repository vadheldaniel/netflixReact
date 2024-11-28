import React from "react";
import SliderImg from "../pageCompo/SliderImg";

function Slider() {
  return (
    <div className="slider-main mt-5">
      <div className="slider w-full px-36">
        <div className="title text-3xl font-bold  p-1 text-white ">
          <span>Tranding Now</span>
        </div>
        <div className="slider-box overflow-x-scroll no-scrollbar my-3 h-full flex ">
        
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
						<SliderImg/>
						<SliderImg/>
						<SliderImg/>
						<SliderImg/>
  
        </div>
      </div>
    </div>
  );
}

export default Slider;
