const auth = (req, res, next) => {
    if (!req.session.isloggedIn) res.redirect('/login')
    next()
}

const authLogin = (req, res, next) => {
    if (req.session.isloggedIn) res.redirect('/home')
    next()
}

const firstRegister = (req, res, next) => {
    //
}

module.exports = { auth, authLogin, firstRegister }