//? Initialize express server
const express = require("express");
const app = express();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./utils/swaggerOptions.js");

//? Environment veriable initialization
const dotenv = require("dotenv");
dotenv.config();

//? Routes import
const firstRoute = require("./routes/firstRoute.js");
const userRoute = require("./routes/userRoute.js");

//? Additional imports
const { errorMiddleware } = require("./middlewares/error.js");
const { coloredLog } = require("./utils/coloredLog.js");
const { responseMiddleware } = require("./middlewares/sendResponse.js");

const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


//? Express server monitor
app.use(require("express-status-monitor")());
app.use(express.json());

//? API points
app.use("/", firstRoute);
app.use("/user", userRoute);

app.use(responseMiddleware);
app.use(errorMiddleware);

//? Starting server
app.listen(process.env.PORT || 5000, () => {
  coloredLog(`Server is running on port ${process.env.PORT || 5000}`, 4);
});
