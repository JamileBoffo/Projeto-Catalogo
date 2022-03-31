import { variados } from '../model/livro.js'

let message = '';

export const getIndex = async (req,res) =>{
    try {
        const livros = await variados.findAll();
        setTimeout(() => {
        message = "";
        }, 1000);
        res.render('index.ejs', {
            livros,
            message
        })
    }
    catch(err){
        res.send(err.message)
    }  
}

export const getId = async (req,res) => {
    const produtoAt =  await variados.findByPk(req.params.id);
    res.render('detalhes.ejs', {
        produtoAt,
    })
}

export const getAdd = (req,res) =>{
    res.render('adicionar.ejs', {
    });
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
    const produtoAt =  await variados.findAll();
    
    res.render('editar.ejs', {
        produtoAt
    })
}

export const postEd = async (req, res) => {
    const { titulo, ano, autores, sinopse, img } = req.body;
    const editLivro = await variados.update ({
        titulo,
        ano,
        autores,
        sinopse,
        img,
    });
    message = `Parabéns, o título ${titulo} foi editado com sucesso!`;
    res.redirect("/");
}

export const getDelete = async (req,res) =>{
    const produtoAt =  await variados.findAll();
    res.render('delete', {
        produtoAt
    })
}

export const getDel = async (req,res) => {
    try {
        await  variados.destroy({
            where: {
                titulo: req.params.titulo
            }
        })
        res.redirect('/')
    }
    catch(err){
        res.send(err.message)
    }
}
