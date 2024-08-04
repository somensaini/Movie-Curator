require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const app = express()
const path = require("path")
const { logger, logEvents } = require("./middleware/logger")
const errorHandler = require("./middleware/errorHandler")
const cookieParser = require("cookie-parser")
const connectDB = require("./config/database")
const mongoose = require("mongoose")
const passport = require("passport")
require("./config/passport")(passport)
// const session = require("express-session");
const session = require("cookie-session")
const PORT = process.env.PORT || 3500

// Use the JSON middleware function built into Express. It parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Connect To Database
connectDB()

// Error Handler and Logger
app.use(errorHandler)
app.use(logger)

// CORS
// app.use(cors(corsOptions))
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Authorization, Content-Type",
  })
)
// Express Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Cookie Parser
app.use(cookieParser("keyboard cat"))

// This will send the user all static files in the public directory when they are on the root page
app.use(express.static("public"))

// Routes
app.use("/login", require("./routes/loginRoutes"))
app.use("/dashboard", require("./routes/dashboardRoutes"))
app.use("/user", require("./routes/userRoutes"))
app.use("/list", require("./routes/listRoutes"))
app.use("/favorite", require("./routes/favoriteRoutes"))
app.use("/register", require("./routes/registerRoutes"))
app.use("/logout", require("./routes/logoutRoutes"))
app.use("/", require("./routes/root"))

// The event will only be called once
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB")
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on("error", (err) => {
  console.log(err)
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  )
})
