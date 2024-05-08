function buscarProyecto(proyecto="", array){
    for(let i = 0; i < array.length; i++){
        if(proyecto === array[i]){
            return array[i];
        }
    }
    return "";
}

export default buscarProyecto;