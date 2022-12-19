import { Strategy } from 'passport-jwt';
declare type JwtPayload = {
    userId: number;
    iat: number;
    exp: number;
};
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    constructor();
    validate(payload: JwtPayload): JwtPayload;
}
export {};
