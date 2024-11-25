
import pclogo from '../assets/pclogo.svg'

function ReasonCard({item}){

	return(
		<div className="xl:w-72 sm:h-64 p-5  bg-[linear-gradient(149deg,_#192247_0%,_#210e17_96.86%)] rounded-lg
		lg:w-[29rem] md:w-[25rem] w-fit
		">
		  <h1>{item.title}</h1>
			<p className='text-sm text-slate-400 text-wrap pt-6'>
				{item.description}
			</p>
			<div className='inline-block float-right pt-10'>
			 <img src={item.imageSrc} alt="img" />
			</div>
		</div>
	)
}

export default ReasonCard;

//background: linear-gradient(149deg, #192247 0%, #210e17 96.86%);