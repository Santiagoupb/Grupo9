const registrarMunicipio = async ( 
    municipio,
    departamento,
    numeroCasos,
    numeroMujeres,
    numeroHombres,
    numeroRecuperados
)   => {

    let response = await fetch(
        "https://misiontic2022upb.vercel.app/api/epidemiologic-monitor/villages",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "municipio": municipio, "departamento": departamento, "numeroCasos":numeroCasos, "numeroMujeres":numeroMujeres, "numeroHombres": numeroHombres, "numeroRecuperados": numeroRecuperados
            }),
        }
    );
    let result = await response.json();
    return result
};
const filtrarEInsertarNoticias = async () => {

    let response = await fetch(
        "https://misiontic2022upb.vercel.app/api/epidemiologic-monitor/news"
    );
    let noticiasAPI = await response.json();
    const noticiasFiltradas = [];
    for (let i = 0, h = 0, l = noticiasAPI.length; i< l; i++){
        if(noticiasAPI[i].titulo.indexOf("coronavirus")!==-1 ||noticiasAPI[i].titulo.indexOf("covid19")!==-1 ||noticiasAPI[i].contenido.indexOf("coronavirus")!==-1 ||noticiasAPI[i].contenido.indexOf("covid19")!==-1){
        noticiasFiltradas[h]=noticiasAPI[i];
        h +=1;
        }
    }
    return noticiasFiltradas
};

module.exports.filtrarEInsertarNoticias = filtrarEInsertarNoticias;
module.exports.registrarMunicipio = registrarMunicipio;