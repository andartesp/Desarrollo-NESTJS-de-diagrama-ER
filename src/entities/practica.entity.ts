import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AlumnoRealizaPractica } from './alumno-realiza-practica.entity';

@Entity()
export class Practica {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  dificultad: string;

  @OneToMany(() => AlumnoRealizaPractica, arp => arp.practica)
  alumnos: AlumnoRealizaPractica[];

}