function adminMiddleware (req, res, next) {
    switch (req.query.user) {
        case "Ada" || "Greta" || "Vim" || "Tim":
            next();
            break;   
        default:
            res.send("Rajá de acá")
    }
}

module.exports = adminMiddleware;