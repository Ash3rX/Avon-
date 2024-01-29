declare function createPrem(): void;
declare function getServerPremTime(server: string): {
    TIME?: number | null;
};
declare function removeUserPrem(user: string): boolean;
declare function getUserPremtier(user: string): {
    TIER?: string | null;
};
declare function addPrem(user: string, time: number, count: number, code: string, reason: string, tier: string): boolean;
declare function updatePrem(user: string, time: number, count: number, code: string, reason: string, tier: string): boolean;
declare function getUserCode(user: string): {
    CODE?: string | null;
};
declare function getPremTime(user: string): {
    TIME?: number;
};
declare function getCount(user: string): {
    COUNT?: number | undefined | null;
};
declare function decretCount(user: string): boolean;
declare function incrementCount(user: string): boolean;
declare function addServerPrem(user: string, time: number, server: string, code: string): boolean;
declare function removeServerPrem(user: string, server: string): boolean;
declare function getServerPremiumStatus(server: string): {
    STATUS?: number | null | undefined;
};
declare function getUserPremStatus(user: string): {
    USER?: string | null;
};
declare function getPremServerList(user: string): string[];
declare function getServerPrem(guild: string): {
    SERVER?: string | null;
};
declare function getActivator(guild: string): {
    USER?: string | null;
};
declare function deleteServerPrem(guild: string): boolean;
declare function checkGlobalAfk(user: string): boolean;
declare function checkServerAfk(user: string, guild: string): boolean;
declare function addGlobalAfk(user: string, reason: string, time: number): void;
declare function removeGlobalAfk(user: string): void;
declare function addServerAfk(user: string, reason: string, time: number, guild: string): void;
declare function removeServerAfk(user: string, guild: string): void;
declare function getGlobalAfk(user: string): {
    USER?: string | null;
    REASON?: string | null;
    TIME?: number | null;
};
declare function getServerAfk(user: string, guild: string): {
    USER?: string | null;
    REASON?: string | null;
    TIME?: number | null;
};
declare function listfavs(user: string): any[];
declare function addFavs(user: string, track: any): void;
declare function removeFavs(user: string, track: string): void;
declare function listFavsLinks(user: string): string[];
export { getCount, decretCount, getServerPremTime, getServerPrem, updatePrem, addPrem, createPrem, deleteServerPrem, getActivator, getUserPremStatus, getServerPremiumStatus, removeServerPrem, addServerPrem, getPremTime, getUserCode, removeUserPrem, getPremServerList, getUserPremtier, incrementCount, addFavs, removeFavs, listFavsLinks, listfavs, addGlobalAfk, addServerAfk, removeGlobalAfk, removeServerAfk, checkGlobalAfk, checkServerAfk, getGlobalAfk, getServerAfk, };
//# sourceMappingURL=premium.d.ts.map