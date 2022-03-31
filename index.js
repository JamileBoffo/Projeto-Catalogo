import express from 'express'
import { routes } from './src/routes/routes.js'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()


const __dirname = path.resolve(path.dirname(''))
const app = express();
const port = 3001;


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(routes)
app.listen(port, () => {
    console.log(`Porta ${port}`)
});
