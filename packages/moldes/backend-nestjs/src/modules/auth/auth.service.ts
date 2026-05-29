import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../core/database/prisma.service.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async validateUser(tenantId: string, email: string, _password: string) {
    const user = await this.prisma.user.findUnique({
      where: { tenantId_email: { tenantId, email } },
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return user;
  }

  signToken(payload: { sub: string; tenantId: string; role: string }) {
    return { accessToken: this.jwt.sign(payload) };
  }
}
