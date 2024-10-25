// const generate = require('password-generator')


// console.log(generate(12,false))

// // *************************************
// console.log('Hello World')

// const http = require('http')


// const server = http.createServer((req,res) => {
//     res.write('<h1>Hello Node!!!!</h1>\n')
//     res.end()
// }) 
// server.listen(3000)


// // *************************************

// const fs = require('fs')

// fs.writeFileSync('welcome.txt', 'Hello node')

// const generate = require('password-generator')


// console.log(generate(12,false))

// ***********************************************

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'test@gmail.com',
    pass: '1234'
  }
});

const mailOptions = {
  from: 'test@gmail.com',
  to: 'test@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});