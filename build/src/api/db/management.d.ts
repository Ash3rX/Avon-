export { manageMent, addManagement, removeManagement, getManagement, listTrusted, addTrusted, removeTrusted, checkTrusted, };
declare function manageMent(user: string): {
    MANAGE?: string | null | number;
};
declare function addManagement(user: string): boolean;
declare function removeManagement(user: string): boolean;
declare function getManagement(): string[];
declare function checkTrusted(user: string): boolean;
declare function addTrusted(user: string): boolean;
declare function removeTrusted(user: string): boolean;
declare function listTrusted(): string[];
//# sourceMappingURL=management.d.ts.map