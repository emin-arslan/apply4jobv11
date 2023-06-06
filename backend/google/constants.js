require("dotenv").config();

const auth = {
  type: "OAuth2",
  user: "ace.katliam@gmail.com",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
  from: "Siddhant <ace.katliam@gmail.com>",
  to: "ace.katliam@gmail.com",
  subject: "Gmail API NodeJS",
};

module.exports = {
  auth,
  mailoptions,
};