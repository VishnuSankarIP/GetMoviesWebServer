const express=require('express')
const movieController=require('../controller/movieController')
const router=new express.Router()




// get movie
router.get('/movies',movieController.getAllMovie)

// search movie
router.get('/search', movieController.searchMovies);


// export router
module.exports=router 


