import * as Yup from 'yup';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import chaveToken from '../../credentials/Jwt';

class SessionController{
  async store(req, res){

    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({error: 'Validation fails'})
    }

    const {email, password} = req.body;

    const user = await User.findOne({where:{email}});

    const error = 'Combinação de usuário/senha inválida. Por favor, verifique.';

    if(!user){
      return res.status(401).json({error});
    }

    if(!(await user.checkPassword(password)))
    {
      return res.status(401).json({error});
    }

    const {id, nome, sobrenome} = user;

    return res.json({
      user:{
        id,
        nome,
        sobrenome,
        email,
      },
      token: jwt.sign({ id }, chaveToken.chave, {
       expiresIn: chaveToken.expiresIn,
    }),
  });
  }
}

export default new SessionController();
