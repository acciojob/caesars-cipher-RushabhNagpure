// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
	const A = 'A'.charCodeAt();
	const Z = 'Z'.charCodeAt();
	const shift = 13;
	
  let decodedArr = [];// Your Result goes here
	for (let index = 0; index < encodedStr.length; index++) {
		const char = encodedStr[index];
		const charCode = char.charCodeAt();

		if (charCode >= A && charCode <= Z) {
			let decodedCharCode = charCode - shift;
			if (decodedCharCode < A) {
				decodedCharCode += 26;
			}
			decodedArr += String.fromCharCode(decodedCharCode);
		}	else {
				decodedArr += char;
			}
		}
	
  // Only change code below this line

  return decodedArr; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
