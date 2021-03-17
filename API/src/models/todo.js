import mongoose from 'mongoose';

export const ToDo = mongoose.model("ToDo",{
    task : String,
    createddate : Date,
    completed : Boolean,
    lastupdateddate: Date
});