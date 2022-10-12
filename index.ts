import 'express-async-errors';
import dotenv from 'dotenv';


import express from 'express';
const app = express();

dotenv.config();


import {notFoundMiddleware} from './middleware/not-found';
import {errorHandlerMiddleware} from './middleware/error-handler';
import {mainRouter} from "./routes/main";

// middleware
app.use(express.json());

app.use('/api/v1', mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
       app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
