require('dotenv').config()
const express = require('express')
const db = require('../db/index')
const cors = require('cors')
const session = require('express-session')
const bcrypt = require('bcryptjs')

const userRoutes = require('./routes/Users')
const postRoutes = require('./routes/Posts')

const server = express()
const port = process.env.PORT || process.env.SECONDPORT

server.use(express.urlencoded({extended : true}))
server.use(express.json())
server.use(cors({
    origin : `http://localhost:${process.env.FRONTENDPORT}`,
    methods : ["POST","GET","DELETE","PUT","HEAD","OPTIONS"],
    credentials : true
}))

const store = new (require('connect-pg-simple')(session))()
server.use(
    session(
        {
           store : store,
           secret : process.env.SESSIONSECRET,
           resave : false,
           saveUninitialized : false,
           cookie : {
                sameSite : false,
                secure : false,
                httpOnly : false,
                maxAge : 1000 * 60 * 60 * 24
           } 
        }
    )
)

server.use('/user', userRoutes)
server.use('/post', postRoutes)


server.listen(port, () => console.log(`Server is listening on port ${port}!`))