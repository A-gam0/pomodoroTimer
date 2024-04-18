


const bluePrints = [
{ // 0
	"1": [2,3,4],
	"2": [1,5],
	"3": [1,5],
	"4": [1,5],
	"5": [1,5],
	"6": [1,5],
	"7": [2,3,4]
},
{ // 1
	"1": [3],
	"2": [2,3],
	"3": [3],
	"4": [3],
	"5": [3],
	"6": [3],
	"7": [2,3,4]
},
{ // 2
	"1": [2,3,4],
	"2": [1,5],
	"3": [5],
	"4": [4],
	"5": [3],
	"6": [2],
	"7": [1,2,3,4,5]
},
{ // 3
	"1": [2,3,4],
	"2": [1,5],
	"3": [5],
	"4": [2,3,4],
	"5": [5],
	"6": [1,5],
	"7": [2,3,4]
},
{ // 4
	"1": [3,4],
	"2": [2,4],
	"3": [1,4],
	"4": [1,2,3,4,5],
	"5": [4],
	"6": [4],
	"7": [4]
},
{ // 5
	"1": [1,2,3,4,5],
	"2": [1],
	"3": [1,2,3,4],
	"4": [5],
	"5": [5],
	"6": [1,5],
	"7": [2,3,4]
},
{ // 6
	"1": [2,3,4],
	"2": [1,5],
	"3": [1],
	"4": [1,2,3,4],
	"5": [1,5],
	"6": [1,5],
	"7": [2,3,4]
},
{ // 7
	"1": [1,2,3,4,5],
	"2": [5],
	"3": [4],
	"4": [3],
	"5": [3],
	"6": [3],
	"7": [3]
},
{ // 8
	"1": [2,3,4],
	"2": [1,5],
	"3": [1,5],
	"4": [2,3,4],
	"5": [1,5],
	"6": [1,5],
	"7": [2,3,4]
},
{ // 9
	"1": [2,3,4],
	"2": [1,5],
	"3": [1,5],
	"4": [2,3,4,5],
	"5": [5],
	"6": [1,5],
	"7": [2,3,4]
}]

function getPairs(obj, screenContainer) {
	keys = Object.keys(obj);
	for (const yCoordinate of keys) {
		xCoordinates = obj[yCoordinate];
		// console.log(xCoordinates);
		for (const xCoordinate  of xCoordinates) {
			const id = (Number(yCoordinate) *  7) + xCoordinate + 1;
			// console.log(typeof id);
			// console.log(id);
			// console.log(`(${xCoordinate}, ${yCoordinate})`);
			const screen = screenContainer.querySelector('#screen' + id);
			// const screen = screenContainer.getElementById(id);
			// const screen = ()
			// console.log(cell)
			// setTimeout(function() {
				screen.classList.add('flip');
			// }, 10);
			setTimeout(function() {
				screen.classList.add('black');
			}, 100)
		}
	}
}

function clearScreens() {
	const allScreens = document.querySelectorAll('span');
	for (screen of allScreens) {
		if (screen.classList.contains('flip'));
		screen.classList.remove('flip', 'black');
	}
	console.log('cleared all screens')
}

// function changeNumber(id) {
// 	clearScreens();
// 	getPairs(bluePrints[id]);
// 	// console.log(id)
// }

const firstScreen = document.getElementById('first-screen-container');
const secondScreen = document.getElementById('second-screen-container');


let counter = 1;

function secondPassed() {
	const passed = document.querySelector('#screen' + counter);
	passed.classList.add('light');
	counter++;
}
// Function to print the current time
function printTime() {
  clearScreens();
  const now = new Date();
  // const hours = now.getHours().toString().padStart(2, '0');
  // const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  console.log(seconds);
  const splited = seconds.split("");
  console.log(firstScreen);
  console.log(secondScreen);
  getPairs(bluePrints[Number(splited[0])], firstScreen);  
  getPairs(bluePrints[Number(splited[1])], secondScreen);  
  secondPassed();

}

// Call the function immediately to print the time
printTime();

// Set up an interval to call the function every second
setInterval(printTime, 1000);
