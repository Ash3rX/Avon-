import EventEmitter from "events";
export default class AvonEvent extends EventEmitter {
    client;
    name;
    constructor(client) {
        super();
        this.client = client;
    }
}
//# sourceMappingURL=AvonEvent.js.map