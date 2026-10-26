import { createApp } from './app';
import { connectDB } from './config/database';
import { seedIfEmpty } from './config/seed';

async function start() {
  await connectDB();
  await seedIfEmpty();

  const app = createApp();
  const port = Number(process.env.PORT) || 3000;

  app.listen(port, () => {
    console.log(`API escuchando en http://127.0.0.1:${port}`);
    console.log('Prueba: GET /restaurants  y  GET /menus');
  });
}

start().catch((error) => {
  console.error('No se pudo arrancar la API:', error);
  process.exit(1);
});
