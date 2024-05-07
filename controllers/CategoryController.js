const category = require("../models/category");
const {Category, Product} = require ("../models/index.js");


const CategoryController = {
    create (req,res){
        Category.create(req.body)
        .then (category => res.status(201).send({msg:"Categoria añadido exitosamente", category}))
        .catch (err =>{
            console.log(err);
            res.status(500).send({msg: "Error al crear la categoria"})
        })
    },
    udpate(req,res){
        Category.udpate(req.body,
        {
            where:{
                id: req.params.id
            }
        })
        .then(category =>res.status(200).send({msg:"Categoria actualizado correctamente", category}))
            .catch(err => {
                console.log(err)
                res.status(500).send({msg: "Problemas al actualizar categoria"})
            })
    },
    delete (req,res){
        Category.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(product=>res.status(200).send({msg:"Categoria borrada",product}))
        .catch(err => {
            console.log(err)
            res.status(500).send({msg: "Problemas al borrar categoria"})
        })
    },
    getAll (req,res){
        Category.findAll({
            include: [{model: Product, through: {attributes: []}}]
        })
        .then(category=>res.status(200).send(category))
        .catch(err => {
            console.log(err)
            res.status(500).send({msg: "Problemas obtener las categorias"})
        })
    },
    getById (req,res){
        Category.findByPk(req.params.id,{
            include: [{model: Product, through: {attributes: []}}]
        })
        .then(category => res.status(200).send(category))
        .catch(err => {
            console.log(err)
            res.status(500).send({msg: "Problemas obtener todas las categorias"})
        })
    },
    categoryFilter (req,res){
        Category.findAll(
        {
            where:{
                name:req.params.name
            }

        })
        .then(category=>res.status(200).send(category))
        .catch(err => {
            console.log(err)
            res.status(500).send({msg: "Problemas obtener los productos"})
        })
    },

}   
    


module.exports = CategoryController