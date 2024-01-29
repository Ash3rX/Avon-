declare function addDjRole(guild: string, role: string): void;
declare function getDjRole(guild: string): {
    ROLE?: string | null;
};
declare function removeDjRole(guild: string): boolean;
declare function getPlayerMode(guild: string): {
    MODE?: string | null;
};
declare function updatePlayerMode(guild: string, mode: string): boolean;
declare function checkDj(guild: string): boolean;
declare function getDjChannel(guild: string): {
    CHANNEL?: null | string;
};
declare function createDjChannel(guild: string, channel: string, message: string): boolean;
declare function deleteDjChannel(guild: string): boolean;
declare function getDjSetup(guildId: string): {
    MESSAGE?: string | null;
    CHANNEL?: string | null;
};
declare function playType(guild: string): {
    TYPE?: string | null;
};
declare function updatePlayType(guild: string, type: string): void;
export { getPlayerMode, updatePlayerMode, checkDj, getDjChannel, createDjChannel, deleteDjChannel, getDjSetup, getDjRole, addDjRole, removeDjRole, playType, updatePlayType, };
//# sourceMappingURL=dj.d.ts.map