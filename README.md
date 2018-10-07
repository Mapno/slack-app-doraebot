# slack-app-gordify

Slack bot done with <a href="https://www.npmjs.com/package/slackbots">slackbots</a> npm module.

Bot made to go out for lunch on fridays with new coworkers every week.

## Installation
To use this bot, first fork and ```git clone <YOUR_REPOSITORY>``` this repository.

You will need to install the npm packages used in this app.

```npm install```

## Configuration

A Slack app key is needed to run this bot. That key needs to be used as an environment variable.

```
BOT_TOKEN=xoxb-xxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxx npm start
```

Once started, the bot will ask for people to sign up for lunch on the general channel from 10:00 to 12:00 on fridays.

After said time, groups will be randomly created and leaders assigned.

To run the tests type the next command in console. Test are done with mocha module.

```
npm test
```

## Contributing

If you are interested in contributing to Doraebot, or leave some feedback, feel free to open an issue or to contact me at my email.