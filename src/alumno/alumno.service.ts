import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from '../entities/alumno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnoService {

  constructor(
    @InjectRepository(Alumno)
    private alumnoRepository: Repository<Alumno>,
  ) { }

  
  findAll() {
    return this.alumnoRepository.find({
      relations: {
        practicas: {
          practica: true,
        },
      },
    });
  }

  
  create(datos: any) {
   
    return this.alumnoRepository.save(datos);
  }


  
  async remove(id: number) {
    await this.alumnoRepository.delete(id);
    return { deleted: true };
  }
}