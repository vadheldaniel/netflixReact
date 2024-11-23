
import pclogo from '../assets/pclogo.svg'

function ReasonCard(){

	return(
		<div className="xl:w-72 h-64 p-5  bg-[linear-gradient(149deg,_#192247_0%,_#210e17_96.86%)] rounded-lg
		lg:w-[29rem] md:w-[20rem] w-fit
		">
		  <h1>Enjoy on your TV</h1>
			<p className='text-sm text-slate-400 text-wrap pt-6'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
			<div className='inline-block float-right pt-10'>
			 <img src={pclogo} alt="img" />
			</div>
		</div>
	)
}

export default ReasonCard;

//background: linear-gradient(149deg, #192247 0%, #210e17 96.86%);