
function SliderImg(){
  const img =
    "https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfBwZ-YU9X8UylQQT_4cu534F0_6N3CPIi3NKm3hK44xBpINr5BGZlK3pND8IAxbZy8GvEu0LyeBwxGFZP2roDFGYsHepG9DhrNvQW9FNA_6iPXf5zwgjXxpAgyEQiDKTYyYDs8rH0SzXiiVdhC0JZgNqXJgc9YKZA6uw_Pd7Xq2QJN0Y0PQ2xYlHiak8IVzQGd7Pu9Pxy15RHnAni1xw6XPreKX8Z6Ro9lWkdObMXhYdxtyZ7xx5vJmWDRWdM37vf-GlP09jCZh9c8puWF0CUH9hBE-7Kgi900P59cIZHIqSueIlzIfVn82OIXpdhOD_3GRit78yqdAiIfGUKJmwDY.webp?r=baa";

	return(
		<div className="sliderCard w-[236px] p-5">
		<div
			className=" rounded-lg  w-[197px]  h-[276px] "
			style={{ backgroundImage: `url(${img})` }}
		></div>

	</div>
	)
}

export default SliderImg;