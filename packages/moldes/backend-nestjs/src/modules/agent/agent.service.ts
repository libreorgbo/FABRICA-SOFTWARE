import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../core/database/prisma.service.js';

@Injectable()
export class AgentService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(tenantId: string) {
    return this.prisma.agent.findMany({ where: { tenantId, isActive: true } });
  }

  async findOne(tenantId: string, id: string) {
    const agent = await this.prisma.agent.findFirst({ where: { id, tenantId } });
    if (!agent) throw new NotFoundException(`Agent ${id} not found`);
    return agent;
  }

  create(tenantId: string, dto: { name: string; systemPrompt: string; model?: string; tools?: string[] }) {
    return this.prisma.agent.create({
      data: { tenantId, ...dto, tools: dto.tools ?? [] },
    });
  }
}
