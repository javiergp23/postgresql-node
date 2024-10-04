import {Router} from 'express';
import {pool} from '../db.js';

const router = Router();

router.get('/users', async (req, res) => {
   const {rows} =await pool.query('SELECT * FROM users')
   console.log(rows)
})

router.get('/users/:id', (req, res) => {
    const {id} = req.params
    res.send('Obteniendo usuario' + id)
})

router.post('/users', (req, res) => {
    res.send('Creando usuario')
})

router.delete('/users/:id', (req, res) => {

    res.send('Eliminando usuario')
})

router.put('/users/:id', (req, res) => {
    res.send('Actualizando usuario')
})

export default router;