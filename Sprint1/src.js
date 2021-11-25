const datos = [];
const registrarMunicipio = (municipio, departamento, numeroCasos, numeroMujeres, numeroHombres, numeroRecuperados) => {
	if(numeroMujeres+numeroHombres>numeroCasos){
		throw new Error();
	}
	var o={municipio:municipio,departamento:departamento,numeroCasos:numeroCasos,numeroMujeres:numeroMujeres,numeroHombres:numeroHombres,numeroRecuperados:numeroRecuperados};
	datos.push(o);
	localStorage.setItem("datos",JSON.stringify(datos));
};
const noticias = [];
const filtrarEInsertarNoticias = (titulo, contenido, url) => {
	console.log(titulo+":"+contenido);
	if(titulo.indexOf("coronavirus")>=0||titulo.indexOf("covid19")>=0||contenido.indexOf("coronavirus")>=0||contenido.indexOf("covid19")>=0){
		var o={titulo:titulo, contenido:contenido, url:url};
		console.log('Será insertado=>'+titulo+":"+contenido);
		noticias.push(o);
		//localStorage.setItem("noticias",noticias);
		localStorage.setItem('noticias',JSON.stringify(noticias));
	}
};
const borrarNoticias = () => {
	noticias.length=0;
	localStorage.setItem('noticias',JSON.stringify(noticias));
}
module.exports.filtrarEInsertarNoticias=filtrarEInsertarNoticias;
module.exports.borrarNoticias=borrarNoticias;
module.exports.registrarMunicipio=registrarMunicipio;

