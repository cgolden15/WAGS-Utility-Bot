# WAGS-utility-bot
General utility bot for Winter Adventures Guide School. Created by Golden!!#8008 under Exo Development for Winter Adventures Guide School

## Hosting Setup
All information needed to get the bot up and running.

### Needed Env Variables:
```js 
token = "Discord Bot token"
stafflist = "841328132698931251"    // Staff list message ID
prefix = "*"                        // Pretty obvious if you ask me
logchannelid = "821852356194729995" // logs for ranking, shouts, ect
inchannel = "815942271308529715"    // inactivity notice channel
```
### Installing Packages:
As with any Discord Bot, you need to install the required packages. This bot currently uses the following packages.
```
discord.js
chalk
figlet
fs
dotenv
discord-auditlog
express
```
These can all be easily installed by running `npm install discord.js chalk figlet fs dotenv discord-auditlog express` in your shell.
### Removing Express Page:
If youre hosting the bot on a proper server(not replit, glitch, ect), you can remove the express app! To do this, remove the following lines from `index.js`.
```js
1| const express = require('express');
2| const app = express();
```
```js
12| app.get('/', (request, response) => {
13|     response.sendStatus(200);
14| });
15|
16| let listener = app.listen(process.env.PORT, () => {
17|      console.log('Your app is currently listening on port: ' + listener.address().port);
18| });
```
You can then make sure the express package is no longer installed by runnning `npm uninstall express` in your shell.
