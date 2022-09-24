const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/UserRoutes.js')

const app = express();
app.use(cors());
app.use(express.json());

const URI = 'mongodb+srv://kundan:ks591998@cluster0.6j3hewh.mongodb.net/basicCRUD_application?retryWrites=true&w=majority'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('mongoDB connected');
}).catch(err => console.log(err));

app.use('/api/user', userRoutes);

app.listen(5000, () => {
    console.log('listening on port 5000' );
})