import React from 'react'

function ReasonCard() {
	return (
		<div className="card w-80 h-40 p-5 my-10 bg-[rgba(255,255,255,0.1)] rounded-2xl border-[rgba(255,255,255,0.2)] border">
		<div className="heading text-lg font-medium h-1/2">
			<span>Stories tailored to your taste</span>
		</div>
		<div className="img float-right">
			<img src="src/assets/hand.svg" alt="hand" />
		</div>
	</div>
	)
}

export default ReasonCard