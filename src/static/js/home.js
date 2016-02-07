//SETS UP ORDER OF CHARACTERS
var letterArr = [
{'key': 'CapsLock', //for instance, in the key of C, this would be C
'note': ''},		
{'key': 'q', 				//(q and shift, both)
'note': ''},		//in the key of C, these would be C sharp / D flat
{'key': 'a', 
'note': ''},		//D
{'key': 'w',  				//(w and z)
'note': ''},		//D sharp / E flat
{'key': 's', 				//(s and x)
'note': ''},		//E
{'key': 'e', 				//(e and d)
'note': ''},		//F
{'key': 'r', 				//(r and c)
'note': ''},		//F sharp / G flat
{'key': 'f', 
'note': ''},		//G
{'key': 't', 				//(t and v)
'note': ''},		//G sharp / A flat
{'key': 'g', 
'note': ''},		//A
{'key': 'y', 				//(y and b)
'note': ''},		//A sharp / B flat
{'key': 'h', 				//(h and n)
'note': ''},		//B
{'key': 'u', 				//(u and j)
'note': ''},		//C
{'key': 'i', 				//(i and m)
'note': ''},		//C sharp / D flat
{'key': 'k', 
'note': ''},		//D
{'key': 'o', 				//(o and ,)
'note': ''},		//D sharp / E flat
{'key': 'l', 				//(l and .)
'note': ''},		//E
{'key': ';', 				//(; and p)
'note': ''},		//F
{'key': '[', 				//([ and /])
'note': ''},		//F sharp / G flat
{'key': '\'', 
'note': ''},		//G
];

function setKey()
{
	var startNote = 'C4';
	startNote = document.getElementById('selection').value;
	console.log("Start note: " + startNote);

	letterArr[0].note = startNote;
	//Setting keys.
	for(var i = 1; i < 20; i++)
	{
		letterArr[i].note = nextNote(letterArr[i-1].note);
	}
}
var AUD = new Wad({source : 'sine'});
window.addEventListener('keydown', function (choice) {
	/*var bell = new Wad({source : 'static/media/0C.ogg'})
	bell.play()
	bell.stop() */
	console.log("key down.");

	press = synthInput(choice.key);
	console.log("press: " + press);

	var noteVal = "";
	for(var i = 0; i < letterArr.length; i++)
	{
		if (letterArr[i].key.localeCompare(press) == 0) //they match
		{
			noteVal = letterArr[i].note;
			break;
		}
		else
		{

		}
	}
	console.log("noteVal: " + noteVal);

	AUD.play({
	    volume  : 0.8,
	    wait    : 0,     // Time in seconds between calling play() and actually triggering the note.
	    loop    : false, // This overrides the value for loop on the constructor, if it was set. 
	    pitch   : noteVal,  // A4 is 440 hertz.
	    label   : noteVal,   // A label that identifies this note.
	    env     : {hold : 9001},
	    panning : [1, -1, 10],
	    filter  : {frequency : 900},
	    delay   : {delayTime : .8}
	});



	window.addEventListener('keyup', function(){
		console.log("key up.");
		AUD.stop(noteVal);
	}, false);

}, false);

function nextNote(currentNote)
{
	var noteCode = currentNote.charCodeAt(0);
	var accidental;
	var octaveCode;
	if (currentNote.indexOf('#')==-1) //If -1, means false. no accidental
	{
		accidental = '';
		octaveCode = currentNote.charCodeAt(1);
	}
	else
	{
		accidental = '#';
		octaveCode = currentNote.charCodeAt(2);
	}

	if (noteCode == 67 && octaveCode==56) //C8 is highest possible note
	{

	}
	else if (accidental.localeCompare('#')!=0)//Don't match. It's not an accidental,
	{
		if (noteCode==66 || noteCode==69) //If it's B or E,
		{
			noteCode++;
		}
		else
		{
			accidental='#';
		}
	}
	else //It is an accidental
	{
		accidental='';
		if (noteCode==71) //G#
		{
			noteCode = 65;
			octaveCode++;
		}
		else
		{
			noteCode++;
		}
	}

	var noteName = String.fromCharCode(noteCode) + accidental + String.fromCharCode(octaveCode);
	return noteName;
}

function synthInput(press)
{
	console.log("press original assignment: " + press);
	console.log("press char code: " + press.charCodeAt(0));
	//ACCOUNTING FOR capitalization
	if (press.charCodeAt(0) > 64 && press.charCodeAt(0) < 91 && press!='CapsLock') //if a capital letter,
	{
		press = String.fromCharCode(press.charCodeAt(0) + 32);
	}
	console.log("press before switch: " + press);
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
	console.log("press after switch: " + press);
	return press;
}

/*
function prevNote(currentNote)
{
	var noteCode = currentNote.charCodeAt(0);
	var accidental;
	var octaveCode;
	if (currentNote.indexOf('#')==-1) //If -1, means false.
	{
		accidental = '';
		octaveCode = currentNote.charCodeAt(1);
	}
	else
	{
		accidental = '#';
		octaveCode = currentNote.charCodeAt(2);
	}

	if (noteCode == 65 && octaveCode==48) //A0 is lowest possible note
	{

	}
	else if (accidental.localeCompare('#')!=0)//Don't match. It's not an accidental,
	{
		if (noteCode == (67 || 70)) //If it's C or F,
		{
			noteCode--;
		}
		else
		{
			accidental='#';
			if (noteCode==65) //A
			{
				noteCode = 71;
				octaveCode--;
			}
			else
			{
				noteCode--;
			}
		}
	}
	else //It is an accidental
	{
		accidental='';
		noteCode--;
	}

	var noteName = String.fromCharCode(noteCode) + accidental + String.fromCharCode(noteCode);
	return noteName;
}*/