import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json()); // Faz com que o express entenda JSON
app.use(routes);

app.listen(process.env.PORT || 3333);