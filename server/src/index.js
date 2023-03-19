// server.js
import bodyParser from 'body-parser';
import express from 'express';
import router from './routes';
import postRouter from './routes/post.routes';
import taskRouter from './routes/task.routes';
import projectRouter from './routes/project.routes';
import taskStatusRouter from './routes/task_status.routes';
import './config/mongodb.config';

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const app = express();
const PORT = 8080;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);  ]
app.use(bodyParser.json());

app.use('/api', router);
app.use('/api/posts', postRouter);
app.use('/api/projects', projectRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/task_statuses', taskStatusRouter);

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});

export default app;
