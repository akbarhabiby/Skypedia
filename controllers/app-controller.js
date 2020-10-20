const { Airline, Airport, Flight } = require('../models')

class Controller {
    static getHome(req, res) {
        res.render('index')
    }

    static getAllAirlines(req, res) {
        Airline.findAll()
            .then( data => {
                res.render('listAllAirlines', { data })
            })
            .catch( err => {
                res.send(err)
            })
    }

    static getAirlineFlights(req, res) {
        const id = +req.params.id
        Airline.findByPk(id, { include: Flight})
            .then( data => {
                if (data) {
                    res.render('listAllFlights', { data })
                } else {
                    res.render('404')
                }
            })
            .catch( err => {
                res.send(err)
            })
    }

    static getAllAirports(req, res) {
        Airport.findAll()
            .then( data => {
                res.render('listAllAirports', { data })
            })
            .catch( err => {
                res.send(err)
            })
    }
}

module.exports = Controller