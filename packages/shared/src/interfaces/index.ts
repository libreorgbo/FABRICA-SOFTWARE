export interface Tenant {
  id: string;
  slug: string;
  name: string;
  plan: 'free' | 'starter' | 'pro' | 'enterprise';
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  tenantId: string;
  email: string;
  role: 'superadmin' | 'admin' | 'vendor' | 'member';
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = unknown> {
  data: T;
  meta?: Record<string, unknown>;
  error?: string;
}

export interface PaginatedResponse<T = unknown> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface AgentConfig {
  id: string;
  tenantId: string;
  name: string;
  systemPrompt: string;
  model: string;
  tools: string[];
}
