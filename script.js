const express = require('express');
const path = require('path');



const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const port = 3001;

const product = {
    "pocoes": [{
        "id": 1,
        "nome": "Amortentia",
        "descricao": "Faz com que o bruxo que o tome se apaixone",
        "preco": 52,
        "img": "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/712/635/products/img_26431-bc51d2413b91d15f5516251586748236-640-0.jpg"
        },{
        "id": 2,
        "nome": "Felix Felicis",
        "descricao": "Garante boa sorte temporária",
        "preco": 130,
        "img": "http://pm1.narvii.com/6282/64eb47ec9dd40184bb252b61e66b7f30c9fb92c5_00.jpg"
    },{
        "id": 3,
        "nome": "Elixir da Vida",
        "descricao": "Aumenta o tempo de vida do bruxo que tomá-la",
        "preco": 500,
        "img": "https://img.elo7.com.br/product/original/1B73298/corrente-harry-potter-pocao-elixir-da-vida-presente-menino.jpg"
    },{
        "id": 4,
        "nome": "Morto-Vivo",
        "descricao": "Faz com que a pessoa durma por várias horas",
        "preco": 36,
        "img": "https://img.mycartpanda.com/unsafe/1024x0/https://s3-cartx-ecom-images-prd.s3.us-east-2.amazonaws.com/static/products_images/58/5e/72/1622717411.jpg"
    },{
        "id": 5,
        "nome": "Polissuco",
        "descricao": "Transforma o bruxo que beber em outra pessoa",
        "preco": 25,
        "img": "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/712/635/products/img_27011-117e82ebf3b822683316251588976459-640-0.jpg"
    },{
        "id": 6,
        "nome": "Veritaserum",
        "descricao": "Faz a pessoa contar todos os segredos",
        "preco": 50,
        "img": "http://pm1.narvii.com/6281/7d742ae9bb726b38ca73cabb29de29edeef01723_00.jpg"
    },{
        "id": 7,
        "nome": "Wiggenweld",
        "descricao": "Acorda pessoas que estão dormindo através de feitiços ou poções e cura ferimentos",
        "preco": 15,
        "img": "https://pm1.narvii.com/6300/e85815a3459c1307f14f8e8d502194147a2c1d1f_hq.jpg"
    },{
        "id": 8,
        "nome": "Wolfsbane",
        "descricao": "Faz o lobisomem se acalmar",
        "preco": 65,
        "img": "https://img.mycartpanda.com/unsafe/600x0/https://s3-cartx-ecom-images-prd.s3.us-east-2.amazonaws.com/static/products_images/f7/d8/fd/1622716149.jpg"
    },{
        "id": 9,
        "nome": "Esquelesce",
        "descricao": "Permite desenvolver ossos novos",
        "preco": 100,
        "img": "http://pm1.narvii.com/6418/2a5500b33d6eafc0cd6811913f25b92f04489851_00.jpg"
    }]
}

const produtos = product.pocoes

app.get('/', (req,res) =>{
    res.render('index.ejs', {
        produtos
    })
})

app.listen(port, () => {
    console.log(`Porta ${port}`)
});