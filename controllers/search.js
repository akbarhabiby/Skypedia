const { AvailableFlight, Flight, Airline } = require('../models')
const Helper = require('../helpers/helper')

class SearchFlight {
    static postSearchFlights(req, res) {
        const checkQuery = Helper.checkSearchQuery(req.body.from, req.body.destination, req.body.dateflight)
        
        if (checkQuery) {
            const query = `?from=${req.body.from}&destination=${req.body.destination}&dateflight=${req.body.dateflight}`
            res.redirect('/search' + query)
        } else {
            res.redirect('/?msg=Lengkapi detail keberangkatan anda')
        }
    }
    
    static getSearchFlights(req, res) {
        const from = req.query.from
        const destination = req.query.destination
        const dateflight = req.query.dateflight
        let dataAvail
        AvailableFlight.findOne({ where: { FromIATA: from, ToIATA: destination}, include: { model: Flight, where: { dateflight: new Date(dateflight)} }})
            .then( data => {
                dataAvail = data
                return Airline.findAll()
            })
            .then( result => {
                if (!dataAvail) {
                    res.render('404')
                } else {
                    res.render('searchAvail', { dataAvail, result, dateflight })
                }
            })
            .catch( err => {
                res.send(err)
            })
    }
}

module.exports = SearchFlight