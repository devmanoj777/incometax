const staticRouter = require('express').Router();


staticRouter.get("/",(req,res)=>{
 res.render("fileIncomeTaxReturn.ejs");
})



module.exports=staticRouter