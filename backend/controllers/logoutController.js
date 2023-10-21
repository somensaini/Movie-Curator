// POST
// Logout the User
const postLogout = (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        return res.status(200).json({ message: "Logout Success" });
    });
};

module.exports = {
    postLogout  
}