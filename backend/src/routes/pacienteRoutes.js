import { Router } from 'express';
import pacienteController from '../controllers/PacienteController';

const router = new Router();

router.get('/', pacienteController.index);
router.get('/:id', pacienteController.show);
router.put('/:id', pacienteController.update);
router.delete('/:id', pacienteController.delete);
router.post('/novo', pacienteController.store);

export default router;
