declare function getPrefix(guildId: string): {
    PREFIX?: string | null;
};
declare function updatePrefix(guildId: string, prefix: string): boolean;
declare function getServerNpDb(server: string): string[];
declare function getGlobalNp(): string[];
declare function globalNpSelection(user: string): boolean;
declare function serverNpSelection(user: string, server: string): boolean;
declare function AddGlobalNp(user: string, reason: string): boolean;
declare function RemoveGlobalNp(user: string): boolean;
declare function addServerNp(user: string, guild: string, reason: string): boolean;
declare function removeServerNp(user: string, guild: string): boolean;
declare function resetNp(): void;
export { getPrefix, updatePrefix, getGlobalNp, getServerNpDb, globalNpSelection, serverNpSelection, AddGlobalNp, RemoveGlobalNp, addServerNp, removeServerNp, resetNp };
//# sourceMappingURL=prefix.d.ts.map