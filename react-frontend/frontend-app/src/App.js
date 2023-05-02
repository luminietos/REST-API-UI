// IMPORTS
import React, { useState } from "react"; 
import "./index.css";

// THE APP FUNCTION 
const App = () => { 

  const [query, setQuery] = useState(''); 

  // defines the first button handler: the submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("This happened: ", event.target);
    console.log("id: ", query);

    GetMovieData();
  };

  // defines the second button handler: prevents default behavior
  const handleClick = (event) => {
    event.preventDefault();
    console.log("This happened: ", event.target);

    GetMovieData();
  };
  
  const [results, setResults] = useState([]);

  // GETS DATA FROM API & LOGS IT
  const GetMovieData = () => {
    // fetches movie w given query & returns it as JSON data
    fetch("http://localhost:3000/api/movies")
      .then((results) => {
        return results.json();
      })
      // iterates through each item + prints em out
      .then((data) => {
        console.log(data);
        const items = data;

        // updates results based on what was logged
          // and prints out all the items (movies) on the list
        setResults(items);
      });
  };

  // MODIFYING A MOVIE
  const modifyMovie = () => {
    console.log("Query: " + query);
    // calls the API to make a PUT request (to modify a movie)
    fetch("http://localhost:3000/api/modify/" + query, {
      method: "PUT"
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log("Results: ", data);
        const items = data;
        console.log("One movie: ", data);

        setResults(items);
      });
  };

  // MOVIES IN ARRAY 
  const MovieArray = (props) => {
    const { data } = props;
    // variable declaration: the posters!
    let posterImg;

    // checks the poster
    const CheckPoster = (props) => {
      let poster = props.src;
      // if the movie poster doesn't exist...
      if (poster === "" || poster === null) {
        posterImg =
          "https://openvirtualworlds.org/omeka/files/fullsize/1/30/movie-big.jpg";
      } else {
        posterImg = poster;
      }
      // returns the movie poster
      return (
        <img
          src={posterImg}
          alt="Poster"
          // (for styling purposes...)
          className="img-thumbnail"

          // an error handler
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://openvirtualworlds.org/omeka/files/fullsize/1/30/movie-big.jpg";
          }}
          width="50%"
        />
      );
    };

    // RETURNS THE MOVIE LIST ON A TABLE
    return (
      <div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr key={props.id}>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Directors</th>
              <th scope="col">Rating</th>
              <th scope="col">Poster</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr>
                <td key={i}> {item.title}</td>
                <td> {item.year} </td>
                <td> {item.directors} </td>
                <td> {item.imdb.rating}</td>
                {/*  creates image */}
                <td id="pic">
                  <CheckPoster src={item.poster} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // THE RETURN FOR THE FORM
  return (
    <div>
      <h1>Find or modify movies</h1>
      <div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Search/set: </label>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="form-control"
              placeholder="Set id: "
              name="query"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            <button type="button" className="btn" onClick={handleClick}>
              Search all
            </button>
            <button type="button" className="btn" onClick={modifyMovie}>
              Modify movie
            </button>
          </div>
        </form>
      </div>
      <MovieArray data={results} />
    </div>
  );
};

// when the above form is submitted, it calls the handleSubmit() function
    // that updates movie data to localStorage.
    
export default App;
