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

   
// Set static path
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

// Set port
const PORT=5000


//Mount routers
app.use('/api/movies', movies)


app.listen(PORT,()=>{
    console.log(PORT,`server running in  mode on port `)
})



