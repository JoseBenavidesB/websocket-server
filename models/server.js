const express = require("express");
const cors = require("cors");
const { socketController } = require("../sockets/controller");

class Server {

    constructor () {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);

        this.paths  = {}

        //midlewares: 
        this.middlewares();

        //app routes
        this.routes();

        //sockets config
        this.sockets();
    };

    middlewares() {

        this.app.use(cors()) //use CORS

        //pullic directory
        this.app.use( express.static('public') );
    };

    routes () {

        //this.app.use( this.paths.auth, require('../routes/auth'));
    };

    sockets() {

        this.io.on("connection", socketController)
    };

    listen() {
        this.server.listen(this.port, ()=> {
            console.log(console.log('Listen on port:', process.env.PORT ));
        });
    };

}

module.exports = Server;