import React, {useContext} from 'react'
import { MovieContext } from '../MovieContext'
import MovieList from './MovieList'



export default function Search() {
    const context = useContext(MovieContext)

    const {handleChange, searchMovie} = context
    return (
        <div className="container">
            <form className="form-group" onSubmit={ searchMovie }>
                    <div className="form-field">
                        <input type="text" name="search" onChange={handleChange} className="form-control" placeholder="Search Your Movies Here" require/>
                        <button className="search"><i class="fa fa-search"></i></button>
                    </div> 
                </form>
              
               <MovieList />
        </div>
    )
}
