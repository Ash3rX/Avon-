export default class AvonEmoji extends Object {
    constructor(client) {
        super();
        this.tick = "<:Avon_tick:1187224173324546108>";
        this.cross = "<:Avon_cross:1187224210695782401>";
        this.playing = "<a:avon_playing:1169280604630683648>";
        this.exclamation = "<:icons_exclamation:1169326109427515474>";
        this.queue = "<:icons_update:1169326868747530240>";
        this.info = "<:info:1166374067394322443>";
        this.defSearch = "<:TMF_YouTube:1169578474336424037>";
        this.premium = "<:premiumuser:1166374072276492299>";
        this.invite = "<:invite:1187204488063373382> ";
        this.patreon = "<:IMG_2988:1187209070231441438>";
        this.support = "<:I_Support:1187204411169185862> ";
        this.spotiSearch = "<a:spotify:1169747235748184134>";
        this.deezSearch = "<:Deezer_avon:1065634451603861545>";
        this.vote = "<:voter:1166374882053984296>";
        this.soundSearch = "<:Soundcloud_avon:1065634569262473277>";
        this.badges = {
            named: "<:owner:1166375413778493501>",
            owner: "<:ownership:1169756062044410006>",
            dev: "<a:developer_bot:1166375405503139972>",
            admin: "<:ny_Admin:1166375418815856693>",
            codev: "<:Active_Dev:1166375415946940459>",
            author: "",
            friend: "<:bsdk_friends:1169758132260585613>",
            vip: "<:dc_Vipz:1169758685128577085>",
            premiumUser: "<:premiumuser:1166374072276492299>",
            mod: "<:mod_badge:1166375421986750564>",
            staff: "<:Staff:1166375424486539336>",
            supporter: "<:earlysupporter:1166375426956996619>",
            user: "<:user:1169759362517057586>",
        };
        this.helpMenu = {
            moderation: "<:icons_stagemoderator:1170643015354830930>",
            music: "<:MusicB:1166374876211327018>",
            home: "<:Home:1166377282726797323>",
            filters: "<:icons_control:1166377285499224164>",
            info: "<:info:1166374067394322443>",
            utility: "<:settings:1166377288171004054>",
            allCommands: "<:icons_richpresence:1166377290662432809>",
        };
        this.setup = {
            pause: "<:ss_pause:1099927332204073011>",
            resume: "<:resume:1099927448734408744>",
            skip: "<:forward10:986893749005217812>",
            previous: "<:Avon_Previous:1137298056283430982>",
            shuffle: "<:shuffle:1139766210213462066>",
            author: "<:icons_queue:1166374069717958666>",
            nowPlaying: "<:user:1166377277165150380>",
            requester: "<:user:1166377277165150380>",
            duration: "<:duration333:1169749340923904060>",
            stop: "<:ss_stop:1099927856651436082>",
            loop: "<:loop:1129823572991426651>",
            volLow: "<:lower_vol:1139766602527690902>",
            volHigh: "<:higher_vol:1139766719917854751>",
            fav: "<:discotoolsxyzicon8:1158301800311566398>",
            autoplay: "<:emoji_05:1158269184715788388>",
            filters: "<:icons_control:1166377285499224164>",
        };
        this.avonNew = {
            emote: "<a:11nowplaying:1169750038969323540>",
            nowPlaying: "<:user:1166377277165150380>",
            requester: "<:user:1166377277165150380>",
            duration: "<:duration333:1169749340923904060>",
            author: "<:icons_queue:1166374069717958666>",
            pause: "<:Pause:1129824564386467991>",
            resume: "<:resume:1129824021618380801>",
            skip: "<:forward10:986893749005217812>",
            fav: "<:premiumuser:1166374072276492299>",
            previous: "<:Avon_Previous:1137298056283430982>",
            stop: "<:stop:1129823823399751690>",
        };
        this.spotify = {
            emote: "<a:spotify:1169747235748184134>",
            filters: "",
            nowPlaying: "<a:spotify:1169747235748184134>",
            requester: "<:user:1166377277165150380>",
            duration: "<:duration333:1169749340923904060>",
            pause: "<:ss_pause:1099927332204073011>",
            author: "<:icons_queue:1166374069717958666>",
            resume: "<:resume:1099927448734408744>",
            stop: "<:ss_stop:1099927856651436082>",
            loop: "<:loop:1129823572991426651>",
            shuffle: "<:shuffle:1139766210213462066>",
            forward: "<:backward:1129823401175949322>",
            backward: "<:forward10:1129823372008759327>",
            volLow: "<:lower_vol:1139766602527690902>",
            volHigh: "<:higher_vol:1139766719917854751>",
            previous: "<:Avon_Previous:1137298056283430982>",
            skip: "<:forward10:986893749005217812>",
        };
        this.special = {
            emote: "<a:11nowplaying:1169750038969323540>",
            nowPlaying: "<:user:1166377277165150380>",
            requester: "<:user:1166377277165150380>",
            duration: "<:duration333:1169749340923904060>",
            pause: "<:ss_pause:1099927332204073011>",
            author: "<:user:1166377277165150380>",
            resume: "<:resume:1099927448734408744>",
            stop: "<:ss_stop:1099927856651436082>",
            loop: "<:loop:1129823572991426651>",
            shuffle: "<:shuffle:1139766210213462066>",
            forward: "<:backward:1129823401175949322>",
            backward: "<:forward10:1129823372008759327>",
            volLow: "<:lower_vol:1139766602527690902>",
            volHigh: "<:higher_vol:1139766719917854751>",
            previous: "<:Avon_Previous:1137298056283430982>",
            skip: "<:last:1139768093766336632>",
        };
        this.noButtons = {
            emote: "<a:11nowplaying:1169750038969323540>",
            nowPlaying: "<:user:1166377277165150380>",
            author: "<:icons_queue:1166374069717958666>",
            requester: "<:user:1166377277165150380>",
            duration: "<:duration333:1169749340923904060>",
            filters: "",
        };
        this.simple = {
            emote: "<a:11nowplaying:1169750038969323540>",
            nowPlaying: "<:user:1166377277165150380>",
            requester: "<:user:1166377277165150380>",
            author: "<:icons_queue:1166374069717958666>",
            duration: "<:duration333:1169749340923904060>",
            filters: "",
            pause: "<:ss_pause:1099927332204073011>",
            resume: "<:resume:1099927448734408744>",
            stop: "<:stop:1129823823399751690>",
            skip: "<:skip:1099927755342233720>",
            loop: "<:loop:1129823572991426651>",
        };
        this.oldStyle = {
            emote: "<a:11nowplaying:1169750038969323540>",
            nowPlaying: "<:user:1166377277165150380>",
            author: "<:icons_queue:1166374069717958666>",
            requester: "<:user:1166377277165150380>",
            duration: "<:duration333:1169749340923904060>",
        };
    }
}
//# sourceMappingURL=Emoji.js.map