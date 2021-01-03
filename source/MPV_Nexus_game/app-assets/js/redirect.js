var checkbox = document.querySelector("input[name=radioa]");

checkbox.addEventListener('change', function() {

if(checkbox.value == "A" && checkbox.checked) {
	window.location.href = "http://localhost:8080/Magic/index.jsp";	
} else {console.log("select effettuata: "+checkbox.checked.value)}
if (checkbox.value == "B" && checkbox.checked) {
	window.location.href = "http://localhost:8080/Magic/indexB.jsp";	
} else {console.log("select effettuata: "+checkbox.checked.value)}
 if (checkbox.value == "C" && checkbox.checked) {
	window.location.href = "http://localhost:8080/Magic/indexC.jsp";	
} else {console.log("select effettuata: "+checkbox.checked.value)}
 if (checkbox.value == "D" && checkbox.checked) {
	window.location.href = "http://localhost:8080/Magic/indexD.jsp";	
} 
else { console.log("Errore su Redirect.");
}
});


