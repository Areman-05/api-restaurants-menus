import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let memoryServer: MongoMemoryServer | null = null;

export async function connectDB(): Promise<void> {
  let uri = process.env.DATABASE_URL;

  // Si no tienes Mongo/Docker, usa base en memoria (solo para practicar)
  if (process.env.USE_MEMORY_MONGO === 'true') {
    memoryServer = await MongoMemoryServer.create();
    uri = memoryServer.getUri('daw_restaurants');
    console.log('MongoDB en memoria listo');
  }

  if (!uri) {
    throw new Error('Falta DATABASE_URL en el archivo .env');
  }

  await mongoose.connect(uri);
  console.log('Conectado a MongoDB');
}
