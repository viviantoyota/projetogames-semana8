const games = require("../model/games.json")


const novaListaGames = games.map(games => {
    const novoGame= {
        id: games.id,
        name: games.name,
        genre: games.genre,
        platforms: games.platforms,
        first_release_date: games.first_release_date,
        slug: games.slug,
        summary: games.duration_ms,
        company: games.company,
        cover: games.company.url
    }
    return novoGame 
})

const getGames = (request, response) => {
    response.status(200).send(novaListaGames
)}

const getGamesbyId = (request, response) => {
    const id = request.params.id
    const games = novaListaGames.find(item => item.id == id)
    if (games) {
        response.status(200).send(games)
    } else {
        response.status(404).send("Jogo não encontrado!")
    }
}

const getByName = (request, response) => {
    const name = request.params.name
    const games = novaListaGames.find(item => item.name == name)
    if (name) {
        response.status(200).send(name)
    } else {
        response.status(404).send("Nome do Jogo não encontrado!")
    }
}

const getByGenre = (request, response) => {
    const genre = request.params.genre
    const games = novaListaGames.find(item => item.genre== genre)
    if (genre) {
        response.status(200).send(genre)
    } else {
        response.status(404).send("Genero do Jogo não encontrado!")
    }
}

const getByPlatform= (resquest, response) => {

    let listaSemRepetir = []

    platforms.forEach(platforms => {
        if(!listaSemRepetir.find(item => item.platforms === album.platforms)){
            listaSemRepetir.push(platforms)
        }
    })

    response.status(200).send(listaSemRepetir)
}


const getBySlug = (request, response) => {
    const slug = request.params.slug
    const games = novaListaGames.find(item => item.slug == slug)
    if (slug) {
        response.status(200).send(slug)
    } else {
        response.status(404).send("Nome do Jogo não encontrado!")
    }
}

const getBySummary = (request, response) => {
    const summary = request.params.summary
    const games = novaListaGames.find(item => item.summary == summary)
    if (summary) {
        response.status(200).send(summary)
    } else {
        response.status(404).send("Sumario do Jogo não encontrado!")
    }
}

const getByRealeaseDate = (request, response) => {
    const release_date = request.params.release_date
    const games = novaListaGames.find(item => item.release_date == release_date)
    if (release_date) {
        response.status(200).send(release_date)
    } else {
        response.status(404).send("Data de lancamento do Jogo não encontrado!")
    }
}

const getBySummary = (request, response) => {
    const summary = request.params.summary
    const games = novaListaGames.find(item => item.summary == summary)
    if (summary) {
        response.status(200).send(summary)
    } else {
        response.status(404).send("Sumario do Jogo não encontrado!")
    }
}

const getByCompany = (resquest, response) => {

    let listaSemRepetir = []

    company.forEach(company => {
        if(!listaSemRepetir.find(item => item.company === album.company)){
            listaSemRepetir.push(company)
        }
    })

    response.status(200).send(listaSemRepetir)
}


module.exports = {
    getGames,
    getGamesbyId,
    getByName,
    getByGenre,
    getByPlatform,
    getBySlug,
    getBySummary,
    getByRealeaseDate,
    getByCompany
}

/*Oi Profs! eu tava quase desistindo meu deus! Alguns nao rodaram e fiquei sem tempo pra conseguir resolver tudo, pra rodar
certinho! voltei pro meu antigo trabalho e estou tentando ao maximo aproveitar o pequeno tempo livre pra resolver os exercicios
mas estou tendo um pouco de dificuldade, vou ir atras inclusive da orientacao educacional pra ver se melhoram as coisas. De toda forma prometo
que os outros vou conseguir resolver se deus quiser e desculpa comentar aqui, sei que nao pode mas nao sabia onde mandar! */