import { GetPersonnelParams } from "./personnel.types";

const personnelKeys = {
    baseKey: ["Personnel"],
    all(params?: GetPersonnelParams) {
        return [this.baseKey, "All", { ...params }];
    },
    details(id: string) {
        return [this.baseKey, "Details", { id }];
    },
};

export default personnelKeys;
