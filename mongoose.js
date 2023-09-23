const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:tORiZJNFRHzEWvEG@cluster0.arwhvq8.mongodb.net/?retryWrites=true&w=majority', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('connection success');
}).catch((error) => {
    console.log('connection failed', error);
})

