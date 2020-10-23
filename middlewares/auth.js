const e = require("express")

const auth = (req, res, next) => {
    if (!req.session.isloggedIn) {
        res.redirect('/login')
    } else {
        next()
    }
}

const authLogin = (req, res, next) => {
    if (req.session.isloggedIn) {
        res.redirect('/')
    } else {
        next()
    }
}

const authHome = (req, res, next) => {
    if (!req.session.isloggedIn) {
        res.render('public')
    } else {
        next()
    }
}

module.exports = { auth, authLogin, authHome }