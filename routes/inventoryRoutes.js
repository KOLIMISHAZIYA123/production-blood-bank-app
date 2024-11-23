const express=require('express')
const authMiddelware=require('../middlewares/authMiddelware')
const {createInventoryController,
    getInventoryController,
    getDonarsController,
    getHospitalController,
    getOrgnaisationController
    ,getOrgnaisationForHospitalController,
    getInventoryHospitalController,
    getRecentInventoryController
    
    }=require('../controllers/inventoryController')

const router=express.Router()

//routes
//Add inventory ||post
router.post('/create-inventory',authMiddelware,createInventoryController);

//GET ALL BLOOD RECORDS
router.get('/get-inventory',authMiddelware,getInventoryController);

//GET ALL DONAR RECORDs
router.get('/get-donars',authMiddelware,getDonarsController);

//GET RECENT BLOOD RECORDS
router.get('/get-recent-inventory',
    authMiddelware,
    getRecentInventoryController);

// //GET ALL BLOOD RECORDS
// router.get('/get-inventory',authMiddelware,getInventoryController);

//GET HOSPITAL BLOOD RECORDS
router.post(
    "/get-inventory-hospital",
    authMiddelware,
    getInventoryHospitalController
  );
  
//GET HOSPITAL RECORDS
router.get('/get-hospitals',authMiddelware,getHospitalController);


//GET ORGANISATION
router.get('/get-organisation',authMiddelware,getOrgnaisationController);

//GET ORGANISATION
router.get('/get-organisation-for-hospital',authMiddelware,
    getOrgnaisationForHospitalController
);




module.exports=router;