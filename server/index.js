import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4500;

app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, (error) => {
    if (error) {
        console.log('Error: ' + error);
    } else {
        console.log('Server is running on port: ' + PORT);
    }
})

