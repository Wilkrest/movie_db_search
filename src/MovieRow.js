import React from 'react';


//props are the arguements passed into the component form the parent component
//movie is the name of the attribute passed through the props
class MovieRow extends React.Component {

    viewMovie() 
    {
        //build the link to the movie using the given prop's id
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        //this line redirects the user to the given link
        window.location.href = url;
    }

    render() 
    {
        const posterURL = 'https://image.tmdb.org/t/p/w185/' + this.props.movie.poster_path;

        return <table className="movie-row-container" key={this.props.movie.id} >
        <tbody className="movie-body"> 
            <tr className="movie-row">
                <td className="movie-poster">
                    <img alt="poster" width="120" src={posterURL}/>
                </td>
                <td className="movie-details">
                    <h3>{this.props.movie.title}</h3>
                    <p>{this.props.movie.overview}</p>
                    <input type="button" className="view-button" onClick={this.viewMovie.bind(this)} value="View"></input>
                </td>
            </tr>
        </tbody>
         </table>

    }
}

export default MovieRow;