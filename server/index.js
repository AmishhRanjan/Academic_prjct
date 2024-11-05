import dotenv from 'dotenv';
dotenv.config();//initializing
import connectToDatabase from './db.js';
import express from 'express';
import cors from 'cors';

//Routes:
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';


connectToDatabase()  //we call the functn to connect to our database.
const app = express()
app.use(express.json()) //this will be our format for the data we are sending.
app.use(cors());

app.use('/api/products', productRoutes); //localhost:5000/api/products
app.use('/api/users', userRoutes);

const port = 5000; //we are creating a port nd specifying that with 5000.

app.get('/', (req, res) => {
    res.send('Api is running...');
});
//req-> request and res-> respond.
app.listen(port, () => {
    console.log(`Server runs on port ${port}`);
});
