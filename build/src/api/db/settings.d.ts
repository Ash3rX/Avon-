declare function enableAutoplay(guild: string): boolean;
declare function getAutoplay(guild: string): {
    SETTING?: number | null;
};
declare function disableAutoplay(guild: string): boolean;
export { getAutoplay, disableAutoplay, enableAutoplay, get247, enable247, disable247, get247Set, checkIgnore, addIgnore, removeIgnore, addBypassAdmins, addBypassMods, checkBypassAdmins, checkBypassMods, listIgnores, removeAdminBypass, removeBypassMods, resetIgnore, };
declare function get247(guild: string): {
    SETTING?: null | number;
};
declare function enable247(guild: string, vc: string, txt: string): void;
declare function disable247(guild: string): void;
declare function get247Set(guild: string): {
    CHANNELID?: string | null;
    TEXTID?: string | null;
};
declare function checkIgnore(channel: string, guild: string): boolean;
declare function addIgnore(channel: string, guild: string): void;
declare function removeIgnore(channel: string, guild: string): void;
declare function checkBypassAdmins(guild: string): {
    BYPASS_ADMINS?: null | number;
};
declare function checkBypassMods(guild: string): {
    BYPASS_MODS?: null | number;
};
declare function addBypassAdmins(guild: string): void;
declare function addBypassMods(guild: string): void;
declare function removeAdminBypass(guild: string): void;
declare function removeBypassMods(guild: string): void;
declare function listIgnores(guild: string): string[];
declare function resetIgnore(guild: string): void;
//# sourceMappingURL=settings.d.ts.map