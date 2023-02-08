export declare class JwtService {
    private readonly jwtSecret;
    constructor();
    getToken(userId: number): {
        accessToken: string;
        refreshToken: string;
    };
    verifyToken(refreshToken: string): any;
}
