const { User, UserFlight, Flight, Airline, AvailableFlight, Airport } = require('../models')
const Helper = require('../helpers/helper')

class UserController {
    static getLengkapiProfil(req, res) {
        res.render('user/lengkapi', { user: req.session.user })
    }

    static postLengkapiProfil(req, res) {
        const id = req.session.user.id
        const update = {
            first_name: req.body.first_name,
            last_name: req.body.last_name
        }
        User.update(update, { where: { id }, returning: true, individualHooks: true })
            .then( data => {
                req.session.user.first_name = data[1][0].first_name
                res.redirect('/')
            })
            .catch( err => {
                res.send(err)
            })
    }

    static getUserProfile(req, res) {
        const userId = req.session.user.id
        User.findByPk(userId)
            .then( data => {
                res.render('user/profile', { data })
            })
            .catch( err => {
                res.send(err)
            })
    }

    static getUserHistory(req, res) {
        const userId = req.session.user.id
        // User.findByPk(userId, { include: [{ model: Flight, include: [ Airline, { model: AvailableFlight, include: [ Airport ]} ] }] }) // => ON PROGRESS, RELASI BELUM ADA
        User.findByPk(userId, { include: [{ model: Flight, include: [ Airline, AvailableFlight ] }] })
            .then( data => {
                // res.send(data)
                res.render('user/history', { data, convertDate: Helper.convertISOdate, penerbangan: AvailableFlight.penerbangan })
            })
            .catch( err => {
                res.send(err)
            })
    }

    static getBuyFlight(req, res) {
        const flightId = req.params.flight
        const userId = req.session.user.id
        const newUserFlight = {
            UserId: userId,
            FlightId: flightId,
            bookingId: Helper.randomBookingId()
        }

        UserFlight.create(newUserFlight)
            .then( data => {
                res.send(data)
            })
            .catch( err => {
                res.send(err)
            })
    }
}

module.exports = UserController