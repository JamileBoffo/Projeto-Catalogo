import express from 'express'
import { getIndex, getId, postAdd, getAdd, getEd, postEd, getDelete, getDel } from '../controller/LivrosController.js'


export const routes = express.Router();

routes.get('/', getIndex);

routes.get('/detalhes/:id', getId);

routes.get('/adicionar', getAdd);

routes.post("/adicionar", postAdd);

routes.get('/editar', getEd);

routes.post('/editar', postEd);

routes.get('/deletar', getDelete)

routes.get('/deletar', getDel);
