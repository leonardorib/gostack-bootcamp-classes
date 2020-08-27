import express from 'express';
import { helloWorld } from './routes';

const app = express();

app.use(express.json());

app.get('/', helloWorld);

app.listen(3333);
