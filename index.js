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
    }

    pluginWillUnload() {
        powercord.api.settings.unregisterCommand('woke');
    }
};
