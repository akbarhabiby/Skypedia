class Helper {
    static convertISOdate(date) {
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return `${year}-${month}-${dt}`
    }

    static checkSearchQuery(from, destination, dateflight) {
        if (!from || !destination || !dateflight) return false
        return true
    }

    static randomBookingId() {
        const random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const salt = 10
        let result = []
    
        for (let i = 0; i < salt; i++) {
            result += random[Math.floor(Math.random() * random.length)]
        }
    
        return result
    }
}

module.exports = Helper