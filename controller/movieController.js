const movies=require('../Model/movieModel')

// get movie
exports.getAllMovie=async(req,res)=>{
   
    try{
        const allMovies=await movies.find()
        res.status(200).json(allMovies)

    }
    catch(err)
    {
        res.status(401).json(err)
    }
}

// search movie

exports.searchMovies = async (req, res) => {
    try {
        const title = req.query.title;
        const searchmovies = await movies.find({ title: new RegExp(title, 'i') });
        res.status(200).json(searchmovies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};