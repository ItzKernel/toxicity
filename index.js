/*
    This is the tastiest spaghetti of all time
    -ItzKernel
*/

const { Plugin } = require('powercord/entities');

module.exports = class Toxicity extends Plugin {
    /* Entry Point */
    async startPlugin() {
        powercord.api.commands.registerCommand(
            {
                command: "clap",
                description: "👏i👏wanna👏die👏",
                usage: "{c} [text]",
                executor: args => {
                    args = args.join(" ").split(" ");
                    if(args.length == 0) {
                        return {
                            send: false,
                            result: "Usage: `.clap [text]`"
                        }
                    }
                    console.log(args);

                    let resultText = "👏";
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
                command: "superclap",
                description: "",
                usage: "{c} [text]",
                executor: args => {
                    args = args.join(" ").split(" ");
                    if(args.length == 0) {
                        return {
                            send: false,
                            result: "Usage: `.superclap [text]`"
                        }
                    }
                    console.log(args);

                    let inText = args.join(" ");
                    let resultText = "👏";

                    let index = 0;
                    for(let char of inText) {
                        if(char.includes(" ")) {
                            resultText += "  ";
                        }
                        resultText += char + "👏";
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
                command: "uwuify",
                description: "Makes youw sententse look like a cewtified fuwwy wwote it >~<",
                usage: "{c} [text]",
                executor: args => {
                    args = args.join(" ").split(" ");
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
                    ];

                    resultText = resultText.replaceAll(/cute/ig, "Ԅ");
                    resultText = resultText.replaceAll(/ent/ig, "ehnt");
                    resultText = resultText.replaceAll(/uck/ig, "awk");
                    resultText = resultText.replaceAll(/ing/ig, "ؼ");
                    resultText = resultText.replaceAll(/tch/ig, "s");
                    resultText = resultText.replaceAll(/cock/ig, "cawk");
                    resultText = resultText.replaceAll(/app/ig, "awp");
                    resultText = resultText.replaceAll(/this/ig, "thiws");
                    resultText = resultText.replaceAll(/ow/ig, "aw");
                    resultText = resultText.replaceAll(/ll/ig, "ww");
                    resultText = resultText.replaceAll(/ss/ig, "fh");
                    resultText = resultText.replaceAll(/me/ig, "meh");
                    resultText = resultText.replaceAll(/ity/ig, "itieh");
                    resultText = resultText.replaceAll(/r/ig, "w");
                    resultText = resultText.replaceAll(/nn/ig, "מ");
                    resultText = resultText.replaceAll(/n/ig, "ny");
                    resultText = resultText.replaceAll(/Ԅ/ig, "cuteh");
                    resultText = resultText.replaceAll(/ؼ/ig, "ing");
                    resultText = resultText.replaceAll(/מ/ig, "nny");
                    resultText += " " + uwus[Math.floor(Math.random()*uwus.length)];

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
                    args = args.join(" ").split(" ");
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
        powercord.api.commands.registerCommand(
            {
                command: "space",
                description: "s p a c e s   t e x t",
                usage: "{c} [text]",
                executor: args => {
                    args = args.join(" ").split(" ");
                    if(args.length == 0) {
                        return {
                            send: false,
                            result: "Usage: `.space [text]`"
                        }
                    }
                    console.log(args);

                    let inText = args.join(" ");
                    let resultText = "";

                    let index = 0;
                    for(let char of inText) {
                        resultText += char + " ";
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
        powercord.api.settings.unregisterCommand('clap');
        powercord.api.settings.unregisterCommand('superclap');
        powercord.api.settings.unregisterCommand('uwuify');
        powercord.api.settings.unregisterCommand('b');
        powercord.api.settings.unregisterCommand('space');
    }
};
