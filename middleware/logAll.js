const logAllRequest = (req, res, next) => {
    console.log('Request pada path', req.path);
    next();
}

module.exports = logAllRequest