import AvonCommand from "../../base/AvonCommand.js";
export default class Avonforcefix extends AvonCommand {
    constructor(client) {
        super(client);
        this.name = "forcefix";
        this.cat = "music";
        this.desc = "fix the player";
        this.aliases = [];
        this.exec = async (message, prefix, args) => {
            this.client.api.delete(message.guild.id);
            return message?.reply({
                content: `Force-fixed the player !`,
            });
        };
    }
}
//# sourceMappingURL=ForceFix.js.map