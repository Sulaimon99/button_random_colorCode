const bodyBcg = document.querySelector('body');
const colorbtn = document.querySelector('.hexbtn');
const hexnumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hex = document.querySelector('.hex');


colorbtn.addEventListener('click',gethex);

function gethex() {
		let hexcol = '#';
		for (let i=0; i<6; i++){
		let random = Math.floor(Math.random()*hexnumbers.length);
		hexcol +=hexnumbers[random];
	}


	bodyBcg.style.backgroundColor = hexcol;
	hex.innerHTML = hexcol;


}