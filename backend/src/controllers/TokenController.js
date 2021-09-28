import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

class TokenController {
  async store(req, res) {
    const { email = '', senha = '' } = req.body;
    if (!email || !senha) {
      return res.status(400).json({ errors: ['Credenciais inválidas!'] });
    }

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(400).json({ errors: ['Usuário não existe!'] });
    }

    if (!(await usuario.senhaIsCorrect(senha))) {
      return res.status(400).json({ errors: ['Senha inválida'] });
    }

    const { id, nome } = usuario;

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token, nome, email });
  }
}

export default new TokenController();
