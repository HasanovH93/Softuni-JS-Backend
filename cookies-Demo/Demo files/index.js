const app = require('express')();
const cookieParser = require('cookie-parser');
const session = require('express-session')

app.use(cookieParser());
app.use(session({
    secret: 'my secret code',
    saveUninitialized: true,
    resave: false,
    cookie: {secure: false}
}))

app.get('/', (req,res) => {
  console.log(req.session);
    req.session.visited =  (req.session.visited || 0) + 1
    res.send(`Hello. Visit Counter ${req.session.visited}`)
})

app.listen(3000)