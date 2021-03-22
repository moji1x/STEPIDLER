console.clear();
console.log('\x1B[31mLoading\x1B[34m .....');
const SteamUser = require('steam-user');
const open = require('open');
let config = null;
const path = require("path");
const user = new SteamUser();
var fs = require("fs");
config = require(path.resolve("config.json"));
let configRaw = fs.readFileSync("./config.json").toString();
/////////////////////////*steam*///////////////////////////////

/////////////////////////////*Include*/////////////////////
gamesPlayed = config.game

const logOnOptions = {
	accountName: config.login,
	password: config.pass,
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.clear();
	console.log ('   _____________________     ________  __    __________ ');
	console.log ('  / ___/_  __/ ____/ __ \   /  _/ __ \/ /   / ____/ __ \ ');
	console.log ('  \__ \ / / / __/ / /_/ /   / // / / / /   / __/ / /_/ /');
	console.log (' ___/ // / / /___/ ____/  _/ // /_/ / /___/ /___/ _, _/ ');
	console.log ('/____//_/ /_____/_/      /___/_____/_____/_____/_/ |_|  ');
	console.log ('                                                        ');
	console.log ('Welcome to $tep Idler');
	console.log('Logged on ' + logOnOptions.accountName + ' @ Idler made by @Moji#4583 ');
	user.setPersona(1);
	gamesPlayed: config.game,
	user.gamesPlayed(config.game);
});


	
user.on('friendRelationship', (steamid, relationship) => {
  if (relationship === 2) {
    user.addFriend(steamid);
    user.chatMessage(steamid, '/pre Hello there! You were auto added by Idler to being keep in friendlist verify Yourself on Discord');
	user.chatMessage(steamid, '/pre Join my Discord');
	user.chatMessage(steamid, 'https://discord.gg/9KCP2mg9');
	user.chatMessage(steamid, "/pre write in discord: !suggest https://steamcommunity.com/profiles/" + steamid + ' . ');
  }
});

user.on('friendMessage', function(steamid, message, steamname) {
	console.log("message from:" + steamid + ": " + message);
});
////////////////////////////*Steam things*///////////////////



