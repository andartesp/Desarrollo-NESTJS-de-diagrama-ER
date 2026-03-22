import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Alumno } from './alumno.entity';
import { Practica } from './practica.entity';

@Entity()
export class AlumnoRealizaPractica {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'decimal', precision: 4, scale: 2 })
  nota: number;

  @ManyToOne(() => Alumno, alumno => alumno.practicas)
  alumno: Alumno;

  @ManyToOne(() => Practica, practica => practica.alumnos)
  practica: Practica;
}