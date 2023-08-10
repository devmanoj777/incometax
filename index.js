const express = require('express')
const mogooose = require('mongoose');
const staticRouter = require('./routers/staticRoute');
const path = require('path');
const UserRouter = require('./routers/users');

const app = express();
app.use(express.static("public"))
app.set("view engine" ,"ejs")
app.set('views', path.join(__dirname, 'views'));

app.use("/", staticRouter)
app.use("/users",UserRouter)


app.listen(8000,()=>{
    console.log("port is listening....... http://localhost:8000")
})