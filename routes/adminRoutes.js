const express=require('express')
const authMiddelware = require('../middlewares/authMiddelware')
const { getDonarsListController, getHospitalListController, getOrgListController, deleteDonarController } = require('../controllers/adminController');
const adminMiddleware = require('../middlewares/adminMiddleware');
//router object

const router=express.Router();
//routes
//GET || DONAR LIST
router.get('/donar-list',authMiddelware,adminMiddleware,getDonarsListController)

//GET || HOSPITAL LIST
router.get('/hospital-list',authMiddelware,adminMiddleware,getHospitalListController)

//GET || ORGANISATION LIST
router.get('/org-list',authMiddelware,adminMiddleware,getOrgListController)
//===============================
//DELETE DONAR ||GET
router.delete('/delete-donar/:id',authMiddelware,adminMiddleware,deleteDonarController)
//export
module.exports=router;