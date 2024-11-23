const userModel = require("../models/userModel");
//GET DONAR-LIST
const getDonarsListController=async(req,res)=>{
    try{
        const donarData=await userModel
        .find({role:'donar'})
        .sort({createdAt:-1});

        return res.status(200).send({
            success:true,
            TotalCount:donarData.length,
            message:'Donar List Fetched Successfully',
            donarData,
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in Donar List API',
        })
    }
}

//GET HOSPITAL-LIST
const getHospitalListController=async(req,res)=>{
    try{
        const hospitalData=await userModel
        .find({role:'hospital'})
        .sort({createdAt:-1});

        return res.status(200).send({
            success:true,
            TotalCount:hospitalData.length,
            message:'Hospital List Fetched Successfully',
            hospitalData,
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in Hospital List API',
        })
    }
}

//GET ORGANISATION-LIST
const getOrgListController=async(req,res)=>{
    try{
        const orgData=await userModel
        .find({role:'organisation'})
        .sort({createdAt:-1});

        return res.status(200).send({
            success:true,
            TotalCount:orgData.length,
            message:'Organisation List Fetched Successfully',
            orgData,
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in ORG List API',
        })
    }
}

//============================
//DELETE DONAR
const deleteDonarController=async(req,res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            success:true,
            message:" Record Deleted Successfully",
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error while deleting ',
            error
        })
    }
};



//export
module.exports={getDonarsListController,
    getHospitalListController
    ,getOrgListController,
    deleteDonarController};