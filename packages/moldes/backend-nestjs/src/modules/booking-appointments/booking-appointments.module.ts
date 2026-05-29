// MÓDULO NestJS: BookingAppointmentsModule
// Propósito: Motor de reservas y citas — calendarios por servicio, disponibilidad y recordatorios
// Registra el servicio y controlador. Importar en AppModule para activar.
import { Module } from '@nestjs/common';
import { BookingAppointmentsService } from './booking-appointments.service.js';

@Module({
  providers: [BookingAppointmentsService],
  exports: [BookingAppointmentsService],
})
export class BookingAppointmentsModule {}
