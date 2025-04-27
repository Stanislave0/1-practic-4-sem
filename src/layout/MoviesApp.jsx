import React from "react";
import { Preloader } from "../components";
import { Movies } from "../components";
import { Search } from "../components";
class MoviesApp extends React.Component {

    state = {
        movies: [],
        loading: true,
    };
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=214b5f12&s=matrix')
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search, loading: false}));
    }
    searchMovies = (str, type = 'all') => {
        fetch(`http://www.omdbapi.com/?apikey=214b5f12&s=${str}${
            type !== 'all' ? `&type=${type}` : ""
        }`)
            .then((response) => response.json())
            .then((data) => this.setState({movies: data.Search, loading: false}));
    }
    render() {
        const { movies, loading } = this.state;

        return <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {
                loading ? <Preloader/> : <Movies movies={this.state.movies}/>
            }
        </main> 
        
    }
    
}
export {MoviesApp}