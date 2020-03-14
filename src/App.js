import React from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
//dollar sign represents the jquery library
import $ from 'jquery'

class App extends React.Component 
{

  //constructor for this component
  constructor(props)
  {
    super(props)
    //initialize state to an empty state
    this.state = {}
    //perform the search 
    this.performSearch("")
  }

  //this function executes the search on movieDB and returns the results
  performSearch(searchTerm) 
  {
    //jquery has a function called ajax used to make asynchronous calls to fetch data
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=98350ecd42c9cc6f0c3ca343d790f8e9&query=" + searchTerm
    $.ajax({
      //holds the url to fetch data from 
      url: urlString,
      //callback function executed on success
      //searchResults is the fetched data, which should be in the form of an array of JSON objects
      success: (searchResults) => 
      {
        console.log("fetched data successfully")

        //save the fetched data into results, results will now be an array of objects
        const results = searchResults.results
        //initalize array to contain the constructed movie row components
        const movieRows = []

        //parse through the fetched JSON array building MovieRow components with each element in the fetched array
        results.forEach((movie) => 
        {
          //construct the new MovieRow component with each 'movie' in the results array
          const newMovie = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(newMovie)
        })
        
        //set the current state
        this.setState({rows: movieRows})

      },
      //callback function excecuted on error
      error: (xhr, status, err) => {
        console.error("failed to fetch data")
      }

    })
  }

  searchHandler(event) 
  {
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
    
  }


  render() 
  {
    return (
      <div className="App">
        <table className='title-bar'>
          <tbody>
            <tr>
              <td>
                <img width ="50" alt="movie logo" src="logo.svg"/>
              </td>
              <td width='8'></td>
              <td>
                <h1>  MoviesDB Search </h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className="main-search-bar" onChange={this.searchHandler.bind(this)} placeholder="Enter movie title..."></input>
  
        {this.state.rows}    

      </div>
    );
  }

}

export default App;
