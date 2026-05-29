import { Controller, Post, Body, Version } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service.js';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Version('1')
  @Post('login')
  async login(@Body() body: { tenantId: string; email: string; password: string }) {
    const user = await this.auth.validateUser(body.tenantId, body.email, body.password);
    return this.auth.signToken({ sub: user.id, tenantId: user.tenantId, role: user.role });
  }
}
