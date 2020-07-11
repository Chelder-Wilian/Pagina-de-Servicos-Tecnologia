var bt = 0;

$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 1000);
});

function mostrarMenu() {
	if (bt%2 == 0) {
		document.getElementById('menuMobile').style.display = 'block';
	}

	if (bt%2 == 1) {
		document.getElementById('menuMobile').style.display = 'none';
	}

	bt++;
}

var slide = document.getElementsByClassName('sobre-autor');
var ball =  document.getElementsByClassName('ball');


var cont = 0;

function sliders() {

	for (var i = 0; i <= 2; i++) {
		slide[i].style.display ='none';
		ball[i].style.background ='';
	}

	slide[cont].style.display ='block';
	ball[cont].style.backgroundColor ='gray';


	return contagem();
}

function contagem(){
	setTimeout(function(){
		cont++;
		if (cont == 1 || cont == 2) {
			return sliders();
		}

		else{
			cont = 0;
			return sliders();
		}
	},5000);	
}