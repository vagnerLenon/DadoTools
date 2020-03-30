const {Router} = require('express');
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res)=>{

  const user = await User.create({
    nome: "Vágner Lenon",
    sobrenome: "Lima da Silva",
    email: "vagner.lenon@gmail.com",
    password_hash: "12345678910"
  });

  return res.json(user);
})

module.exports = routes;
