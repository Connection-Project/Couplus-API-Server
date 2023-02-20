export declare class JwtService {
    private readonly jwtSecret;
    constructor();
    getToken(userId: number): {
        accessToken: string;
        refreshToken: string;
        accessTokenExpireIn: any;
        refreshTokenExpireIn: any;
    };
    verifyToken(refreshToken: string): any;
}
