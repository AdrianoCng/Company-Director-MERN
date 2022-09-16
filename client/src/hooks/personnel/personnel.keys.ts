import { GetPersonnelParams } from "./personnel.types";

const personnelKeys = {
    baseKey: ["Personnel"],
    all(params?: GetPersonnelParams) {
        return [this.baseKey, "All", { ...params }];
    },
};

export default personnelKeys;
