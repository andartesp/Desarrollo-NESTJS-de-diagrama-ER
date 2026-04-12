import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { PracticaService } from './practica.service';

@Controller('practica')
export class PracticaController {
  constructor(private readonly service: PracticaService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Post()
  create(@Body() datos: any) { return this.service.create(datos); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(+id); }
}