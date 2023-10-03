
var LEFT = 'Л';
var RIGHT = 'П';
var BOTH = 'О';

var alphabet = [
	'A', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И',
	'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т',
	'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я'
];

function generateAlphabet ()
{
	var l = alphabet.length;
	var moves = new Array(l);
	var coeffs = new Array(l);
	var letters = new Array(l);
	var letterIndeces = new Array(l);
	
	for (var i = 0; i < l; i++)
		coeffs[letterIndeces[i] = i] = Math.random();

	function swap(a, i1, i2) {
		var t = a[i1]; a[i1] = a[i2]; a[i2] = t;
	}

	for (var i = l - 1; i > 1; i--)
		for (var j = 0; j < i; j++)
			if (coeffs[j] > coeffs[j + 1])
			{
				swap(coeffs, j, j + 1);
				swap(letterIndeces, j, j + 1);
			}

	for (var i = 0; i < l; i++)
		switch (letters[i] = alphabet[letterIndeces[i]])
		{
		case BOTH: moves[i] = BOTH; continue;
		case LEFT: moves[i] = RIGHT; continue;
		case RIGHT: moves[i] = LEFT; continue;
		}
	
	var counts = {};
	counts[LEFT] = counts[RIGHT] = counts[BOTH] = 0;
	
	for (var i = 0; i < l; i++)
	{
		if (moves[i]) continue;
		var cand, rand = Math.random();
		if (rand < 0.333) cand = LEFT;
		else if (rand < 0.666) cand = BOTH;
		else cand = RIGHT;
		
		if (moves[i - 1] == cand && (moves[i + 1] == cand || moves[i - 2] == cand))
			switch (cand)
			{
			case BOTH: cand = (counts[LEFT] > counts[RIGHT]) ? RIGHT : LEFT; break;
			case LEFT: cand = (counts[RIGHT] > counts[BOTH]) ? BOTH : RIGHT; break;
			case RIGHT:cand = (counts[BOTH] > counts[LEFT]) ? LEFT : BOTH; break;
			}

		counts[cand] = counts[cand] + 1;
		moves[i] = cand;			
	}
	
	return [letters, moves];
}

var continium;
var letterIndex = alphabet.length;
var delay = 1000;

var pauseButton = document.getElementById('pauseButton');
pauseButton.addEventListener('click', () => {
    wg = document.getElementById('workGround');
    wg.classList.toggle('active');
    if (wg.classList.contains('active')) {
        pauseButton.textContent = 'Cтоп'
        pauseButton.style.background = '#ff002b'

    } else {
        pauseButton.textContent = 'Старт'
        pauseButton.style.background = '#49b40a'
    }
    
})

function nextLetter() {
    
	if (letterIndex == alphabet.length)
	{	
		continium = generateAlphabet();
		letterIndex = 0;
	}
	var wg = document.getElementById('workGround');
	var screen = document.getElementById('screen');
  
    wg.style.visibility = 'hidden'; 
    var dw = screen.clientWidth;
    var dh = screen.clientHeight;
    if (dh < 50) dh = document.body.clientHeight;
    wg.style.left = Math.ceil(Math.random() * (dw - 100)) + 'px';
    wg.style.top = Math.ceil(Math.random() * (dh - 250)) + 40 + 'px';
    document.getElementById('voiceLetter').innerHTML = continium[0][letterIndex];
    document.getElementById('moveLetter').innerHTML = continium[1][letterIndex];
    wg.style.visibility = 'visible';
    letterIndex++;

    setTimeout(nextLetter, delay);
}

function setDelay()
{
	
	var inp = document.getElementById('delayInput');
	var n = Number(inp.value);
	if (n < 0 || n > 5000)
	{
		alert('Неправильное значение: ' + inp.value + '\n Введите от 1 до 5000');
		inp.value = delay;
	}
	else delay = n;
}

function press(e) {
	switch (e.keyCode) {
		case 37: case 38: case 33:
			if (delay<300) return;
			delay -= 50;
			break;
		case 40: case 39: case 34:
			if (delay>9949) return;
			delay += 50;
			break;
	}
	document.getElementById('delayInput').value = delay;
}

window.onkeypress = press;
window.onload = nextLetter;