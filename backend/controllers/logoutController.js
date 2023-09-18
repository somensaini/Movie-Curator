const postLogout = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.send("Logout Success")
    });
};

module.exports = {
    postLogout  
}