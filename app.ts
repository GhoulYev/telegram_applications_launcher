import { Telegraf } from 'telegraf';
import { Keyboard, MakeOptions } from 'telegram-keyboard';
import { exec } from 'child_process';
import fs from 'fs';

const bot = new Telegraf("TOKEN");


const createKeyboard = (): Keyboard => {
    let butt: any = [];

    fs.readdirSync("./pointers/").forEach(lnk=>{
        let buff = [lnk.split(".")[0]]
        butt.push(buff);
    })

    return Keyboard.combine(
        Keyboard.make(butt),
        Keyboard.make([["Refresh"]])
    );
}

bot.start(ctx=>{
    ctx.reply("Hi", createKeyboard().reply());
})


bot.on("text", ctx => {
    const msg = ctx.message.text;
    if(msg == "Refresh"){
        ctx.reply("Refreshing..", createKeyboard().reply())
    } else {
        exec(`"${__dirname}/pointers/${msg}.lnk"`)
        ctx.reply(`Open ${msg}`, createKeyboard().reply());
    }
})

console.log("bot is launching")
bot.launch();