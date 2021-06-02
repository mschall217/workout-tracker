const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                require: 'enter an type of exercise'
            },
            name: {
                type: String,
                require: 'enter the name of the exercise'
            },
            duration: {
                type: Number,
                require: 'enter the length of the exercise'
            },
            weight: {type: Number},
            reps: {type: Number},
            sets: {type: Number},
            distance: {type: Number}
        },
    ]
});




const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;