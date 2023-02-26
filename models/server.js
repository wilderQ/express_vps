require('dotenv').config();
const express = require('express')
const cors = require('cors');


class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.middlewares();
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static('public'))

    }

    listen(){
        this.app.listen(this.port, ()=>(console.log("Servidor en el puerto: "+this.port)))
    }

}

module.exports = Server