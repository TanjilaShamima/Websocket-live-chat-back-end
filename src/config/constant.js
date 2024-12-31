const dotenv = require("dotenv");
dotenv.config();

const appConfig = {
  name: process.env.API_NAME || "API",
  // version: process.env.API_VERSION || "1.0.0",
  port: process.env.APP_PORT || 5000,
  appDomain: process.env.APP_DOMAIN || "http://localhost:8000",
  // frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
  environment: process.env.NODE_ENV || "dev",
  db: {
    mongoDbUrl: process.env.MONGODB_URI || "",
  },
  // email: {
  //     host: process.env.MAIL_HOST,
  //     port: process.env.MAIL_PORT,
  //     userName: process.env.MAIL_USERNAME,
  //     password: process.env.MAIL_PASSWORD,
  // },
  // jwt: {
  //     jwtActivationKey: process.env.JWT_ACTIVATION_KEY,
  //     jwtAccessKey: process.env.JWT_ACCESS_KEY,
  //     jwtPasswordResetKey: process.env.JWT_RESET_PASSWORD_KEY,
  // },
  regex: {
    emailRegex: /^[\w-\.]+(\+\d+)?@([\w-]+\.)+[\w-]{2,4}$/,
    passwordRegex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  },
  // convertApiSecret: process.env.CONVERT_API_SECRET,
};

module.exports = { appConfig };
