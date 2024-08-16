// This keyword
function identify(){
	return this.name.toUppercase();
}

function speak(){
	var greeting = $`Hello, i am {identify.call(this)}`;
	return greeting;
}

var me = {
	'name': 'Victor'
};

var you = {
	'name': 'Joker'	
};

console.log(identify.call(me));