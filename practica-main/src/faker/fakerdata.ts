import { faker } from '@faker-js/faker';
import { Administrador } from '../models/Administrador';
import { Periodo } from '../models/Periodo';
import { Propietario } from '../models/Propietario';
import { Egreso } from '../models/Egreso'; 
import { database } from '../database/db';

async function crearDatosFalsos() {
  try {
    await database.sync({ force: false }); // No borra la DB, solo asegura modelos

    // Crear Administradores
    for (let i = 0; i < 5; i++) {
      const admin = await Administrador.create({
        nombre_completo: faker.person.fullName(),
        documento: faker.string.numeric(10),
        correo: faker.internet.email(),
      });

      // Crear Periodos para cada Administrador
      await Periodo.create({
        inicio: faker.date.past(),
        fin: faker.date.future(),
        id_administrador: admin.id_administrador,
      });

      // Crear Egresos para cada Administrador
      for (let j = 0; j < 3; j++) {
        await Egreso.create({
          fecha: faker.date.recent(),
          monto: faker.number.float({ min: 100, max: 1000 }),
          descripcion: faker.commerce.productDescription(),
          id_administrador: admin.id_administrador,
        });
      }
    }

    // Crear Propietarios
    for (let i = 0; i < 10; i++) {
      await Propietario.create({
        nombre: faker.person.fullName(),
        cedula: faker.string.numeric(10),
        telefono: faker.phone.number(),
        correo: faker.internet.email(),
      });
    }

    console.log('✅ Datos falsos generados con éxito');
  } catch (error) {
    console.error('❌ Error generando datos falsos:', error);
  }
}

crearDatosFalsos();
