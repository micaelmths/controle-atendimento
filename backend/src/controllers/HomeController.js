import usuario from '../models/Usuario';

class HomeController {
  async index(req, res) {
    const user = await usuario.findAll();
    res.json(user);
  }
}

export default new HomeController();
