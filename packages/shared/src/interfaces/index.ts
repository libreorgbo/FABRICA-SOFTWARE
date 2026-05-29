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

// ─────────────────────────────────────────────────────────────────────────────
// INTERFACES DE LOS 17 MÓDULOS ENTERPRISE
// ─────────────────────────────────────────────────────────────────────────────

// MÓDULO CRM — Ticket de soporte o tarea del embudo de venta
// Un ticket puede pertenecer a un contacto del embudo o a un cliente con incidencia
export interface ITicket {
  id: string;
  tenantId: string;
  titulo: string;
  descripcion: string;
  estado: 'abierto' | 'en_progreso' | 'resuelto' | 'cerrado';
  prioridad: 'baja' | 'media' | 'alta' | 'critica';
  asignadoA?: string;   // ID del agente responsable del ticket
  clienteId?: string;   // ID del usuario/cliente que generó el ticket
  createdAt: Date;
  updatedAt: Date;
}

// MÓDULO MULTI-VENDOR WALLET — Saldo y movimientos de la billetera del vendedor
// Registra cada crédito (venta cobrada) y débito (retiro solicitado) del vendedor
export interface IWalletVendedor {
  id: string;
  tenantId: string;
  vendedorId: string;
  saldoDisponible: number;       // Saldo listo para retirar (en la moneda base del tenant)
  saldoPendiente: number;        // Saldo bloqueado por disputas o en período de retención
  moneda: string;                // Ej: "USD", "EUR", "BOB"
  ultimoMovimiento: Date;
}

// MÓDULO BOOKING — Reserva o cita agendada en el calendario de un servicio
// Usado para servicios de salud, belleza, consultoría, turismo, etc.
export interface IReserva {
  id: string;
  tenantId: string;
  servicioId: string;            // Qué servicio/recurso se está reservando
  clienteId: string;
  fechaInicio: Date;             // Inicio del bloque de tiempo reservado
  fechaFin: Date;                // Fin del bloque de tiempo reservado
  estado: 'pendiente' | 'confirmada' | 'cancelada' | 'completada';
  notas?: string;                // Instrucciones especiales del cliente
  recordatorioEnviado: boolean;  // Si ya se envió el recordatorio por email/WhatsApp
}

// MÓDULO E-LEARNING — Progreso de un alumno dentro de un curso
// Se actualiza al completar cada lección y al pasar quizzes
export interface IProgresoCurso {
  id: string;
  tenantId: string;
  alumnoId: string;
  cursoId: string;
  leccionesCompletadas: string[];  // Array de IDs de lecciones terminadas
  porcentaje: number;              // 0-100 calculado sobre el total de lecciones
  aprobado: boolean;               // true cuando el alumno supera el umbral del curso
  certificadoUrl?: string;         // URL del PDF del certificado generado al completar
  fechaInicio: Date;
  fechaCompletado?: Date;
}

// MÓDULO WHOLESALE B2B — Precio escalonado por rango de cantidad
// Define cuánto paga un mayorista según cuántas unidades compra
export interface IPrecioEscalonado {
  id: string;
  tenantId: string;
  productoId: string;
  cantidadMin: number;   // Ej: 10 unidades
  cantidadMax?: number;  // Ej: 49 unidades (null = sin tope)
  precio: number;        // Precio unitario para ese rango
  moneda: string;        // Ej: "USD"
}

// MÓDULO ANALYTICS BI — Métrica de negocio calculada en un período
// Se almacena como snapshot diario/semanal para construir gráficas históricas
export interface IMetricaBI {
  id: string;
  tenantId: string;
  tipo: 'ventas_totales' | 'nuevos_clientes' | 'tasa_retencion' | 'ticket_promedio' | 'conversion';
  valor: number;          // Valor numérico de la métrica (monto, porcentaje, cantidad)
  moneda?: string;        // Solo para métricas monetarias (ventas_totales, ticket_promedio)
  periodo: 'dia' | 'semana' | 'mes' | 'año';
  fechaInicio: Date;      // Inicio del período medido
  fechaFin: Date;         // Fin del período medido
}
