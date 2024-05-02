const { where } = require("sequelize");
const {Product, Category} = require("../models/index.js");
const { param } = require("../routes/products.js");


const ProductController = {
    create (req,res){
        Product.create(req.body)
        .then(product => {
            product.addCategory(req.body.CategoryId)
            res.status(201).send({msg:"Producto añadido exitosamente", product});
        })    
        .catch(err => {
            console.log(err)
            res.status(500).send({msg: "Problemas al añadir el producto"})
        })
    },
    update (req,res){
        Product.update(req.body,
        {
            where: {
                id: req.params.id
                
            }
        })
        .then(product=>res.status(200).send({msg:"Producto actualizado correctamente", product}))
        .catch(err =>console.log(err));
    },
    getAll (req,res){
        Product.findAll({
            include: [{model: Category, through: {attributes: []}}]
        })
        .then(product =>res.status(200).send(product))
        .catch(err => {
            console.log(err)
            res.status(500).send({msg: "Problemas obtener los productos"})
        })
    },
    delete (req,res){
        Product.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(product=>res.status(200).send({mesg:"Producto borrado",product}))
        .catch(err=>console.log(err));
    },
    getById (req,res){
        Product.findByPk(req.params.id,{
            include: [{model: Category, through: {attributes: []}}]
        })
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err));
    },
    productFilter (req,res){
        Product.findAll(
        {
            where:{
                name:req.params.name
            }

        })
        .then(product=>res.status(200).send(product))
        .catch(err=>console.log(err));
    },
    getByPrice (req,res){
        Product.findAll(
        {
            where:{
                price:req.params.price
            }
        })
        .then(product=>res.status(200).send(product))
        .catch(err=>console.log(err));
    },
    getOrderDes (req,res){
        Product.findAll({
            order: [['price', 'DESC']], 
        })
        .then(product =>res.status(200).send(product)) 
        .catch(err => {
        console.error('Error al obtener productos ordenados:', err);
          
        })
    },    
         

}
 











module.exports = ProductController