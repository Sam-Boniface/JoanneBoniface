$(document).ready(function(){
	$('#divload').delay(1000).fadeTo(2000, 0);
	setTimeout(function(){
		$('#divload').css('z-index', '-3');
	}, 3000);
	setTimeout(slideshow, 1000);
});

function slideshow(){
	$('#mySlides > div:gt(0)').hide();

	setInterval(function() {
		$('#mySlides > div:first')
		.fadeOut(2000)
		.next()
		.fadeIn(2000)
		.end()
		.appendTo('#mySlides');
	}, 4000);
	
	
	$('#mySlides2 > div:gt(0)').hide();
		
	setInterval(function() {
		$('#mySlides2 > div:first')
		.fadeOut(2000)
		.next()
		.fadeIn(2000)
		.end()
		.appendTo('#mySlides2');
	}, 4000);
}

var position = [0,1];
var pic = [1,2,3,4,5,6,"Plan"];
var img = [0,1,2,3,4,5,6];
var design = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var currentdesign;
var currentpage = ["Shaker","Solid","Premium","Handleless","Slab"];
var currentimage;
var page = [0,1,2,3,4];
var holder = ["A1", "A2", "A3", "A4", "A5", "A6", "A7"];
var heading = ["D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","D11","D12","D13","D14","D15","D16","D17","D18","D19","D20","D21","D22","D23"];

function hideimg(img) {
	var element = document.getElementById(holder[img]); 
	element.style.visibility = 'hidden';
}

function Range(page) {
	currentdesign = 0;
	currentimage = pic[0];
	currentpage = currentpage[page];
	var element = document.getElementById(heading[currentdesign]);
	element.classList.add("Current");
}

function imgchange(img) {
	var change = "Designs/" + currentpage + "/" + currentdesign + "/" + pic[img] + ".jpg";
	var element = document.getElementById("main-img");
	element.setAttribute('src', change);
	currentimage = pic[img];
}

function designchange(design) {
	var i = 0;
	var element3 = document.getElementById(heading[currentdesign]);
	var element5 = document.getElementById('main-img');
	element3.classList.remove("Current");
	currentdesign = design;
	var element2 = document.getElementById(heading[currentdesign]);
	element2.classList.add("Current");
	currentimage = pic[0];
	for (i=0; 1<8; i++) {
		var element1 = document.getElementById(i);
		var change = "Designs/" + currentpage + "/" + currentdesign + "/" + pic[i] + ".jpg";
		var change2 = "Designs/" + currentpage + "/" + currentdesign + "/1.jpg";
		var element4 = document.getElementById(holder[i]);
		element1.setAttribute('src', change);
		element5.setAttribute('src', change2);
		element4.style.visibility = 'visible';
	}
}

function enlarge() {
	var element9 = document.getElementById("enlarged");
	var element10 = document.getElementById("currentdesign");
	var change = "Designs/" + currentpage + "/" + currentdesign + "/" + currentimage + ".jpg";
	element9.style.visibility = 'visible';
	element10.setAttribute('src', change);
}

function enlargeclose() {
	document.getElementById("enlarged").style.visibility = 'hidden';
}