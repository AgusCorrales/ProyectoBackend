const {User, Token, Order,Product,Sequelize} = require ("../models/index.js");
const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");
const { where } = require("sequelize");
const {jwt_secret} = require ("../config/config.json")["development"];
const {Op} = Sequelize

const UserController = {
    create (req,res,next){
        req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password,10)     
        User.create({...req.body,password:password})
        .then(user => res.status(201).send({ msg: 'Usuario creado con éxito', user }))
        .catch(err => {
            console.log(err)
            next(err)
        })
    },
    login(req,res){
        User.findOne({
            where:{
                email:req.body.email
            }
        }).then(user=>{
            if(!user){
                return res.status(400).send({msg:"Usuario o contraseña incorrectos"})
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if(!isMatch){
                return res.status(400).send({msg:"Usuario o contraseña incorrectos"})
            }
            const token = jwt.sign ({id:user.id}, jwt_secret);
            Token.create ({token,UserId: user.id});
            res.send({msg: "Bienvenido" + " " + user.name, user, token});
        })
    },
    getAll (req,res){
        User.findAll(req.params.id)
        .then(users => {
            res.send({ msg: "Todos los usuarios", users });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send({ msg: "Error al obtener todos los usuarios" });
          });
    
    },
    delete (req,res){
        User.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(product=>res.status(200).send({mesg:"Usuario borrado",product}))
        .catch(err => {
            console.log(err)
            res.status(500).send({msg: "Problemas al borrar el usuario"})
        })
    },
    logout(req,res){
        Token.destroy({
            where: {
                [Op.and]: [
                    { UserId: req.user.id },
                    { token: req.headers.authorization }
                ]
            }
        })
        .then(() => {
            res.send({ msg: 'Desconectado con éxito' });
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({ msg: 'Hubo un problema al tratar de desconectarte' });
        });
    },
    findOne(req,res){
        User.findByPk(
                 req.user.id,{
                include: [
                    {
                        model: Order,
                        include: [{model: Product}],
                    },
                ],})
            .then(user=>{
                res.send({ msg: "Usuario con su pedido", user });
            })
            .catch(error => {
                console.log(error);
                res.status(500).send({ msg: "Hubo un problema cargar los usuarios"});
            });
        
    }


}









module.exports = UserController