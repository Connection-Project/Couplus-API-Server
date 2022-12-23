import { UserAccount } from "src/models/UserAccount.entity";
export declare class getInfoObj {
    email: string;
    name: string;
    phone: string;
    birth: string;
    gender: string;
    profile: string;
    agreeThirdParty: boolean;
    agreeReceiveEmail: boolean;
    agreeReceiveText: boolean;
    account: UserAccount[];
    userCode: string;
}
