import express from "express";
import morgan from "morgan";
import router from "../src/routes/index.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const server = express();

server.use(morgan("dev"));
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(express.json());

// server.use((req, res, next) => {
//   next();
// });

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  console.log(`por aqui pasa el middle`);
  next();
});

server.use("/", router);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server;

// import express from "express";
// import morgan from "morgan";
// import router from "../src/routers/index.js";

// const server = express();

// server.use(morgan("dev"));
// server.use(express.json());

// server.use((req, res, next) => {
//   console.log(`por aqui pasa el middle`);
//   next();
// });

// server.use("/", router);

// export default server;
