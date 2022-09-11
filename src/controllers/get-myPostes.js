const  postes_Model=require("../models/postes");

module.exports=async(req,res)=>{

    const DataUse=await postes_Model.findAll()
    res.json(DataUse);
}