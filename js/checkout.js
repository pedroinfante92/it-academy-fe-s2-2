
// Exercise 6
function validate() {
	var error = 0
	// Get the input fields
	var fName = document.getElementById("fName")
	var fEmail = document.getElementById("fEmail")
	var fAddress = document.getElementById("fAddress")
	var fLastN = document.getElementById("fLastN")
	var fPassword = document.getElementById("fPassword")
	var fPhone = document.getElementById("fPhone")

	// Get the error elements
	var errorName = document.getElementById("errorName")
	var errorEmail = document.getElementById("errorEmail")  
	var errorAddress = document.getElementById("errorAddress")  
	var errorLastN = document.getElementById("errorLastN")  
	var errorPassword = document.getElementById("errorPassword")
	var errorPassword = document.getElementById("errorPassword")
	
	// Validate fields entered by the user: name, phone, password, and email

	const onlyLetters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

	if(fName.value == "" || fName.value < 3 || /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(fName)){
		error++
	}

	if(fEmail.value == "" || fEmail.value < 3 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fEmail)){
		error++
	}

	if(fAddress.value == "" || fAddress.value < 3 || /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(fAddress)){
		error++
	}

	if(fLastN.value == "" || fLastN.value < 3 || /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(fLastN)){
		error++
	}

	if(fPassword.value == "" || fPassword.value < 3 || /(?=.*[a-zA-Z])(?=.*\d)/.test(fPassword)){
		error++
	}

	if(fPhone.value == "" || fPhone.value < 3 || /^\d+$/.test(fPhone)){
		error++
	}
	 
	if(error > 0){
		alert("Error")
	}else{
		alert("OK")
	}

}
