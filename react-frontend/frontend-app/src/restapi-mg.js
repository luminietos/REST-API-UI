// // USER CONNECTS TO DATABASE + CREATING A SCHEMA

// // requires modules:
// const mongoose = require("mongoose");
// require("dotenv").config();


// // USER ID & PASSWORD
// // (so that when connecting to the db, mg knows which user is being used)
// var user = process.env.MONGO_USERID
// var pw = process.env.MONGO_PW
// const uri = "mongodb+srv://" + user + ":" + pw + "@cluster1.zl9za8m.mongodb.net/?retryWrites=true&w=majority";



// // SCHEMA, CONNECTING TO DATABASE
// mongoose.connect(uri, 
//     { 
//         useNewUrlParser: true, 
//         useUnifiedTopology: true 
//     });

// // ALT. OPTION: should I define the URI like this, or like above?? 
// // mongoose.connect("mongodb://localhost:3000/sample_mflix.movies", {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });

// // defines a schema called "Movie"
// const Movie = mongoose.model(
//   "Movie",
//   {
//     title: String,
//     year: Number,
//     poster: String,
//   },
//   "movies"
// );

// // saves the object to the database
// Movie.save(function(err, user) {
//     if (err) return console.log(err);
//     console.log(user);
//     mongoose.disconnect();
  
//   });