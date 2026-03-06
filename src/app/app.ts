import express from 'express';
import path from 'path';
import { router } from './routes';
import { errorMiddleware } from './middlewares/error.middleware';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'src', 'views'));

app.use('/public', express.static(path.join(process.cwd(), 'src', 'public')));

app.use(router);

app.use(errorMiddleware);

export default app;