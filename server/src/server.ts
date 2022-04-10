import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import path from 'path';

const app: express.Application = express();

const db: string = process.env.MONGODB_URI || config.get('mongodbURI');

app.use(express.json());

mongoose
  .connect(db)
  .then(() => {
    console.log('Mongo connected');
  })
  .catch((error) => console.log(error));

// Routes
app.use('/api/job-offers', require('./routes/api/job_offers'));

// Static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  const root: string = path.resolve(__dirname, '../../', 'client', 'build');
  app.use(express.static(root));
  app.get('*', (request, response) => {
    response.sendFile('index.html', { root });
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
