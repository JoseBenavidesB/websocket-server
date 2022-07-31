const dotenv = require('dotenv');
const Server = require('./models/server');
dotenv.config();

const app = new Server();

app.listen();