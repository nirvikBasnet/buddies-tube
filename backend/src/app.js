import express from 'express';


const app = express();

// ways to submit data to the server

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup routers

app.use('/api/auth', require('./routers/auth'));

export default app;
