function validerFormPatient(){
	let titre=$('#titre').val();
	let duree=$('#duree').val();
	// À faire
}
function vider(elem){
	let theId="#"+elem;
    setTimeout(function(){ $(theId).html(""); }, 3000);
}