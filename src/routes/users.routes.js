import {Router} from 'express';

const router = Router();

router.get('/users', (req, res) => {
    res.send('Obteniendo usuarios')
})

export default router;