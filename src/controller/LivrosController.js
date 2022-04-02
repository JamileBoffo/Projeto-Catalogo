import { variados } from '../model/livro.js'

let message = '';

export const getIndex = async (req,res) =>{
    try {
        const livros = await variados.findAll();
        setTimeout(() => {
        message = "";
        }, 1000);
        res.status(200).render('index.ejs', {
            livros,
            message
        })
    }
    catch(err){
        res.status(500).send(err.message)
    }  
}

export const getId = async (req,res) => {
    const produtoAt =  await variados.findByPk(req.params.id);
    res.status(200).render('detalhes.ejs', {
        produtoAt,
    })
}

export const getAdd = (req,res) =>{
    res.status(200).render('adicionar.ejs');
}

export const postAdd = async (req, res) => {
    const { titulo, ano, autores, sinopse, img } = req.body;
    const novoLivro = await variados.create ({
        titulo,
        ano,
        autores,
        sinopse,
        img,
    });
    message = `Parabéns, o título ${titulo} foi adicionado com sucesso!`;
    res.redirect("/");
}

export const getEd = async (req, res) => {
    const produtoAt =  await variados.findByPk(req.params.id);
    
    res.render('editar.ejs', {
        produtoAt
    })
}

export const postEd = async (req, res) => {
    const { titulo, ano, autores, sinopse, img } = req.body;
    const editLivro = await variados.update ({
        titulo: titulo,
        ano: ano,
        autores: autores,
        sinopse: sinopse,
        img: img,
    }, {
        where: {
            id: req.params.id
        }
    });
    message = `Parabéns, o título ${titulo} foi editado com sucesso!`;
    res.redirect("/");
}

export const getDel = async (req,res) => {
    try {
        await  variados.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).redirect('/')
    }
    catch(err){
        res.status(500).send(err.message)
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 971676bc950aed979d5760c9ae50e4c1bc5f38de
