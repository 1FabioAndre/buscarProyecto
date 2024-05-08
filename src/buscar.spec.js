
import buscarProyecto from "./buscar";
//casos
//Buscar un proyecto en una lista vacia

describe("Buscar", () => {
    it("no encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => { 
        let array = [];
        expect(buscarProyecto("proyecto1", array)).toEqual("");
    });

    // Encontrando un proyecto en una lista que solo contiene un proyecto
    it("Encontrar un proyecto en una lista que solo contiene un proyecto", () => { 
        let array = [];
        array.push("Proyecto1")
        expect(buscarProyecto("Proyecto1", array)).toEqual("Proyecto1");
    });
});