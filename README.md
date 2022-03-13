<h1 align="center">
  Discord Bot Template
</h1>

<h4 align="center">Discord Bot Template using Slash Commands</h4>

<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#using">Using</a> •
  <a href="#structure">Structure</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

## About

This is a template for a simple discord bot with some built-in features that uses the new Discord.js version with slash commands. When developed for custom needs and ready to go, please read global commands on [Discord.js guide](https://discordjs.guide/interactions/slash-commands.html#global-commands).

## Features

Note that for a user to be saved on the database he must interact with the server after the bot entered the server. It can be changed easily but It is done this way to prevent saving inactive members for save data as the database is in free tier.

Also Note that the code is commented, as the function names and variables are pretty much self explanatory the comments are only to type variables as VSCode type commented js with decorators (so there was no need for typescript).

* Command Handler
  * All commands in ``src/commands`` folder are handled by default
  * All commands will also be published to discord API on start
  * Bult-in Commands:
    * ``ping``
    * ``custom-reply``
    * ``balance``
    * ``transfer``
* Events Handler
  * All events in ``src/events`` folder are handled by default
  * Bult-in Events:
    * ``interactionCreate``
    * ``messageCreate``
* Database
  * Bult-in database implementation
  * MONGODB is used because of excellent free tier
  * mongoose is used to model the data schema
* Level UP System
  * Experience will be granted to users that send messages on a server, with time they will level up
  * Bult-in implementation uses log2 function so the amount of messages needed will always double
* Custom Reply System
  * Users with Custom Reply Manager role will be granted permissions to manage bot custom replies
* Currency System
  * On first saved in database users will be granted 10 currencies
  * Users can transfer currency to another user

## Using

To run this project you will need:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/en/)

From your terminal run the commands:

```bash
git clone https://github.com/cassiofb-dev/discord-bot-template

cd discord-bot-template

npm i
```

Now make a ``.env`` file in the root folder with the variables needed in the ``config.js`` file.

After that run the command:

```bash
npm start
```

## Structure

* src - project source code folder
  * commands - all commands goes here
  * core - core things to run commands and events the heart of the project
    * classes - classes declarations
    * database - all database implementation goes here
      * custom-reply - custom reply data modeling and services
      * guild-user - guild user data modeling and services
    * features - bot features
    * handlers - core handlers (commands, events and authorization)
  * events - all events goes here
  * config.js - bot configuration defined in .env file
  * main.js - main file, starts bot
* .env - env files (secrets)
* .gitignore - git doesn't track
* package.json - project package configuration, script and dependencies

```txt
📦src
 ┣ 📂commands
 ┃ ┣ 📜balance.js
 ┃ ┣ 📜custom-reply.js
 ┃ ┣ 📜ping.js
 ┃ ┗ 📜transfer.js
 ┣ 📂core
 ┃ ┣ 📂classes
 ┃ ┃ ┣ 📜command.js
 ┃ ┃ ┣ 📜discord-bot.js
 ┃ ┃ ┗ 📜event.js
 ┃ ┣ 📂database
 ┃ ┃ ┣ 📂custom-reply
 ┃ ┃ ┃ ┣ 📜custom-repliy.js
 ┃ ┃ ┃ ┣ 📜custom-reply.model.js
 ┃ ┃ ┃ ┗ 📜custom-reply.service.js
 ┃ ┃ ┣ 📂guild-user
 ┃ ┃ ┃ ┣ 📜guild-user.js
 ┃ ┃ ┃ ┣ 📜guild-user.model.js
 ┃ ┃ ┃ ┗ 📜guild-user.service.js
 ┃ ┃ ┗ 📜database.js
 ┃ ┣ 📂features
 ┃ ┃ ┣ 📜currency-system.js
 ┃ ┃ ┣ 📜custom-reply-system.js
 ┃ ┃ ┗ 📜level-up-system.js
 ┃ ┗ 📂handlers
 ┃ ┃ ┣ 📜authorization.handler.js
 ┃ ┃ ┣ 📜command.handler.js
 ┃ ┃ ┗ 📜event.handler.js
 ┣ 📂events
 ┃ ┣ 📜interaction-create.js
 ┃ ┗ 📜message-create.js
 ┣ 📜config.js
 ┗ 📜main.js
```

## Credits

This project uses the following open source projects:

* [Node.js](https://github.com/nodejs/node)
* [Discord.js](https://github.com/discordjs/discord.js)
* [dotenv](https://github.com/motdotla/dotenv)
* [mongoose](https://github.com/Automattic/mongoose)

## License

MIT

---

> [My website](https://cassiofernando.netlify.app/) &nbsp;&middot;&nbsp;
> GitHub [@cassiofb-dev](https://github.com/cassiofb-dev) &nbsp;&middot;&nbsp;
> Twitter [@cassiofb_dev](https://twitter.com/cassiofb_dev)
