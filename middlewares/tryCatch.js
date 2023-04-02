const tryCatchMiddleware = (passesdFucntion) => (req, res, next) => {
    Promise.resolve(passesdFucntion(req, res, next)).catch(next)
}

module.exports = tryCatchMiddleware;