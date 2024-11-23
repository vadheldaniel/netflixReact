
function SelectOption ({options,atribute}){
	return (
		<select name={atribute.name} id={atribute.id}
		className="text-white border-slate-400 border  px-2 py-1 otuline-white bg-transparent mx-3 rounded-sm"
		>
		<option value={options.opt1}
		className="text-black"
		>
			{options.opt1}
		</option>
		<option value={options.opt2}
		className="text-black"
		>
			{options.opt2}
		</option>
	</select>
	)
}

export default SelectOption;