import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter no mínimo 3 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe.',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },
      senha: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      senhaDigitada: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 255],
            msg: 'Senha deve conter pelo menos 8 caracteres.',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'usuarios',
    });
    this.addHook('beforeSave', async (usuario) => {
      if (usuario.senhaDigitada) {
        usuario.senha = await bcryptjs.hash(usuario.senhaDigitada, 8);
      }
    });
    return this;
  }
}
