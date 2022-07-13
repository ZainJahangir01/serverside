import express from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import studentRoutes from "./router/student.js";


const app = express();

//middleware express


app.use('/students', studentRoutes);


//body parse for sending request and limit of json is 20 and extended true any type of data
app.use(bodyparser.json({ limit: "20mb", extented: true }));
app.use(bodyparser.urlencoded({ limit: "20mb", extented: true }));
//http header based mechanism
//setting cors cross origin requests basically fr handling rqsts outside its own domain
app.use(cors());
//monogo conn

const CONNECTION_URL =
  "mongodb+srv://zainjahangir:Aj1xhEnmlqPEJQTC@cluster0.i6hx0lw.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {})
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connection is established and running at port ${PORT} `)
    )
  )
  .catch((err) => console.log(err.message));
//for handling errors
//mongoose.set('useFindAndModify' , false);
