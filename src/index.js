import { initMongoDB } from './db/initMongoDB.js';
import { setupServer } from './server.js';

const bootdtrap = async () => {
  await initMongoDB();
  setupServer();
};

bootdtrap();
