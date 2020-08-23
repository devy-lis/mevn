const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
const passport = require('passport');

// Initialize 
const app = express();

// Middlewares
// Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// Json Body Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')))

// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passport')(passport);

// Bring in the Databse Config and connect to database
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => console.log(`Unable to connect to database ${err}`));

// app.get('/', (req, res) => {
//     return res.send('<h1>Mosh Mosh</h1><h2>devy-lis</h2>')
// });

// Bring in the Users route
const users = require('./routes/api/users');
app.use('/api/users', users);


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



