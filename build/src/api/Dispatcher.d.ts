import { Collection } from "discord.js";
export default class AvonDispatcher {
    client: any;
    guild: any;
    channel: any;
    player: any;
    repeat: string;
    current: any;
    stopped: boolean;
    itachi: boolean;
    previous: any;
    queue: any[];
    data: Collection<string, any>;
    constructor(client: any, guild: any, channel: any, player: any);
    get avon(): any;
    play(): Promise<any> | undefined;
    destroy(): Promise<any>;
    updateQueue(guild: any, queue: any[]): Promise<void>;
    private autoplay;
}
//# sourceMappingURL=Dispatcher.d.ts.map