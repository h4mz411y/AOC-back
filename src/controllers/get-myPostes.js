const  postes_Model=require("../model/postes");

module.exports=async(req,res)=>{

    const DataUse=await postes_Model.findAll()
    res.json(DataUse);
}