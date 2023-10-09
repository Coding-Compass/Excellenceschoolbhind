const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require('body-parser');
const app = express();
const nodemailer = require('nodemailer');
const port = 10;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));


// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'public')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res) => {
    const params = ""
    res.status(200).render('index.pug', params);
})
app.get('/facaulty', function (req, res) {
    const params = ""
    res.status(200).render('fecaulty.pug', params);
    // res.sendFile(path.join(__dirname, '/public/fecaulty.html'));
});
app.get('/study-material', function (req, res) {
    const params = ""
    res.status(200).render('IT&Security.pug', params);
    // res.sendFile(path.join(__dirname, '/public/IT&Security.html'));
});
app.get('/vocational', function (req, res) {
    const params = ""
    res.status(200).render('vocational.pug', params);
    // res.sendFile(path.join(__dirname, '/public/vocational.html'));
});
app.get('/contact-us', function (req, res) {
    const params = ""
    res.status(200).render('contact.pug', params);
    // res.sendFile(path.join(__dirname, '/public/contact.html'));
});
app.get('/about-vocational', function (req, res) {
    const params = ""
    res.status(200).render('about-vocational.pug', params);
    // res.sendFile(path.join(__dirname, '/public/about-vocational.html'));
});
app.get('/IT-study-material', function (req, res) {
    const params = ""
    res.status(200).render('IT-study-material.pug', params);
    // res.sendFile(path.join(__dirname, '/public/IT-study-material.html'));
});
app.get('/security-study-material', function (req, res) {
    const params = ""
    res.status(200).render('Security-study-material.pug', params);
    // res.sendFile(path.join(__dirname, '/public/Security-study-material.html'));
});
// app.use((req, res) => {
//     const params = ""
//     res.status(404);
//     res.send(`<h2>Error 404: Resource not found</h2>`)
// })

//Mail sent stuff

app.post('/contact-us', (req, res) => {
    const name = req.body.Name;
    const email = req.body.Email;
    const number = req.body.Number;
    const message = req.body.textarea;
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sumitsharma72324@gmail.com',
        pass: 'vdrf xdkf ezza nymv'
      }
    })
    var mailOptions = {
      from: req.body.Email,
      to: " excellenceschoolbhind@gmail.com ",
      // cc: " excellenceschoolbhind@gmail.com ",
      subject: "A message from " + name,
      text: message
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Something Went Wrong!" + error)
      } else {
        const params = ""
        res.status(200).render('contact.pug', params);
        // alert("Message sent succesfully.");
      }
    })
  });


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
