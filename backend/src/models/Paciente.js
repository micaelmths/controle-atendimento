import Sequelize, { Model } from 'sequelize';

export default class Paciente extends Model {
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
      idade: {
        type: Sequelize.INTEGER,
      },
      nomeMae: {
        type: Sequelize.STRING,
      },
      nomePai: {
        type: Sequelize.STRING,
      },
      rg: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.STRING,
      },
    }, {
      sequelize,
      tableName: 'pacientes',
    });
    return this;
  }
}
