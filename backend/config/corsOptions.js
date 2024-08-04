const allowedOrigins = require("./allowedOrigins")

const corsOptions = {
  //   origin: (origin, callback) => {
  //     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
  //       callback(null, true)
  //     } else {
  //       callback(new Error("Not allowed by CORS"))
  //     }
  //   },
  //   credentials: true,
  //   optionsSuccessStatus: 200,
  //   allowedHeaders: "Content-Type, Authorization",
  origin: "http://localhost:5173/login", // Replace with your frontend domain
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
}

module.exports = corsOptions
