const { User, UserFlight, Flight, Airline, AvailableFlight, Airport } = require('../models')
const Helper = require('../helpers/helper')
const sendMail = require('../sendMail')

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

    static getEditUserProfile(req, res) {
        const userId = req.session.user.id
        const err = req.query.err
        User.findByPk(userId)
            .then( data => {
                res.render('user/profileEdit', { data, err })
            })
            .catch( err => {
                res.send(err)
            })
    }

    static postEditUserProfile(req, res) {
        const id = req.session.user.id
        const updatedProfile = {
            first_name: req.body.first_name,
            last_name: req.body.last_name
        }
        User.update(updatedProfile, { where: { id }, individualHooks: true } )
            .then( () => {
                res.redirect('/user')
            })
            .catch( err => {
                const errMsg = err.errors[0].message
                res.redirect(`/user/edit?err=${errMsg}`)
            })
    }

    static getUserHistory(req, res) {
        const userId = req.session.user.id
        const status = req.query.status
        // User.findByPk(userId, { include: [{ model: Flight, include: [ Airline, { model: AvailableFlight, include: [ Airport ]} ] }] }) // => ON PROGRESS, RELASI BELUM ADA
        User.findByPk(userId, { include: [{ model: Flight, include: [ Airline, AvailableFlight ] }] })
            .then( data => {
                // res.send(data)
                res.render('user/history', { data, status, convertDate: Helper.convertISOdate, penerbangan: AvailableFlight.penerbangan })
            })
            .catch( err => {
                res.send(err)
                console.log(err);
            })
    }

    static getBuyFlight(req, res) {
        const flightId = req.params.flight
        const userId = req.session.user.id
        const bookingId = Helper.randomBookingId()
        const newUserFlight = {
            UserId: userId,
            FlightId: flightId,
            bookingId: bookingId
        }

        // Do send mail
        let fullname
        let email
        let flightNumber
        let travel
        let airline
        let dateflight
        User.findByPk(userId)
            .then( data => {
                fullname = data.fullName(data.first_name, data.last_name)
                email = req.session.user.email
                return Flight.findByPk(flightId, { include: [ Airline, AvailableFlight ] })
            })
            .then( flightData => {
                flightNumber = flightData.flightNumber
                travel = `${flightData.AvailableFlight.FromIATA} ke ${flightData.AvailableFlight.ToIATA}`
                airline = flightData.Airline.airlineName
                dateflight = Helper.convertISOdate(flightData.dateflight)
                sendMail(fullname, email, flightNumber, travel, airline, dateflight)

                // Return
                return UserFlight.create(newUserFlight)
            })
            .then( () => {
                res.redirect(`/user/history?status=Berhasil membeli tiket pesawat, silahkan cek kotak inbox / spam email ${email}`)
            })
            .catch( err => {
                res.send(err)
            })
    }

    static getDeleteFlightHistoryById(req, res) {
        const UserId = req.session.user.id
        const FlightId = +req.params.id
        UserFlight.destroy({ where: { UserId, FlightId}})
            .then( () => {
                res.redirect('/user/history')
            })
            .catch( err => {
                res.send(err)
            })
    }
}

module.exports = UserController