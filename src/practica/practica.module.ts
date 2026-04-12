import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Practica } from '../entities/practica.entity';
import { PracticaService } from './practica.service';
import { PracticaController } from './practica.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Practica])],
  controllers: [PracticaController],
  providers: [PracticaService],
})
export class PracticaModule {}