const {Order,Product,User} = require ("../models/index.js");


const OrderController = {
    create(req, res) {
        Order.create(req.body)
        .then(product => {
            product.addCategory(req.body.ProductId)
            res.status(201).send({msg:"Producto añadido exitosamente", product});
        }) 
        .catch(err => console.error(err))
    },
    getAll (req,res){
        Order.findAll({
            include: [{model: Product, through: {attributes: []}}]
            
        })
        .then(product =>res.status(200).send(product))
        .catch(err => {
            console.log(err)
            res.status(500).send({msg: "Problemas obtener los pedidos"})
        })
    }



}









module.exports = OrderController;