// this is actually cool (in)
let pen = {
	itemName: "Pen",
	itemPrice: 3,
	itemAvailable: true,
	itemColor: "Red"
}
for (let i in pen)
	console.log(i, pen[i]);

// this is also cool (of)
let dudes = ["Marcos", "Joao", "Pedro"];
for (let i of dudes)
	console.log(i);

document.getElementById("text").innerText = "burger";

// how to create an object
const book = {
	bookTitle: "Atomic Habits",
	bookAuthor: "James Clear",
	printBook: function() {
		console.log("printing...");
	}
}

function createBook(title, author) {
	let book = {
		bookTitle: title,
		bookAuthor: author,
		printBook: function() {
			console.log("printing...");
		}
	}
	return book;
}

// you can add properties because js is dynamic no static
const book1 = createBook("Atomic", "James");
book1.color = "White";

//when using a constructor the first letter is Caps, while when using a factory we use small caps
function CreateCar(name, model) {
	this.carName = name;
	this.carModel = model;
}

const car1 = new CreateCar("Jorginho", "Jetta TSI");

console.log(book1);
console.log(car1);

//template literals
let firstname = "Jorginho"
const email = `hi ${firstname}
this is a test
i am just trying it out`

console.log(email);

const num = [2, 3, 8]

num.push(83, 23)
num.unshift(81, 0)

num.includes(2)

console.log(num);

const movies = [
	{ id: 1, movieName: "Dejavu" },
	{ id: 2, movieName: "The matrix" }
]

console.log(movies.find(function(movie) {
	if (movie.movieName == "The matrix") {
		return movie
	}
}))

// function(movie) {
//	   return movie.movieName == "The matrix"
// } what this is doing it giving a movie name and if movie.movieName == "The matrix" it returns True
// what find does is loop through until he finds a true

num.pop(2)

console.log(num);

// another way of declaring the function and method filter / every
const tempLondon = [18, 13, 8, 2]
const tempPositive = tempLondon.filter(function(value) {
	if (value >= 0) {
		return value;
	}
})

console.log(tempPositive);

// you just save a function in a variable, my guess is that under the hood the func is a pointer to somewhere in the stack that   starts the func
const car = function() {
	console.log("Tesla")
}
