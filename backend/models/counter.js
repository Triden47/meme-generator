import mongoose from 'mongoose'

const counterSchema = new mongoose.Schema({
    increament: {
        type: Number,
        require: true
    },
})

const counter = mongoose.model('counter', counterSchema)

export default counter
