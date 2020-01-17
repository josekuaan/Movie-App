import React, { Component } from 'react'


// context

 export const MovieContext = React.createContext()
  
export class MovieProvider extends Component {

    state ={
        search:"",
        movies:[],
        isloading:false
      }

    searchMovie(event){
        event.preventDefault()
        this.fetchMovie()
       
    }

    handleChange(event){
   const {name,value} = event.target
    this.setState({ [name] : value})
    }

    fetchMovie(){
        this.setState({isLoading :true})

        
        if(this.state.search === " "){
            console.log("ok")
            return "please you need to type in a movie"
            
        }
         

        
        const data = {
            name: this.state.search
        }
        //   if(data)
        const obj = JSON.stringify(data)
        
  console.log(obj)
        fetch("api/movies",{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'content-type': 'application/json'
            },
            body:obj 
            })
            .then(response => response.json())
            .then( data =>{
               console.log(data)
              return  this.setState({movies:this.state.movies.concat(data.data)})
              
           }).catch( err =>{console.log(err)})
       }
      render() {
 
    }
    render() {
        return (
            <MovieContext.Provider value={{
                ...this.state,
                fetchMovie:this.fetchMovie.bind(this),
                searchMovie :this.searchMovie.bind(this),
                handleChange :this.handleChange.bind(this)
            }}>
                
                {this.props.children}
            </MovieContext.Provider>
        )
    }
}

