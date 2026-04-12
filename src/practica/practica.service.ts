import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Practica } from '../entities/practica.entity';

@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica)
    private repo: Repository<Practica>,
  ) {}

  findAll() { return this.repo.find(); }
  create(datos: any) { return this.repo.save(datos); }

  async update(id: number, datos: any) {
    await this.repo.update(id, datos);
    return this.repo.findOneBy({ id });
  }

  remove(id: number) { return this.repo.delete(id); }
}