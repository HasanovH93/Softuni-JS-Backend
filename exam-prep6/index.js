const express = require('express');
const expressConfig = require('./config/express');
const dbConfig = require('./config/database')
const routesConfig = require('./config/routes')



start()
async function start(){
  
    const app = express()
    expressConfig(app)
    await dbConfig(app)
    routesConfig(app);


    app.listen(3000, () => console.log('Server is running on port 3000'))
}