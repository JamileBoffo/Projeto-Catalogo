import express from 'express'
import { getIndex, getId, postAdd, getAdd, getEd, postEd, getDel } from '../controller/LivrosController.js'


export const routes = express.Router();

routes.get('/', getIndex);

routes.get('/detalhes/:id', getId);

routes.get('/adicionar', getAdd);
routes.post("/adicionar", postAdd);

routes.get('/editar/:id', getEd);
routes.post('/editar/:id', postEd);

routes.get('/delete/:id', getDel);