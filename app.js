document.addEventListener("keydown" , (action) =>{
	const mainDisplay = document.getElementById("mainDisplay");
	const displayCode = document.getElementById("displayCode");
	const displayKey = document.getElementById("displayKey");
	const displayWhich = document.getElementById("displayWhich");

	const keyDown = action.key;
	const keyCode = action.code;
	const keyWhich = action.which;

	mainDisplay.innerHTML = `${keyDown}`
	displayCode.innerHTML = `${keyCode}`
	displayKey.innerHTML = `${keyDown}`
	displayWhich.innerHTML = `${keyWhich}`
})

