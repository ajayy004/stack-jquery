Array.prototype.contains = function(element){
	return this.indexOf(element) > -1;
}

Array.prototype.remove = function(index){
	return this.splice(index, 1);
}

var primitives = ["number", "string", "object", "boolean", "function"];

var  Stack = function(type){
	if(arguments.length != 1)
		throw new Error("There is no constructor that takes "+ arguments.length + " arguments");

	if(primitives.contains(type))
		this.isPrimitive = true;
	else if(typeof type == "function")
		this.isPrimitive = false;
	else
		throw new Error("Invalid Type");

	this.type = type;
	this.array = new Array();
	this.length = this.array.length;
	return this;
}

Stack.prototype.constructor = Stack;

Stack.prototype.push = function(){
	var isValid;

	for(var i = 0, j = arguments.length; i < j; i++){
		isValid = this.isPrimitive ? (this.type.toLowerCase() == typeof arguments[i]) : (arguments[i] instanceof this.type);

		if(!isValid)
		throw new Error("Invalid Argument");
	}
	
	for(var i = 0, j = arguments.length; i < j; i++){
		this.array.push(arguments[i]);
	}

	this.length = this.array.length;
	return this.array.length;
}

Stack.prototype.pop = function(){
	this.array.pop();
	this.length = this.array.length;
	return this.array.length;
}

Stack.prototype.getValue = function(index){
	return this.array[index];
}

Stack.prototype.setValue = function(index, value){
	var isValid = this.isPrimitive ? (this.type.toLowerCase() == typeof value) : (value instanceof this.type);

	if(!isValid)
		throw new Error("Invalid Argument");

	this.array[index] = value;
	return this.array[index];
}