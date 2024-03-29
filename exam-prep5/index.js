const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes')

start()
async function start(){
 //... execute config
    const app = express();
    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app)

app.listen(3000, () => console.log('App is running...'))

}