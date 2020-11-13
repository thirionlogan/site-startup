import express from 'express'; // Fast web framework for node js
import helmet from 'helmet'; // Helps secure express app
import cors from 'cors';

// Getting main api file and loading custom middlewares
import path from 'path';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/notFound.middleware';
import { router } from './api';

require('dotenv').config();

// Setting up express & must use middleware
const app = express();
app.set('trust proxy', 1); // When using something like nginx or apache as a proxy
app.use(helmet()); // Adds extra security
app.use(cors());
app.use(express.json()); // Allows use of req.body (for json)

// Custom Middleware
app.use('/public', express.static(path.resolve('public')));
app.use('/api', router);

// Basic Routing
app.get('/robots.txt', (
  req: any,
  res: { sendFile: (arg0: string, arg1: { root: string }) => any } // TODO weird type
) => res.sendFile('robots.txt', { root: path.resolve() }));
app.get('*', (
  req: any,
  res: { sendFile: (arg0: string, arg1: { root: string }) => any } // TODO weird type
) => res.sendFile('index.html', { root: path.resolve('public') }));

app.use(errorHandler);
app.use(notFoundHandler);

// Setting up node js server
const port = process.env.PORT || 3003;
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const server = app.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}...`)
);
