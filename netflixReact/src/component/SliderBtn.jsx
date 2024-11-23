
import { IoIosArrowBack } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";



export default function SliderBtn({id}){
	return(
		<div className={`${id} w-3 h-full`}>
			<button>{id=="leftbtn"?<IoIosArrowBack/>:<IoIosArrowForward/>}</button>
		</div>
	)
}