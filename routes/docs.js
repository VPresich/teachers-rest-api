import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import swaggerUi from 'swagger-ui-express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerPath = path.join(__dirname, '../swagger.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, 'utf8'));

const docRouter = express.Router();
docRouter.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default docRouter;
