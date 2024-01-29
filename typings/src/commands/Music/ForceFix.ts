import AvonCommand from "../../base/AvonCommand.js";

export default class Avonforcefix extends AvonCommand {
  constructor(client: any) {
    super(client);
    this.name = "forcefix";
    this.cat = "music";
    this.desc = "fix the player";
    this.aliases = [];
    this.exec = async (message: any, prefix: any, args: any) => {
    this.client.api.delete(message.guild.id)
      return message?.reply({
        content: `Force-fixed the player !`,
      });
    };
  }
}
