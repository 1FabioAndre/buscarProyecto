
import buscarProyecto from "./buscar";
//casos
//Buscar un proyecto en una lista vacia

describe("Buscar", () => {
    it("no encuentra proyectos cuando no se tiene ninguno en la lista de proyectos", () => { 
        let array = [];
        expect(buscarProyecto("proyecto1", array)).toEqual([]);
    });

    // Encontrando un proyecto en una lista que solo contiene un proyecto
    it("Encontrar un proyecto en una lista que solo contiene un proyecto", () => { 
        let array = [];
        array.push("Proyecto1")
        expect(buscarProyecto("Proyecto1", array)).toEqual(["Proyecto1"]);
    });

    // Encontrando mas de una coincidencia
    it("buscar y encontrar mas de una coincidencia", () => { 
        let array = [];
        array.push("Proyecto1");
        array.push("Proyecto2");
        array.push("Proyecto2");
        array.push("Proyecto3");
        expect(buscarProyecto("Proyecto2", array)).toEqual(["Proyecto2", "Proyecto2"]);
    });
});