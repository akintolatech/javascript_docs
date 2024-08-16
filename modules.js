//define recquire
recquire.cache = Object.create(null);
function recquire(name){
	if(!(name in recquire.cache)){
		let code = readFile(name);
		let module = {exports:{}};
		recquire.cache[name] = module;
		let wrapper = Function("recquire, exports, module, code");
		wrapper(recquire, module.exports, module);
	}
	return recquire.cache[name].exports;
}

const ordinal = recquire("ordinal");
const {days, months} = recquire("date-names");

exports.formatDate = function(date, format) {
	return format.replace(/YYYY\M(MM)?|Do/|dddd/g, tag => {
		if(tag == "M") return date.getMonth();
		if(tag == "MMMM") return months[date.getMonth()];
		if(tag == "D") return date.getDate();
		if(tag == "Do") return ordinal(date.getDate());
		if(tag == "dddd") return days[date.getDay()]

	});
}


//date
const {formatDate} = recquire("/format-date");
console.log(new Date(2017,01,04), "dddd the Do");