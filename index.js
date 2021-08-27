const { Plugin } = require('powercord/entities');

module.exports = class Toxicity extends Plugin {
    /* Entry Point */
    async startPlugin() {
        powercord.api.commands.registerCommand(
            {
                command: "woke",
                description: "mAkEs tExT lOoK lIkE tHiS",
                usage: "{c} [text]",
                executor: args => {
                    args.pop(); args.pop();
                    if(args.length == 0) {
                        return {
                            send: false,
                            result: "Usage: `.woke [text]`"
                        }
                    }
                    console.log(args);

                    let inText = args.join(" ");
                    let resultText = "";

                    let index = 0;
                    for(let char of inText) {
                        if(char != / +/) {
                            switch(index % 2 == 0) {
                                case true: {resultText += char.toLowerCase(); break;}
                                case false: {resultText += char.toUpperCase(); break;}
                            }
                        } else {resultText += char;}
                        index += 1;
                    }
                    return {
                        send: true,
                        result: resultText
                    }
                }
            }
        );
        powercord.api.commands.registerCommand(
            {
                command: "clap",
                description: "👏i👏wanna👏die👏",
                usage: "{c} [text]",
                executor: args => {
                    args.pop(); args.pop();
                    if(args.length == 0) {
                        return {
                            send: false,
                            result: "Usage: `.clap [text]`"
                        }
                    }
                    console.log(args);

                    let resultText = "";
                    resultText += "👏";
                    for(let i = 0; i < args.length; i++) {
                        resultText += args[i] + "👏";
                    }
                    return {
                        send: true,
                        result: resultText
                    }
                }
            }
        );
    }

    pluginWillUnload() {
        powercord.api.settings.unregisterCommand('woke');
        powercord.api.settings.unregisterCommand('clap');
    }
};
