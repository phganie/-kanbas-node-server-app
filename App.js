import express from 'express'
import "dotenv/config";

import Hello from "./Hello.js"
import Lab5 from './Lab5/index.js'
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import cors from "cors";
import AssignmnetsRoutes from './Kanbas/Assignments/routes.js';
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";


const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
 
const app = express()
app.use(cors());    
app.use(express.json()); // do all your work after this line

AssignmnetsRoutes(app)
ModuleRoutes(app);
CourseRoutes(app);
Hello(app)
Lab5(app)
UserRoutes(app);


app.listen(process.env.PORT || 4000)

