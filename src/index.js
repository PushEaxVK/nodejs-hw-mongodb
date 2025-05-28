import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

const bootdtrap = async () => {
  await initMongoDB();
  startServer();
};

bootdtrap();
