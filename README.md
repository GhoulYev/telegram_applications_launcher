# Telegram applications launcher

## About

#### This script allows you to run applications on PC via Telegram bot.

![Script appearance](https://i.imgur.com/6BqTltm.png)

## Install and Launch

To run the script you will need to download ```NodeJs (>18.16)``` and ```Yarn(>1.22.19)```.

In Telegram you need to create a bot via ```BotFather``` and insert the token in the field: 

```const bot = new Telegraf("TOKEN");```

In the pointers directory, you must delete the ``example.lnk`` file and move the necessary application references.

Then type in the terminal:

```
$yarn install

$yarn start
```

Open the bot, type ```/start``` and have fun! 