import React, { useContext } from 'react'
import { Alert } from 'reactstrap';
import { MovieContext } from '../MovieContext'
import Movies from './Movies'
import Content from './Content'

export default function MovieList() {
    const context = useContext(MovieContext)
    const {movies,isLoading} = context
    if(movies.length === 0){
        return (
        <Content />
        )
        
    }else{
        return (
            <section className="movie-list">
                <div className="room-list-center">
                 {movies.map((item) =>{
                     if(!item.imdbID){
                         return (
                             <div>
                                 <Alert color="warning">
                                    <h3>{item.Error} Please reload the page</h3>
                                  </Alert>
                             </div> 
                         )
                     }
                     return <Movies key={item.imdbID} isLoading={isLoading} movie={item} />
                 })}
                </div>
                
            </section>
        ) 
    }
   
   
}
