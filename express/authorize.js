const authorize = (req,res,next) =>{
    const {user} = req.query;
    if (user === 'Matthew') {
        req.user = {name: 'Matthew', id: 1}
        next()
    }
    else{
        res.status(401).send('Unathorized')
    }
}

module.exports = authorize