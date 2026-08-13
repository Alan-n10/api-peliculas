const db = require("../models");
const Pelicula = db.peliculas;
const Op = db.Sequelize.Op;

//crear y guardar una nueva pelicula
exports.create = (req, res) => { 
    if (!req.body.nombre) {
        res.status(400).send({
            message: "El nombre de la pelicula es requerido"
        });
        return;
    }
    const pelicula = {
        nombre: req.body.nombre,
        director: req.body.director,
        genero: req.body.genero,
        disponible: req.body.disponible ? req.body.disponible : true
    };
    //guardar la pelicula en la base de datos
    Pelicula.create(pelicula)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al crear la pelicula"
            });
        });
};

//obtener todas las peliculas de la base de datos
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    Pelicula.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener las peliculas"
            });
        });
};

//obtener una pelicula por id
exports.findOne = (req, res) => {
    const id = req.params.id; 
    Pelicula.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener la pelicula con id=" + id
            });
        });  
};           
//actualizar por id
exports.update = (req, res) => {
    const id = req.params.id;
    Pelicula.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La pelicula fue actualizada exitosamente"
                });
            } else {
                res.send({
                    message: "Error al actualizar la pelicula con id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar la pelicula con id=" + id
            });
        });
};
//eliminar por id
exports.delete = (req, res) => {
    const id = req.params.id;
    Pelicula.update(
        { disponible: false },
        { where: { id: id } }
    )
        .then(([filasActualizadas]) => {
            if (filasActualizadas === 1) {
                res.send({
                    message: "La película ahora no está disponible"
                });
            } else {
                res.status(404).send({
                    message: "No existe una película con id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar la película con id=" + id
            });
        });
};


/*eliminar pelicula completamente de la base de datos
exports.deletePermanently = (req, res) => {
    const id = req.params.id;   
    Pelicula.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "La película fue eliminada exitosamente"
                });
            } else {
                res.send({
                    message: "Error al eliminar la película con id=" + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar la película con id=" + id
            });
        });
};
*/