var totaltuts = document.querySelectorAll(".tuts").length;

for (var i=0; i<totaltuts ; i++) {
	
	document.querySelectorAll(".tuts")[i].addEventListener("click", function() {


		var tombolpiano = this.innerHTML;
		bunyi(tombolpiano);
		TombolAnimasi(tombolpiano);
	});

}




 document.addEventListener("keypress", function(event) {
 	bunyi(event.key);
 	TombolAnimasi(event.key);
 });


 function bunyi(key) {

 	switch (key) {
 		case "q":
 		var tutsdo = new Audio('sound3/do.mp3');
 		tutsdo.play();
 		break;
 		case "w":
 		var tutsre = new Audio('sound3/re.mp3');
 		tutsre.play();
 		break;
 		case "e":
 		var tutsmi = new Audio('sound3/mi.mp3');
 		tutsmi.play();
 		break;
 		case "r":
 		var tutsfa = new Audio('sound3/fa.mp3');
 		tutsfa.play();
 		break;
 		case "u":
 		var tutssol = new Audio('sound3/sol.mp3');
 		tutssol.play();
 		break;
 		case "i":
 		var tutsla = new Audio('sound3/la.mp3');
 		tutsla.play();
 		break;
 		case "o":
 		var tutssi = new Audio('sound3/si.mp3');
 		tutssi.play();
 		break;
 		case "p":
 		var tutsdoti = new Audio('sound3/do.mp3');
 		tutsdoti.play();
 		break;
 	}
 }

  //TIDAK BISA MENGGUNAKAN ANGKA HARUS HURUF SAAT DI KLIK TIDAK BISA MANGGIL KEYYPRESS !
function TombolAnimasi(currentKey) {

	var activeButton = document.querySelector("."+currentKey);

	activeButton.classList.add("pressed");

	setTimeout(
 		function() {
 			activeButton.classList.remove("pressed")
 		},100
 		) ;

	
}
 

 /*function animasiTombol(currentKey) {

 	var tombolAktif=document.querySelector("."+currentKey);

 	tombolAktif.classList.add("pressed");

 	setTimeout(
 		function() {
 			tombolAktif.classList.remove("pressed")
 		}, 100
 		) ;
 }




/*document.querySelectorAll("button")[0].addEventListener("click",pencet);

function pencet() {
	var tutsdo = new Audio('sound/do.mp3');
	tutsdo.play();
}
document.querySelectorAll("button")[1].addEventListener("click",pencetre);

function pencetre() {
	var tutsre = new Audio('sound/re.mp3');
	tutsre.play();
}
document.querySelectorAll("button")[2].addEventListener("click",pencetmi);

function pencetmi() {
	var tutsmi = new Audio('sound/mi.mp3');
	tutsmi.play();
}
document.querySelectorAll("button")[3].addEventListener("click",pencetfa);

function pencetfa() {
	var tutsfa = new Audio('sound/fa.mp3');
	tutsfa.play();
}
document.querySelectorAll("button")[4].addEventListener("click",pencetsol);

function pencetsol() {
	var tutssol = new Audio('sound/sol.mp3');
	tutssol.play();
}
document.querySelectorAll("button")[5].addEventListener("click",pencetla);

function pencetla() {
	var tutsla = new Audio('sound/la.mp3');
	tutsla.play();
}
document.querySelectorAll("button")[6].addEventListener("click",pencetsi);

function pencetsi() {
	var tutssi = new Audio('sound/si.mp3');
	tutssi.play();
}
document.querySelectorAll("button")[7].addEventListener("click",pencetdoti);

function pencetdoti() {
	var tutsdoti = new Audio('sound/doti.mp3');
	tutsdoti.play();
}*/