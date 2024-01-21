var createError = require("http-errors");
var express = require("express");
var logger = require("morgan");
const cors = require("cors");
const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = require("./conuhacksviii-esmc-firebase-adminsdk-mu0l4-e437381e52.json");

initializeApp({
  credential: cert(serviceAccount),
});

var usersRouter = require("./routes/users");
var postsRouter = require("./routes/posts");
var commentsRouter = require("./routes/comments");
var sponsorsRouter = require("./routes/sponsors");

var app = express();

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/sponsors", sponsorsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
