const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')


// Route file
const movies = require('./routes/movies')


//Load dotenv vars
dotenv.config({path:'./config/config.env'})
   
//Initialize express
const app = express() 

// Cors 
app.use(cors({credentials: true, origin: true}))

//Log request middleware
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}

//Body-parser
app.use(express.json() ) 



//Mount routers
app.use('/api/movies', movies)

// Set port
const PORT= process.env.NODE_ENV || 5000

// Set static path
if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
      });
}



app.listen(PORT,()=>{
    console.log(PORT,`server running in  mode on port `)
})



