import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoModule } from './alumno/alumno.module';

// --- NUEVO CODIGO: Importamos los nuevos módulos ---
// Asegúrate de que las carpetas se llamen exactamente 'profesor' y 'practica'
import { ProfesorModule } from './profesor/profesor.module';
import { PracticaModule } from './practica/practica.module';
// ----------------------------------------------------

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', 
      database: 'evaluacion',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    AlumnoModule,
    // --- NUEVO CODIGO: Registramos los módulos en la App ---
    ProfesorModule,
    PracticaModule,
    // ------------------------------------------------------
  ],
})
export class AppModule {}