import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { DatabaseModule } from './core/database/database.module.js';
import { TenantModule } from './core/tenant/tenant.module.js';
import { RedisModule } from './core/redis/redis.module.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { AgentModule } from './modules/agent/agent.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env.local', '.env'] }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 100 }]),
    DatabaseModule,
    TenantModule,
    RedisModule,
    AuthModule,
    AgentModule,
  ],
})
export class AppModule {}
