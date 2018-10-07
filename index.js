const bot = require('./lib/bot.js');
const shuffle = require('./lib/shuffle');
const schedule = require('node-schedule');
const users = [];
let channelId = '';
let lunch = true;

const paramsIco = { icon_emoji: ':robot_face:' };

bot.on('start', () => {
    const initialMsg = `Hello everyone! I'm ${bot.name}!!`
    bot.postMessageToChannel('general', initialMsg, paramsIco);

    bot.getChannels()
        .then(channels => channelId = (channels.channels.filter(e => e.name === 'general'))[0].id)

});

schedule.scheduleJob('0 0 10 * * 5', () => {
    const paramsLunch = {
        icon_emoji: ':robot_face:',
        attachments: [{
            "text": "React with an emoji or say me to participate",
            "color": "#000",
        }]
    };
    const goToLunch = 'Ey! Who is going to have lunch out today?'

    bot.postMessageToChannel('general', goToLunch, paramsLunch);
    lunch = true;
});

const getUser = id => bot.getUserById(id)

bot.on('message', msg => {
    const { user, text } = msg;
    let name = '';
    if (lunch && text === 'me') {
        getUser(user)
        .then(user => name = user.real_name)
        .then(() => {
            const alreadyIn = users.find(u => u.name === name);
            if (alreadyIn) {
                bot.postMessageToChannel('general', `You have already signed up ${name}!`, paramsIco)
            } else {
                users.push({ name: name, role: null });
                bot.postMessageToChannel('general', `You've been added to lunch, ${name}!`, paramsIco)
            };
        });
    };
});

schedule.scheduleJob('0 0 12 * * 5', () => {
    const groupsToLunch = shuffle(users);
    let response = '';
    groupsToLunch.forEach((group, i) => {
        response += `\nGroup ${String.fromCharCode(i + 65)}:  `
        group.forEach((user, i) => {
            if (user.role === 'Leader') {
                response += ` ${user.name} (Leader) `
            } else {
                response += `- ${user.name} `;
            }
        });
    });
    bot.postMessageToChannel('general', response, paramsIco);
});