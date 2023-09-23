const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://admin:tORiZJNFRHzEWvEG@cluster0.arwhvq8.mongodb.net/?retryWrites=true&w=majority'

module.exports = ( ) => {
    return mongoose.connect(dbUri)
}