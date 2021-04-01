// self invoking anonymous function
// (function() {

// })();

// event pada saat link di klik
// $('') = jquery tolong carikan saya sebuah elemen
$('.page-scroll').on('click', function(e) {
	// console log = untuk debugging
	// console.log('ok');

	//ambil isi href
	var tujuan = $(this).attr('href');
	
	//tangkap elemen yang bersangkutan
	var elementujuan = $(tujuan);

	//pindahkan scroll
	$('html, body').animate({
		scrollTop: elementujuan.offset().top - 50
	}, 1000);

	e.preventDefault();

});


// Parallax Effect

// About 

$(window).on('load',function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});



$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	// Jumbotron
	$('.jumbotron img').css({

		'transform' : 'translate(0px, '+ wScroll/4 +'%)'

	});

	$('.jumbotron h1').css({

		'transform' : 'translate(0px, '+ wScroll/2 +'%)'

	});

	$('.jumbotron p').css({

		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'

	});



	// Portfolio (Landing Elemen)
	if( wScroll > $('.portfolio').offset().top - 250 ) {
		$('.portfolio .thumbnail').addClass('muncul');
	  }
		
	});

