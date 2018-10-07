require('dotenv').config();
const SlackBot = require('slackbots');
const token = process.env.BOT_TOKEN;

module.exports = bot = new SlackBot({
    token: token,
    name: 'Doraebot'
});