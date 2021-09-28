import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import tokenRoutes from './src/routes/tokenRoutes';
import usuarioRoutes from './src/routes/usuarioRoutes';
import sessaoRoutes from './src/routes/sessaoRoutes';
import pacienteRoutes from './src/routes/pacienteRoutes';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/usuarios/', usuarioRoutes);
    this.app.use('/sessoes/', sessaoRoutes);
    this.app.use('/pacientes/', pacienteRoutes);
    this.app.use('/token/', tokenRoutes);
  }
}

export default new App().app;
