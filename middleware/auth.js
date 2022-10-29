module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }   else {
            res.redirect('/');
        }
    },
    ensureGuest: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }   else {
            res.redirect('/dashboard') // Find out what dashboard is
        }
    },
};