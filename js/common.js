
const element=document.querySelector('#foh');
if(element){
	element.addEventListener('submit', event=> {
		event.preventDefault();
			localStorage.setItem('isLoggedIn', 'True');
			window.location.href="account-e-services.html";
	});
}

const log=localStorage.getItem('isLoggedIn');
if(log){
	document.querySelector('.homeElement') ? document.querySelector('.homeElement').style.display="none":'';
	const elements=document.getElementsByClassName("hidd")
	for (ele of elements){
		ele.style.display="block";
	}
}


document.querySelector(".lo").addEventListener("click",LogOut);
function LogOut(){
	localStorage.clear();
	window.location.href="index.html";
	
}


window.onscroll = function() {myFunction()};

var header=document.getElementById("headid");
var sticky=header.offsetTop;

function myFunction() {
	if (window.pageYOffset>sticky){
		header.classList.add("sticky");	
	} 	else {
		header.classList.remove("sticky");
}
}



