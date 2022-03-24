import express from 'express'
import path from 'path'

const __dirname = path.resolve(path.dirname(''))
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, () => {
    console.log(`Porta ${port}`)
});

const product = {
    livros: [{
        "id": 1,
        "nome": "A Revolução dos Bichos",
        "autor": "George Orwell",
        "ano_edicao": 2007,
        "sinopse": "A Revolução dos Bichos, de George Orwell, se passa numa granja liderada, inicialmente, pelo Sr. Jones. Porém, insatisfeitos com a dominação e exploração e liderados pelo Porco Major, os animais decidem fazer uma revolução. Assim, o inimigo seria aquele que anda sobre duas pernas",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91BsZhxCRjL.jpg"
    },{
        "id": 2,
        "nome": "A Rainha Vermelha",
        "autor": "Victoria Aveyard",
        "ano_publi": 2015,
        "sinopse": "O mundo de Mare Barrow é dividido pelo sangue: vermelho ou prateado. Mare e sua família são vermelhos: plebeus, humildes, destinados a servir uma elite prateada cujos poderes sobrenaturais os tornam quase deuses. Mare rouba o que pode para ajudar sua família a sobreviver e não tem esperanças de escapar do vilarejo miserável onde mora. Entretanto, numa reviravolta do destino, ela consegue um emprego no palácio real, onde, em frente ao rei e a toda a nobreza, descobre que tem um poder misterioso… Mas como isso seria possível, se seu sangue é vermelho? Em meio às intrigas dos nobres prateados, as ações da garota vão desencadear uma dança violenta e fatal, que colocará príncipe contra príncipe - e Mare contra seu próprio coração",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41-+BzOmtHL._SX345_BO1,204,203,200_.jpg"
    },{
        "id": 3,
        "nome": "O Duque e Eu",
        "autor": "Julia Quinn",
        "ano_publi": 2020,
        "sinopse": "Simon Basset, o irresistível duque de Hastings, acaba de retornar a Londres depois de seis anos viajando pelo mundo. Rico, bonito e solteiro, ele é um prato cheio para as mães da alta sociedade, que só pensam em arrumar um bom partido para suas filhas. Simon, porém, tem o firme propósito de nunca se casar.",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51ASlhVRLRL._SX345_BO1,204,203,200_.jpg"
    },{
        "id": 4,
        "nome": "A Seleção",
        "autor": "Kiera Cass",
        "ano_publi": 2012,
        "sinopse": "Muitas garotas sonham em ser princesas, mas este não é o caso de America Singer. Ela topa se inscrever na Seleção só para agradar a mãe, certa de que não será sorteada para participar da competição em que o príncipe escolherá sua futura esposa. Mas é claro que depois disso sua vida nunca mais será a mesma...",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51zrqIq-fyL._SX330_BO1,204,203,200_.jpg"
    },{
        "id": 5,
        "nome": "It: A Coisa",
        "autor": "Stephen King",
        "ano_publi": 2014,
        "sinopse": "Naquele verão, eles enfrentaram pela primeira vez a Coisa, um ser sobrenatural e maligno que deixou terríveis marcas de sangue em Derry. Quase trinta anos depois, os amigos voltam a se encontrar. Uma nova onda de terror tomou a pequena cidade, e somente eles serão capazes de enfrentar a Coisa. O tempo é curto.",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51z0s3GcvwL._SX346_BO1,204,203,200_.jpg"
    },{
        "id": 6,
        "nome": "Crepúsculo",
        "autor": "Stephenie Meyer",
        "ano_publi": 2008,
        "sinopse": "Isabella Swan chega à nublada e chuvosa cidadezinha de Forks - último lugar onde gostaria de viver. Tenta se adaptar à vida provinciana na qual aparentemente todos se conhecem, lidar com sua constrangedora falta de coordenação motora e se habituar a morar com um pai com quem nunca conviveu.",
        "img": "https://img.travessa.com.br/livro/GR/8e/8efb1ac1-4a5a-4506-b6ca-1192686bfe51.jpg"
    },{
        "id": 7,
        "nome": "A Metamorfose",
        "autor": "Franz Kafka",
        "ano_publi": 1915,
        "sinopse": "A metamorfose (Die Verwandlung, em alemão) é uma novela escrita por Franz Kafka. Nessa obra, Kafka descreve o caixeiro viajante Gregor Samsa, que abandona as suas vontades e desejos para sustentar a família e pagar a dívida dos pais.",
        "img": "https://images-na.ssl-images-amazon.com/images/I/516qKNlle4L._SX331_BO1,204,203,200_.jpg"
    },{
        "id": 8,
        "nome": "O Diário de Anne Frank",
        "autor": "Anne Frank",
        "ano_publi": 1947,
        "sinopse": "O diário de Anne Frank, o depoimento da pequena Anne, morta pelos nazistas após passar anos escondida no sótão de uma casa em Amsterdã, ainda hoje emociona leitores no mundo inteiro. Suas anotações narram os sentimentos, os medos e as pequenas alegrias de uma menina judia que, como sua família, lutou em vão para sobreviver ao Holocausto.",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51FcYCljAJL._SX321_BO1,204,203,200_.jpg"
    },{
        "id": 9,
        "nome": "O Ladrão de Raios - PJO",
        "autor": "Rick Riordan",
        "ano_publi": 2014,
        "sinopse": "A vida do adolescente Percy Jackson, que está sempre pronto para entrar em uma confusão, torna-se bem mais complicada quando ele descobre que é filho do deus grego Poseidon. Em um campo de treinamento para filhos das divindades, Percy aprende a tirar proveito de seus poderes divinos e se preparea para a maior aventura de sua vida.",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51StoWcrc8L._SX322_BO1,204,203,200_.jpg"
    },{
        "id": 10,
        "nome": "A Corte de Espinhos e Rosas",
        "autor": "Sarah J Maas",
        "ano_publi": 2015,
        "sinopse": "Num mundo dividido uma muralha mágica separa duas espécies. De um lado, os feéricos vivem dentro de suas fronteiras cheias de beleza e mistério; do outro, os humanos possuem apenas medo, desconfiança e dificuldades. Feyre, filha de um casal de mercadores humanos e falidos, se torna caçadora para sustentar a família.",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91RU544KgKL.jpg"
    }]
    }

const produtos = product.livros

app.get('/', (req,res) =>{
    res.render('index.ejs', {
        produtos
    })
})

app.get('/detalhes/:id', (req, res) =>{
    const produtoAt = produtos.filter((element) => element.id == req.params.id)
    res.render('detalhes.ejs', {
        produtoAt
    })
})

