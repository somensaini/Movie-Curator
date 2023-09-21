const express = require('express')
const app = express();
const mongoose = require('mongoose')
const passport = require('passport')
const path = require('path')
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const { logger, logEvents } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/database')
const PORT = process.env.PORT || 3500
require('dotenv').config()
require("./config/passport")(passport);


// Use the JSON middleware function built into Express. It parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Connect To Database
connectDB()

// Error Handler and Logger
app.use(errorHandler)
app.use(logger)

// CORS
app.use(cors(corsOptions))

// Express Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: false,
  })
);

// Cookie Parser
app.use(cookieParser("keyboard cat"))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// This will send the user all static files in the public directory when they are on the root page
app.use(express.static('public'))

// Routes
app.use('/', require('./routes/root'))
app.use('/dashboard', require('./routes/dashboardRoutes'))
app.use('/user', require('./routes/userRoutes'))
app.use('/list', require('./routes/listRoutes'))
app.use('/favorite', require('./routes/favoriteRoutes'))
app.use('/register', require('./routes/registerRoutes'))
app.use('/login', require('./routes/loginRoutes'))
app.use('/logout', require('./routes/logoutRoutes'))

// For all other cases it will send the 404 page
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
      res.json({ message: '404 Not Found' })
  } else {
      res.type('txt').send('404 Not Found')
  }
})

// Console log when connected and if any errors occur
// The event will only be called once
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})