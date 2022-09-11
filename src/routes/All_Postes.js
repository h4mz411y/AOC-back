const express = require('express')
const router = express.Router()



const Get_AllPosts=require("../controllers/get-myPostes");
router.get("/allpostes",Get_AllPosts)

const create_postes=require("../controllers/create_postes");
router.post("/createpost",create_postes)

const update_postes=require("../controllers/update_post");
router.post("/updateData",update_postes)





module.exports=router
