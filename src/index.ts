import express from 'express';
import morgan from 'morgan';

import services from './services/services.router';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(services);

app.listen(process.env.PORT, () => {
  console.log('Server listening at ' + process.env.PORT);
});
