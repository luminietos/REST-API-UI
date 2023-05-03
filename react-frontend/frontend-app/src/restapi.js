// USING THE EXPRESS MODULE
var express = require("express");
var app = express();
const path = require("path"); // defining the path
const mongoose = require("mongoose");
require("dotenv").config();

// in order to get parameters - needed to read forms
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.static("public"));

// THE MAIN HTML PAGE
app.get("/", function (_req, res) {
  // redirecting page to index html file
  res.sendFile(path.join(__dirname + "/index.html"));
});

// MONGO MODULE/DATABASE IN USE
const MongoClient = require("mongodb").MongoClient;
// const { MongoClient, ServerApiVersion } = require('mongodb');

// env parameters
require("dotenv").config();

//OPTION (1/2):
// set user ID & Password from the environment
var user = process.env.MONGO_USERID;
var pw = process.env.MONGO_PW;

// ( cluster1 )
const uri = "mongodb+srv://" + user + ":" + pw + "@cluster1.zl9za8m.mongodb.net/?retryWrites=true&w=majority";


//ALT. OPTION (2/2):
// const uri = `mongodb+srv://${process.env.MONGO_USERID}:${process.env.MONGO_PW}@cluster0.hibjqgg.mongodb.net/?retryWrites=true&w=majority`;

// MAKES THE ROUTES

// prints the movies - returns all documents in collection
app.get("/api/movies", function (_req, res) {
  // creates connection object
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // defines a schema called "Movie"
const Movie = mongoose.model(
    "Movie",
    {
      title: String,
      year: Number,
      poster: String,
    },
    "movies"
  );
  
  // saves the object to the database
  Movie.save(function(err, user) {
      if (err) return console.log(err);
      console.log(user);
      mongoose.disconnect();
    
    });
  

  async function connectAndFetch() {
    try {
      // the mongo collection - connection to the database
      await client.connect();
      const collection = client.db("sample_mflix").collection("movies");

      // makes a query with collection-object to the collection
      var result = await collection
        .find() // use of empty () to show all contents!
        .limit(10)
        .toArray();

      res.send(result);
    } catch (e) {
      console.error(e);
    } finally {
      await client.close();
      console.log("Connection closed to MONGO");
    }
  }
  // calling it
  connectAndFetch();
});

// returns all movies w an id number that's been passed in as a parameter
app.get("/api/:id", function (req, res) {
  res.send("Get movie by ID: " + req.params.id);
});

// modifies the info of a movie by ID number & sends- 
   // the modified data back to the requester
// ( = sees how to read the ID)
app.put("/api/modify/:id", function (req, res) {
  res.send("Modify movie by ID: " + req.params.id);
});

// adds a single movie & sends back the new data to the requester
// ( = sees how to read the POST parameters)
app.post("/api/add", function (req, res) {
  res.send("Add movie: " + req.body.title + " (" + req.body.year + ")");
});

// removes a movie by ID
// app.delete("/api/delete/:id", function (req, res) {
// // sends back an error msg if it can't be found/has been removed
//   movie.findByIdAndDelete(req.params.id, function (err) {
//     if (err) {
//       res.status(500).send("Error 500: " + error);
//     }
//     const response = {
//       message: "The movie has been deleted.",
//     };
//     return res.status(200).send(response);
//   });
// });

app.delete("/api/delete/:id", function(req, res) {
  res.send("Remove the movie by " + req.params.id);
});

// if the route cannot be found
app.get("*", function (req, res) {
  res.status(404).send("Can't find the requested page");
});

// web server w. Express
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("REST api is listening on PORT %d", PORT);
});