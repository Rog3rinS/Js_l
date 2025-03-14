
const color = ["Red", "Blue", "Yellow", "Purple", "Green"]
const btn = document.getElementById("btn")

// i dont know why but getElementByClassName didnt work very well
btn.addEventListener("click", function() {
	const randomColor = getRandomColor()
	document.body.style.background = color[randomColor]
	document.getElementById("color").innerText = color[randomColor]
})


function getRandomColor() {
	return Math.floor(Math.random() * color.length)
}

document.getElementById("color")
