require('dotenv').config()
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: 'mail.akbarhabiby.me',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const sendMail = (fullname, email, flightNumber, travel, airline, dateflight) => {
    let output = `
        <p>Selamat <b>${fullname}!</b> Kamu berhasil membeli tiket di <b>Skypedia!</b></p>
        <h3>Booking Details</h3>
    
        <b>- Nama Penumpang</b>:<br>
        ${fullname}
        <br><br>
        <b>- Email:</b><br>
        ${email}
        <br><br>
        <b>- Nomor Penerbangan:</b><br>
        ${flightNumber}
        <br><br>
        <b>- Penerbangan:</b><br>
        ${travel}
        <br><br>
        <b>- Maskapai:</b><br>
        ${airline}
        <br><br>
        <b>- Tanggal Keberangkatan:</b><br>
        ${dateflight}
    `

    let mailOptions = {
        from: 'skypedia@akbarhabiby.me',
        to: email,
        subject: '[Dari Skypedia] Informasi tentang Pembelian tiket',
        html: output
    }

    transporter.sendMail(mailOptions, err => {
        if (err) {
            console.log('Error!: ' + err)
        } else {
            console.log(`Berhasil Kirim email ke ${email}`);
        }
    })
}

module.exports = sendMail