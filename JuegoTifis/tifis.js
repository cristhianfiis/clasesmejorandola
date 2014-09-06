var tablero;
var teclas={
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39
};
var fondo ={
	imagenURL:"fondo.png",
	imagenOK:false
};

var tifis ={
	x:100,
	y:100,
	frenteURL:"diana-frente.png",
	OK: false,
	velocidad: 20,
	atrasURL:"diana-atras.png",
	leftURL:"diana-izq.png",
	rightURL:"diana-der.png",
	imagen: new Image()
};

var liz={
	lizURL:"liz.png",
	lizOk:false,
	x:400,
	y:200
};

function inicio(){
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src=fondo.imagenURL;
	fondo.imagen.onload= confirmarFondo;

	crearTifis(tifis.frenteURL);

	liz.lizy = new Image();
	liz.lizy.src=liz.lizURL;
	liz.lizy.onload= confirmarLiz;

	document.addEventListener("keydown",teclado);


}

function teclado(datos){
	var codigo=datos.keyCode;
	if(codigo==teclas.UP){
		tifis.y-=tifis.velocidad;
		crearTifis(tifis.atrasURL);
	}
	if(codigo==teclas.DOWN){
		tifis.y+=tifis.velocidad;
		crearTifis(tifis.frenteURL);
	}
	if(codigo==teclas.LEFT){
		tifis.x-=tifis.velocidad;
		crearTifis(tifis.leftURL);
	}
	if(codigo==teclas.RIGHT){
		tifis.x+=tifis.velocidad;
		crearTifis(tifis.rightURL);
	}
	dibujar();
}

function crearTifis(url){
	tifis.imagen.src=url;
	tifis.imagen.onload= confirmarTifis;
}

function confirmarLiz(){
	liz.lizOk=true;
	dibujar();
}

function confirmarFondo(){
	fondo.imagenOK=true;
	dibujar();
}

function confirmarTifis(){
	tifis.OK=true;
	dibujar();
}
function dibujar(){
	if(fondo.imagenOK){
		tablero.drawImage(fondo.imagen,0,0);
	}

	if(tifis.OK){
		tablero.drawImage(tifis.imagen,tifis.x,tifis.y);
	}

	if(liz.lizOk){
		tablero.drawImage(liz.lizy,liz.x,liz.y);
	}

}

