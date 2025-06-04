const setImagePath = (req, res, next) => {
    req.imagePath = `${req.protocol}://${req.get(`host`)}/imgs/movies/`
    next()
}

module.exports = setImagePath