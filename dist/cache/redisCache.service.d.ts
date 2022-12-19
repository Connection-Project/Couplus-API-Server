import { Cache } from 'cache-manager';
export declare class RedisCacheService {
    private readonly cache;
    constructor(cache: Cache);
    get(key: string): Promise<any>;
    set(key: string, value: any, ttl?: number): Promise<void>;
    reset(): Promise<void>;
    del(key: string): Promise<void>;
}
