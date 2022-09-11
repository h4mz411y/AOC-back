const model_update=require("../model/postes");

module.exports=async(req,res)=>{
    const {dataCard,type}=req.body;
    if(type=="add Cart"){
        const {id,number_item}=dataCard
        let newNumber=Number(number_item)-1
        const Datause=await model_update.update({number_item:newNumber},{
            where:{id:id}
        })    
    }else{
        const {id,number_item}=dataCard
        let newNumber=Number(number_item)
        const Datause=await model_update.update({number_item:newNumber},{
            where:{id:id}
        })     
    }
}