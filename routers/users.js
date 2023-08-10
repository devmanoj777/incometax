const UserRouter = require('express').Router();


UserRouter.get("/dashboard",(req,res)=>{
 res.render("admin_dash.ejs");
})
UserRouter.get("/downloadpfd",(req,res)=>{
    res.render("./first_drop/download_pre.ejs");
})
UserRouter.get("/fileIncomeTaxReturn",(req,res)=>{
    res.render("./first_drop/fileIncomeTaxReturn.ejs");
})
   


module.exports=UserRouter