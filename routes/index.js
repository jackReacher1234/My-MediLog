const router = require("express").Router();
const indexController = require("../indexcontroller/indexcontroller");

router.get("/",indexController.indexPage)
router.get("/medilogIndex", indexController.medilogIndex);
router.get("/patientLogin",indexController.patientLogin)
router.get("/patientSignup",indexController.patientSignup)
router.get("/patient",indexController.patient)
router.get("/hospital",indexController.hospital)
router.get("/hospitalLogin",indexController.hospitalLogin)
router.get("/pharmacy",indexController.pharmacy)
router.get("/pharmacyLogin",indexController.pharmacyLogin)

module.exports = router;
