import path from 'node:path';
import { fileURLToPath } from 'node:url';

const metaUrl = import.meta.url;
const __filename = fileURLToPath(metaUrl);
const __dirname = path.dirname(__filename);

export const ROOT_DIR = path.join(__dirname, '..');
export const TEMPLATE_DIR = path.join(ROOT_DIR, 'templates');
