import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AlumnoRealizaPractica } from './alumno-realiza-practica.entity';

@Entity()
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nif: string;

  @Column()
  grupo: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column({ nullable: true })
  apellido2: string;

  @OneToMany(() => AlumnoRealizaPractica, (arp) => arp.alumno, { cascade: true })
  practicas: AlumnoRealizaPractica[];
}