import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from '../entities/profesor.entity';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private repo: Repository<Profesor>,
  ) {}

  findAll() { return this.repo.find(); }
  create(datos: any) { return this.repo.save(datos); }

  // Añade este para que el PATCH funcione
  async update(id: number, datos: any) {
    await this.repo.update(id, datos);
    return this.repo.findOneBy({ id });
  }

  remove(id: number) { return this.repo.delete(id); }
}