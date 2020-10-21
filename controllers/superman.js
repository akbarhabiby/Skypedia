const { User } = require('../models')
const bcrypt = require('bcryptjs')

class Superman {
    static getLoginForm(req, res) {
        res.render('user/login')
    }

    static postLoginForm(req, res) {
        const email = req.body.email
        const password = req.body.password
        User.findOne({ where: { email}})
            .then( data => {
                if (data) {
                    const match = bcrypt.compareSync(password, data.password)
                    if (match) {
                        req.session.isloggedIn = true
                        res.redirect('/')
                    } else {
                        res.redirect('/login/?error=Username atau password salah')
                    }
                } else {
                    res.redirect('/login/?error=Username atau password salah')
                }
            })
            .catch( err => {
                res.send(err)
            })
    }
}

module.exports = Superman