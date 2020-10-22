const { User } = require("../models")

class Ironman {
    static getRegisterForm(req, res) {
        res.render('user/register')
    }

    static postRegisterForm(req, res) {
        const newSuperman = { email: req.body.email, password: req.body.password}
        User.create(newSuperman)
            .then( data => {
                res.redirect('/login?status=Berhasil daftar! Silahkan login untuk melanjutkan')
            })
            .catch( err => {
                res.send(err)
            })
    }
}

module.exports = Ironman