import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesorService } from './profesor.service';

@Controller('profesor')
export class ProfesorController {
  constructor(private readonly service: ProfesorService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Post()
  create(@Body() datos: any) { return this.service.create(datos); }

  // --- NUEVO: Para actualizar un profesor ---
  @Patch(':id')
  update(@Param('id') id: string, @Body() datos: any) { 
    return this.service.update(+id, datos); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(+id); }
}