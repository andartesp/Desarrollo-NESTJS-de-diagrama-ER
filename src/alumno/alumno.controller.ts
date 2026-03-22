import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AlumnoService } from './alumno.service';

@Controller('alumno')
export class AlumnoController {

  constructor(private readonly alumnoService: AlumnoService) {}


  @Get()
  findAll() {
    return this.alumnoService.findAll();
  }


  @Post()
  create(@Body() datos: any) {
    return this.alumnoService.create(datos);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoService.remove(+id); 
  }
}