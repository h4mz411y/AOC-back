const postes_model=require("../model/postes");

module.exports=async(req,res)=>{
    const DataUse=await postes_model.create(req.body);
}