
const request = require('request')


//@desc    Get Specific movie 
//@route   GET api/movie?name=name
//@access  Public
exports.getMovies =  (req,res,next)=>{
    // console.log(req.query)

    const name = req.body.name
    // let unknown = season ? `$${season}` : ''
    // console.log("unkwn",unknown)
    console.log("ok",name)
    const url = `http://www.omdbapi.com/?t=${name}&apikey=${process.env.OMDB_API_KEY}`
    console.log(url)
    try {
    
        request({
                url: `http://www.omdbapi.com/?t=${name}&apikey=${process.env.OMDB_API_KEY}`,
                json:true
            }, (error,response,body )=>{
                if(!error && response.statusCode === 200){
                    console.log("***************",response.statusCode)
                    res.status(200).json({
                        success:true,
                        data:body
                    })
                }else {
                    res.json({
                        success:false,
                        message:"unable to connect to OMDB server"
                    })
                }
        
               
            }) 
      
        } catch (err) {
            res.status(404).json({
                success:false,
                message:"unable to connect to OMDB server"
            })
        }

}


//@desc    Get all movies 
//@route   GET api/movies
//@access  Public
exports.getAllMovie = (req,res,next)=>{
    // const name = req.query
    try {
   
        request({
                url: `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.OMDB_API_KEY}`,
                json:true
            }, (error,response,body )=>{
                if(!error && response.statuscode === 200){
                    console.log(body)
                    console.log("***************",response.statusCode)
                    res.status(200).json({
                        success:true,
                        data:body
                    })
                }else {
                    res.status(404).json({
                        success:false,
                        message:"unable to connect to OMDB server"
                    })
                }
        
               
            }) 
      
        } catch (err) {
            res.status(404).json({
                success:false
            })
        }
}