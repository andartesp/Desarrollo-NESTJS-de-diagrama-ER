import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from '../entities/alumno.entity';
import { Practica } from '../entities/practica.entity';
import { Profesor } from '../entities/profesor.entity';
import { AlumnoRealizaPractica } from '../entities/alumno-realiza-practica.entity'; 

import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Alumno, 
      Practica, 
      Profesor, 
      AlumnoRealizaPractica 
    ])
  ],
  controllers: [AlumnoController],
  providers: [AlumnoService],
})
export class AlumnoModule {}