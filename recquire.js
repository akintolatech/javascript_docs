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