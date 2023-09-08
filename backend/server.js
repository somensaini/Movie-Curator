require('dotenv').config()
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
const bodyParser = require("body-parser")

// Console log the port
console.log(process.env.NODE_ENV)

app.get("/api/v1", (req, res) => {
  res.send("Hello!")
})

// Passport Config
require("./config/passport")(passport);

//Connect To Database
connectDB()

app.use(logger)
app.use(cors(corsOptions))

// Sessions
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Use the JSON middleware function built into Express. It parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json())

// Parse cookies
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

//Use .env file in config folder
// dotenv.config({ path: "./config/.env" })

// This will send the user all static files in the public directory when they are on the root page
app.use(express.static('public'))

// This will respond to any path that starts with '/' regardless of the HTTP request and it will use the root.js router
app.use('/', require('./routes/root'))
app.use('/auth', require('./routes/authRoutes'))
app.use('/user', require('./routes/userRoutes'))
app.use('/list', require('./routes/listRoutes'))
// app.use('/search', require('./routes/searchRoutes'))

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

//Using EJS for views
// app.set("view engine", "react");

//Body Parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(errorHandler)

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