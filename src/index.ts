import express from 'express';
import morgan from 'morgan';

import services from './services/services.router';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use(services);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server listening at ' + port);
});
