import express, { Request, Response, Application } from 'express';

const app: Application = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// app.get('/', (req: Request, res: Response) => {
//   res.status(200).send('Hello World!');
// });


app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

