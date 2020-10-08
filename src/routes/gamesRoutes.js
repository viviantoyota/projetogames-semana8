const express = require("express")
const router = express.Router()
const controller = require("../controller/gamesControllers")
const cors = require("cors")

router.get("/jogos", cors(), controller.getGames)
router.get("/jogos/:id", cors(), controller.getGamesbyId)
router.get("/jogos/:name", cors(), controller.getByName)
router.get("/jogos/:genre", cors(), controller.getByGenre)
router.get("/jogos/:platform", cors(), controller.getByPlatform)
router.get("/jogos/:first_release_date", cors(), controller.getByRealeaseDate)
router.get("/jogos/:company", cors(), controller. getByCompany)


module.exports = router

