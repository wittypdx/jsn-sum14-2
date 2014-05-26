var array = {length: 4};

/*array.language="French";

array.feeling="love";

array.food="croissants"

array.puctation="!!!";*/

/*array.length = function(){
   var lengthArray = (Object.keys(this)); 
   return lengthArray.length;
}*/

array.pop = function() {
   var popArray = (Object.getOwnPropertyNames(this));
   var propToDelete = popArray[(popArray.length)-1]
   delete this[propToDelete];
   this.length-=1
   return console.log(array);
}

array.push = function(something) {
    if (typeof(something) !== "string")
        return console.log("error: inputs must be strings");
	this[something] = something;
    this.length+=1
    return console.log(array);
}

array.join = function(spacing) {
	var string = this[0];
    for (var counter = 1; counter < this.length; counter ++) {
        string += spacing + this[counter];
    }
    return console.log(string);
};


