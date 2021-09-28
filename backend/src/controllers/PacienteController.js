import Paciente from '../models/Paciente';

class PacienteController {
  async store(req, res) {
    try {
      const novoPaciente = await Paciente.create(req.body);
      return res.json(novoPaciente);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const paciente = await Paciente.findAll();

      return res.json(paciente);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const paciente = await Paciente.findByPk(id);

      return res.json(paciente);
    } catch (error) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const paciente = await Paciente.findByPk(id);

      if (!paciente) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const pacienteAtualizado = await paciente.update(req.body);

      return res.json(pacienteAtualizado);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const paciente = await Paciente.findByPk(id);

      if (!paciente) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await paciente.destroy();

      return res.send().status(200);
    } catch (error) {
      return res.json(null);
    }
  }
}

export default new PacienteController();
