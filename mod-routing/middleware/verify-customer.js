//middleware handles things like logged in/out?
//this function will allow validated customer to proceed

function verifyCustomer(req, res, next) {
    //logic we need to implement how we validate access to user
    
    req.username = 'fred_flintstone'
    
    if (req.method.toLowerCase() === 'get') {
        next();
    } else {
        res.status(401).json( {status: 'not allowed'} )
    }
}

module.exports = verifyCustomer;