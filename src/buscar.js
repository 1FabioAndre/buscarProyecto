function buscarProyecto(proyecto="", array){
    let coincidencias = [];
    for(let i = 0; i < array.length; i++){
        if(proyecto === array[i]){
            coincidencias.push(array[i]);
        }
    }
    return coincidencias;
}

export default buscarProyecto;