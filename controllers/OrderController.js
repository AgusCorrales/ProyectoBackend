const {Order,Product,User} = require ("../models/index.js");


const OrderController = {
    create(req, res) {
        Order.create(req.body)
            .then(order => res.status(201).send({ message: "Pedido creado con éxito", order }))
            .catch(err => console.error(err))
    },
    getAll (req,res){
        Order.findAll({
            include: [{model: Product, through: {attributes: []}}]
            //include: [{model: User, through: {attributes: []}}]
        })
        .then(product =>res.status(200).send(product))
        .catch(err => {
            console.log(err)
            res.status(500).send({msg: "Problemas obtener los pedidos"})
        })
    }



}









module.exports = OrderController;