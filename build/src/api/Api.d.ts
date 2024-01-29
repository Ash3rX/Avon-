import AvonDispatcher from "./Dispatcher.js";
export default class AvonApi extends Map {
    client: any;
    constructor(client: any);
    handle(guild: any, member: any, channel: any, node: any, track: any): Promise<AvonDispatcher | null>;
    reconnect(guild: any, vc: any, txt: any, node: any): Promise<AvonDispatcher | undefined>;
}
//# sourceMappingURL=Api.d.ts.map