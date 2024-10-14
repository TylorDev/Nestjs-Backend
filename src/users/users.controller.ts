import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard) // Aplica el guardia aquí
  @Get('profile')
  getProfile(@Request() req) {
    return req.user; // Devuelve la información del usuario autenticado
  }
}
