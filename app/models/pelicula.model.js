module.exports = (sequelize, Sequelize) => {
    const Pelicula = sequelize.define("pelicula", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        director: {
            type: Sequelize.STRING,
            allowNull: false
        },
        genero: {
            type: Sequelize.STRING,
            allowNull: false
        },
        disponible: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    });
    return Pelicula;
};