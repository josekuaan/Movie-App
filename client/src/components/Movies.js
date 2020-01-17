import React from 'react'
import { Jumbotron,Button } from 'reactstrap';
import Overview from './Overview'

export default function Movies({ movie }) {

    const {Poster,Genre,Title,Ratings,Runtime} = movie
    console.log(movie)
   
    return (
        
        <article className="room">
          <Jumbotron  className="content">
              <div className="sect-content">
            <div className="img-container" >
                <img src={Poster} width="120" height="100" alt= "single room" />
            </div>
            <div className="">
            <p className="title">Title : {Title}</p>
            <p className="genre">Genre : {Genre}</p>
            <p className="runtime">{Runtime}</p>
                <p> <i className="fa fa-star rating"> </i> <span className="">{Ratings[0].Value}</span></p> 
      
            </div> 
            <div className="over-view">

            </div>
            </div>
            <Overview key={movie.imdbID} movie={movie} />
          </Jumbotron>
          
             
            
          
        </article>
        
    )
}