import { redisStore } from 'cache-manager-redis-store';
import { CacheModule, Module } from '@nestjs/common';
import { RedisCacheService } from './redisCache.service';

@Module({
    imports: [
        CacheModule.register({
            useFactory: () => ({
                store: redisStore,
                host: process.env.REDIS_HOST,
                port: parseInt(process.env.REDIS_PORT),
                ttl: 20,
            }),
        }),
    ],
    providers: [RedisCacheService],
    exports: [RedisCacheService],
})
export class RedisCacheModule {}
