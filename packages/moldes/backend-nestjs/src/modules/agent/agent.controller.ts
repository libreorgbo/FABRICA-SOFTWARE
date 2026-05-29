import { Controller, Get, Post, Body, Param, UseGuards, Request, Version } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AgentService } from './agent.service.js';
import { JwtAuthGuard } from '../../core/security/guards/jwt-auth.guard.js';

@ApiTags('agents')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('agents')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Version('1')
  @Get()
  findAll(@Request() req: { user: { tenantId: string } }) {
    return this.agentService.findAll(req.user.tenantId);
  }

  @Version('1')
  @Get(':id')
  findOne(@Request() req: { user: { tenantId: string } }, @Param('id') id: string) {
    return this.agentService.findOne(req.user.tenantId, id);
  }

  @Version('1')
  @Post()
  create(
    @Request() req: { user: { tenantId: string } },
    @Body() body: { name: string; systemPrompt: string; model?: string; tools?: string[] },
  ) {
    return this.agentService.create(req.user.tenantId, body);
  }
}
