import React from 'react';
import './App.css';

function App() {
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

      <input className="main-search-bar" placeholder="Enter movie title..."></input>

    </div>

  );
}

export default App;
