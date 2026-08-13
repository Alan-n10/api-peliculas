module.exports = app => {

    const peliculas = require("../controllers/pelicula.controller.js");
    var router = require("express").Router();

    //crear una pelicula
    router.post("/create", peliculas.create);
    //obtener todas las peliculas
    router.get("/", peliculas.findAll);
    //obtener una pelicula por id
    router.get("/:id", peliculas.findOne);
    //actualizar toda la pelicula por id
    router.put("/update/:id", peliculas.update);
    //eliminar una pelicula por id
    router.delete("/delete/:id", peliculas.delete);
    app.use("/api/peliculas", router);
    
    
       
};        