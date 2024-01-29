import * as fs from "fs";
export default class AvonEvents {
    client;
    load;
    constructor(client) {
        this.client = client;
        this.load = false;
    }
    loadEvents() {
        if (this.load)
            return this;
        fs.readdirSync(`./build/src/events/`)
            .filter((x) => x.endsWith(".js"))
            .forEach(async (file) => {
            let izume = (await import(`../events/${file}`)).default;
            let itachi = new izume(this.client);
            let run = itachi?.run.bind(itachi);
            this.client.on(itachi?.name, run);
            this.client.logger.debug(`[Event] Loaded Client Event: ${itachi?.name}`);
        });
        this.client.logger.log(`Loaded Client Events Successfully!`);
        this.load = true;
        return this;
    }
}
//# sourceMappingURL=Events.js.map