// IMPORTS
import React, { useState } from "react";
import "./index.css";

// THE APP FUNCTION
const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // defines the first button handler: the submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("This happened: ", event.target);
    console.log("id: ", query);
  
    // calls the GetMovieData function w the query state var.
    GetMovieData(query);
  };

  // defines the second button handler: prevents default behavior
  const handleClick = (event) => {
    event.preventDefault();
    console.log("This happened: ", event.target);

    GetMovieData(query);
  };

  // GETS DATA FROM API & LOGS IT
  const GetMovieData = async (query) => {
    try {
      const response = await fetch(`http://localhost:8080/api/movies?search=${query}`);
      const data = await response.json();
      console.log(data);
      const items = data.map((item) => ({ ...item, showMoreData: false }));
  
      if (query) {
        const queryLower = query.toLowerCase();
        const filteredItems = items.filter(
          (item) =>
            item.title.toLowerCase().includes(queryLower) ||
            item._id.toLowerCase().includes(queryLower)
        );
        if (filteredItems.length > 0) {
          setResults(filteredItems);
        } else {
          setResults([]);
        }
      } else {
        setResults(items);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  

  // MODIFYING A MOVIE
  const modifyMovie = async () => {
    console.log("Query: " + query);
    // calls the API to make a PUT request (to modify a movie)
    try {
      console.log("Query: " + query);
      const response = await fetch(`http://localhost:8080/api/modify/${query}`, {
        method: "PUT",
      });
      const data = await response.json();
      console.log("Results: ", data);
      const items = data;
      console.log("One movie: ", data);
  
      setResults(items);
    } catch (error) {
      console.error(error);
    }
  };

  // MOVIES IN ARRAY
  const MovieArray = (props) => {
    const { data } = props;

    const handleTitleClick = (id) => {
      setResults((prevState) =>
        prevState.map((item) => {
          if (item._id === id) {
            return { ...item, showMoreData: !item.showMoreData };
          }
          return item;
        })
      );
    };

    // THE POSTER
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
      <div id="table-div-1">
        <table id="table-div" className="table table-striped table-bordered">
          <thead>
            <tr key={props.id}>
              <th scope="col">Title</th>
              <th scope="col">Year</th>
              <th scope="col">Director/s</th>
              <th scope="col">Rating</th>
              <th scope="col">Poster</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(data) && data.map((item, i) => (
              <tr key={i}>
                <td
                  onClick={() => handleTitleClick(item._id)}
                  style={{ cursor: "pointer" }}
                >
                  <span id="movie-title">{item.title}</span>
                  {item.showMoreData && (
                    <div id="toggle-content">
                      <p id="emptyrow"> </p>
                      <p>
                        <strong>Plot: </strong>
                        {item.plot}
                      </p>
                      <p>
                        <strong>Genres: </strong>
                        {item.genres.join(", ")}
                      </p>
                      <p>
                        <strong>Cast: </strong>
                        {item.cast.join(", ")}
                      </p>
                      <p>
                        <strong>MongoDB ID: </strong>
                        {item._id}
                      </p>
                    </div>
                  )}
                </td>
                <td> {item.year} </td>
                <td> {item.directors.join(", ")} </td>
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
      <h1> MFLIX MOVIES </h1>
      <hr></hr>
      <h2>Find or modify movies.</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Search/set: </label>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="form-control"
              placeholder="Type name/id: "
              name="query"
              id="input-txt-placeholder"
            />
          </div>
          <div className="form-group">
            <button type="submit" id="submit-btn" className="btn btn-primary">
              Submit
            </button>

            <button
              type="button"
              id="search-btn"
              className="btn"
              onClick={handleClick}
            >
              Search all
            </button>
            <button
              type="button"
              id="modify-btn"
              className="btn"
              onClick={modifyMovie}
            >
              Modify
            </button>
          </div>
        </form>
        <p> Your search result/s will appear in the table below.</p>
      </div>
      <MovieArray data={results} />
    </div>
  );
};

// when the above form is submitted, it calls the handleSubmit() function
// that updates movie data to localStorage.

export default App;
