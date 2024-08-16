var myObj = {
	get a() {
		return 2;
	}
};

myObj.defineProperty (

	myObj,
	"b",
	{	
		// define a getter for b
		get: function(){
			return this.a**2

		// shows up as an object property
		enumerable: true
		}
	}
)