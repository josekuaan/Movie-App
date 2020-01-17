
const express = require('express')

const {getMovies,getAllMovie} = require('../controllers/getMovies')

const Router = express.Router()

Router.route('/').post(getMovies).get(getAllMovie)


module.exports = Router

