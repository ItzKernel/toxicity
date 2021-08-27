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
        powercord.api.commands.registerCommand(
            {
                command: "uwuify",
                description: "Makes youw sententse look like a tsewtified fuwwy wwote it >~<",
                usage: "{c} [text]",
                executor: args => {
                    args.pop(); args.pop();
                    if(args.length == 0) {
                        return {
                            send: false,
                            result: "Usage: `.uwuify [text]`"
                        }
                    }
                    console.log(args);

                    let inText = args.join(" ");
                    let resultText = inText;

                    let uwus = [
                        "uwu",
                        "owo",
                        "úwú",
                        ">w<",
                        "\\♥w\\♥",
                        "✧w✧",
                        "^w^",
                        ">~<",
                        ":3",
                        "x3",
                        "QwQ",
                        "-W-",
                    ]


                    resultText = resultText.replaceAll("cute", "Ԅ");
                    resultText = resultText.replaceAll("ent", "ehnt");
                    resultText = resultText.replaceAll("uck", "awk");
                    resultText = resultText.replaceAll("tch", "s");
                    resultText = resultText.replaceAll("cock", "cawk");
                    resultText = resultText.replaceAll("app", "awp");
                    resultText = resultText.replaceAll("this", "thiws");
                    resultText = resultText.replaceAll("ow", "aw");
                    resultText = resultText.replaceAll("ll", "ww");
                    resultText = resultText.replaceAll("ss", "fh");
                    resultText = resultText.replaceAll("r", "w");
                    resultText = resultText.replaceAll("c", "ts");
                    resultText = resultText.replaceAll("Ԅ", "cuteh");
                    resultText += " " + uwus[[Math.floor(Math.random()*uwus.length)]];

                    return {
                        send: true,
                        result: resultText
                    }
                }
            }
        );
        powercord.api.commands.registerCommand(
            {
                command: "b",
                description: "Replaces every 'B' letter to 🅱",
                usage: "{c} [text]",
                executor: args => {
                    args.pop(); args.pop();
                    if(args.length == 0) {
                        return {
                            send: false,
                            result: "Usage: `.b [text]`"
                        }
                    }
                    console.log(args);

                    let inText = args.join(" ");
                    let resultText = inText;

                    resultText = resultText.replaceAll("b", "🅱");

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
        powercord.api.settings.unregisterCommand('uwuify');
        powercord.api.settings.unregisterCommand('b');
    }
};
