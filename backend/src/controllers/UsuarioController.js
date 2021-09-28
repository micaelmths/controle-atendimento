import usuario from '../models/Usuario';

class UsuarioController {
  async store(req, res) {
    const novoUsuario = await usuario.create({
      nome: 'Micael Matheus',
      email: 'micael.matheus@gmail.com',
      senhaDigitada: 'Hnk!2033',
    });
    res.json(novoUsuario);
  }
}

export default new UsuarioController();
