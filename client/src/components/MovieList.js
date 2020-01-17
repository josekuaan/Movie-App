import React, { useContext } from 'react'
import { MovieContext } from '../MovieContext'
import Movies from './Movies'

export default function MovieList() {
    const context = useContext(MovieContext)
    const {movies} = context
    // const movie = props 
    console.log(movies) 
    return (
        <section className="movie-list">
            <div className="room-list-center">
             {movies.map((item) =>{
                 return <Movies key={item.imdbID} movie={item} />
             })}
            </div>
            
        </section>
    ) 
}
