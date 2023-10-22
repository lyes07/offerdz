require('dotenv').config()
const express = require('express')
const db = require('../db/index')
const cors = require('cors')
const session = require('express-session')
const bcrypt = require('bcryptjs')

const server = express()


const port = process.env.PORT

server.get('/', (req, res) => res.json({text :'Heo orld!'}))
server.listen(port, () => console.log(`Server is listening on port ${port}!`))