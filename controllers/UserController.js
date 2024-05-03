//const { request } = require("express");
const {User, Token} = require ("../models/index.js");
const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");
const { use } = require("../routes/products.js");
const {jwt_secret} = require ("../config/config.json")["development"];
//const { getAll } = require("./ProductController.js");

const UserController = {
    create (req,res){
        req.body.role = "user";
        const password = bcrypt.hashSync(req.body.password,10)     
        User.create({...req.body,password:password})
        .then(user => res.status(201).send({ msg: 'Usuario creado con éxito', user }))
        .catch(err => {
            console.log(err)
            res.status(500).send({msg: "Problemas al crear el usuario"})
        })
    },
    login(req,res){
        User.findOne({
            where:{
                email:req.body.email
            }
        }).then(user=>{
            if(!user){
                return res.status(400).send({message:"Usuario o contraseña incorrectos"})
            }
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if(!isMatch){
                return res.status(400).send({message:"Usuario o contraseña incorrectos"})
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
    
    


}









module.exports = UserController