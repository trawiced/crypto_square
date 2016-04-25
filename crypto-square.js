//create our Crypto class
//it takes a string as an argument
var Crypto = function (text){
	//store the string for use elsewhere
	this.text = text;
	// this.normalizePlaintext = function() {
	// return this.text.replace (/[\W\s]/g, "").toLowerCase();
	// };
};

Crypto.prototype.normalizePlaintext = function () {
	return this.text.replace(/[\W\s]/g, "").toLowerCase();
};

Crypto.prototype.size = function () {
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length));
};

Crypto.prototype.plaintextSegments = function () {
	var text = this.normalizePlaintext(),
		size = this.size(),
		segs = [];

	for (var i =  0; i < text.length; i += size) {
		 segs.push(text.slice(i, i+size));
	};

	// return an array of plain text segments
	// that are size() characters in length
	return segs;
};

Crypto.prototype.ciphertext = function () {
	var ct 	 = "";
		size = this.size();
	 	segs = this.plaintextSegments();

	for (var i = 0; i < size; i += 1 ) {
		for (var j = 0; j < segs.length; j += 1) {
			ct += segs[j].charAt(i);
		}
	}

	// returns a string that represents
	// the encrypted message
	return ct;
};


module.exports = Crypto;