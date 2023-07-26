require("dotenv").config();

exports.config = {
  PORT:process.env.PORT,
  TOKEN_SECRET:process.env.TOKEN_SECRET,
  MONGO_CONNECTION:process.env.MONGO_CONNECTION,
  EMAIL_ADMIN:process.env.EMAIL_ADMIN,
  PASS_GOOGLE_ADMIN:process.env.PASS_GOOGLE_ADMIN
  // CLOUD_NAME:"dccoiwwxy",
  // CLOUD_KEY:"664974667326928",
  // CLOUD_SECRET:"dZhz2yfM5I8k9OB60HO9zVprjpI"
  
}