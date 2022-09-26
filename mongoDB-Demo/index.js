const mongoose = require("mongoose");
const Person = require("./models/Person");
const Cat = require("./models/Cat");
const Article = require("./models/Article");
const Comment = require('./models/Comment')


const connectionString = "mongodb://localhost:27017/testdb";
start();

async function start() {
  await mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log('Database connected');

 

  const article = await Article.findOne({});
  const comment = await Comment.findOne({});

  article.comments.push(comment);
  
  await article.save()

  await mongoose.disconnect();
}
