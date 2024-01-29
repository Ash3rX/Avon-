export default class AvonConfig extends Object {
  token: string;
  prefix: string;
  nodes: object[];
  spotiId: string;
  owners: string[];
  spotiSecret: string;
  spotiNodes: object[];
  webhooks: object;
  supportId: string;
  color: string;
  server: string;
  voteUrl: string;
  voteApi: string;
  setupBgLink: string;
  constructor() {
    super();
    this.token =
    "OTA0MzE3MTQxODY2NjQ3NTky.GBgjKN.1gocSbAhy7a_FNpbFcTIyx_xBUt4YPCSQiKXGw";
    this.prefix = "+";
    this.nodes = [
      {
        name: `Avon`,
        url: `localhost:2333`,
        auth: `grainbot123`,
        secure: false,
      },
    ];
    this.voteApi =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkwNDMxNzE0MTg2NjY0NzU5MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjczNTI3OTYzfQ.WwA0KXh_nAQcBmR7BPqgLGyElYZheTQmguQfA2F6aNc";
    this.webhooks = {
      guildCreate: "https://canary.discord.com/api/webhooks/1196147780830367886/ZkoNmIQN1u-YVHIhdYb6u06WtwZUNxBOBxivze_377uMgww6AyRgn6n8M_X1cMMpiIj1",
      guildDelete: "https://canary.discord.com/api/webhooks/1196147780830367886/ZkoNmIQN1u-YVHIhdYb6u06WtwZUNxBOBxivze_377uMgww6AyRgn6n8M_X1cMMpiIj1",
      Cmds: "https://canary.discord.com/api/webhooks/1196147890196840489/MuWoBUCsaQAMRdFc9gGojoAzTdRymkpPixLC0XvcvbJ8xj5EMVnbWcdR7PGNUmKh3pmO",
    };
    this.server = "https://discord.gg/HKQXRGj6";
    this.spotiId = "ada2f0339dd340df9aa14c76f33f84f3";
    this.spotiSecret = "9fd6d604c0f343b4a998839f43ef88c7";
    this.owners = ["314599100811051008", "847770840266833961", "1151502339476312086", "1181112428231135244"];
    this.color = "#333333";
    this.supportId = "1163576613552783491";
    this.spotiNodes = [
        {
            id: `Avon`,
            host: `localhost`,
            port: 2333,
            password: `grainbot123`,
            secure: false,
        },
    ];
    this.voteUrl = "https://top.gg/bot/904317141866647592/vote";
    this.setupBgLink =
        "https://media.discordapp.net/attachments/1073486337732268095/1167481525378482268/962b1244c00f1592a6dc2abd5a2c6610.webp?width=1164&height=655";
  }
}
