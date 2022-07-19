const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    return Recipe.create({
      title: "Sopa de Tomate",
      level: "Easy Peasy",
      ingredients: ["1kg of Tomatoes", "a pinch of salt", "peppermint"],
      cuisine: "Mediterranean",
      dishType: "soup",
      image: "https://t1.uc.ltmcdn.com/es/posts/3/0/9/como_hacer_sopa_de_tomate_casera_25903_600_square.jpg",
      duration: 20,
      creator: "Idoia F.Forero",
    })
  })
  .then((recipe) => {
    console.log(recipe.title)
    return Recipe.insertMany(data);
  })
  .then((recipe)=>{
    
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });


