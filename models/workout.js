const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    excercises: [
        {
            type: {
                type: String,
                require: "Enter type of excercise"
            },
            name: {
                type: String,
                require: "Enter name of excercise"
            },
            duration: {
                type: Number,
                require: "Enter length of excercise"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance:{
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;