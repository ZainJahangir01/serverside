import mongoose from 'mongoose';


//mongoose schema which basically a function
//which gets an object
//How the student document will look like

const studentSchema  = mongoose.Schema({

regNo: Number,
studentName: String,
grade: String,
section:{
    type: String,
    default: 'A'
}
});

//model

const student = mongoose.model('student' , studentSchema);

export default student;