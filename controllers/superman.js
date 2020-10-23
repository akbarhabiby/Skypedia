const { User } = require('../models')
const bcrypt = require('bcryptjs')

class Superman {
    static getLoginForm(req, res) {
        const success = req.query.status
        const error = req.query.error
        res.render('user/login', { success, error })
    }

    static postLoginForm(req, res) {
        const email = req.body.email
        const password = req.body.password
        User.findOne({ where: { email }})
            .then( data => {
                if (data) {
                    const match = bcrypt.compareSync(password, data.password)
                    if (match) {
                        req.session.isloggedIn = true
                        req.session.user = data
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