import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Usuario from '../models/Usuario';
import Paciente from '../models/Paciente';
import Sessao from '../models/Sessao';

const models = [Usuario, Paciente, Sessao];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
