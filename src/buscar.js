function buscarProyecto(proyecto="", array){
    let coincidencias = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].startsWith(proyecto)){
            coincidencias.push(array[i]);
        }
    }
    return coincidencias;
}

export default buscarProyecto;