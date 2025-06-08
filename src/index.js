import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const bootdtrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootdtrap();
