//import pygame

var noteArr = [
	'static/media/0C.ogg',
	'static/media/0Cs.ogg',
	'static/media/0D.ogg',
	'static/media/0Ds.ogg',
	'static/media/0E.ogg',
	'static/media/0F.ogg',
	'static/media/0Fs.ogg',
	'static/media/0G.ogg',
	'static/media/0Gs.ogg',
	'static/media/0A.ogg',
	'static/media/0As.ogg',
	'static/media/0B.ogg',
	'static/media/1C.ogg',
	'static/media/1Cs.ogg',
	'static/media/1D.ogg',
	'static/media/1Ds.ogg',
	'static/media/1E.ogg',
	'static/media/1F.ogg',
	'static/media/1Fs.ogg',
	'static/media/1G.ogg',
];

var letterArr = [
{'key': 'CapsLock', 
'file': ''},		//C
{'key': 'q', 				//(q and shift)
'file': ''},		//C sharp / D flat
{'key': 'a', 
'file': ''},		//D
{'key': 'w',  				//(w and z)
'file': ''},		//D sharp / E flat
{'key': 's', 				//(s and x)
'file': ''},		//E
{'key': 'e', 				//(e and d)
'file': ''},		//F
{'key': 'r', 				//(r and c)
'file': ''},		//F sharp / G flat
{'key': 'f', 
'file': ''},		//G
{'key': 't', 				//(t and v)
'file': ''},		//G sharp / A flat
{'key': 'g', 
'file': ''},		//A
{'key': 'y', 				//(y and b)
'file': ''},		//A sharp / B flat
{'key': 'h', 				//(h and n)
'file': ''},		//B
{'key': 'u', 				//(u and j)
'file': ''},		//C
{'key': 'i', 				//(i and m)
'file': ''},		//C sharp / D flat
{'key': 'k', 
'file': ''},		//D
{'key': 'o', 				//(o and ,)
'file': ''},		//D sharp / E flat
{'key': 'l', 				//(l and .)
'file': ''},		//E
{'key': ';', 				//(; and p)
'file': ''},		//F
{'key': '[', 				//([ and /])
'file': ''},		//F sharp / G flat
{'key': '\'', 
'file': ''},		//G
];

chosenIndex = document.getElementById('selection').value;
console.log(chosenIndex);
var startIndex = 0;


//Setting keys.
for(var i = 0; i < 20; i++)
{
	letterArr[i].file = noteArr[startIndex+i];
}


'use strict';
var audioElement = document.createElement('audio');
window.addEventListener('keydown', function (choice) {

	press = choice.key;
	console.log("press original assignment: " + press);
	console.log("press char code: " + press.charCodeAt(0));
	//ACCOUNTING FOR capitalization
	if (press.charCodeAt(0) > 64 && press.charCodeAt(0) < 91 && press!='CapsLock') //if a capital letter,
	{
		console.log("old press: " + press);
		press = String.fromCharCode(press.charCodeAt(0) + 32);
		console.log("new press: " + press);
	}
	//ACCOUNTING FOR (assigning) duplicates.
	switch(press)
	{
		case 'Shift':
			press = 'q';
			break;
		case 'z':
			press = 'w';
			break;
		case 'x':
			press = 's';
			break;
		case 'd':
			press = 'e';
			break;
		case 'c':
			press = 'r';
			break;
		case 'v':
			press = 't';
			break;
		case 'b':
			press = 'y';
			break;
		case 'n':
			press = 'h';
			break;
		case 'j':
			press = 'u';
			break;
		case 'm':
			press = 'i';
			break;
		case ',':
			press = 'o';
			break;
		case '.':
			press = 'l';
			break;
		case 'p':
			press = ';';
			break;
		case '/':
			press = '[';
			break;
	}
	for(var i = 0; i < letterArr.length; i++)
	{
		if (letterArr[i].key.localeCompare(press) == 0) //they match
		{
			audioElement.setAttribute('src', letterArr[i].file);
			break;
		}
		else
		{

		}

	}
	console.log("source: " + audioElement.src);
	audioElement.play();
}, false);

/*
window.addEventListener('keyup', function(){
	var release = window.value;
	audioElement.setAttribute('src', 'static/media/0A.ogg');
	audioElement.play();
}, false);
*/