const router = require("express").Router();
const doctorsC = require("../controllers/doctorsController");
router.post("/create", doctorsC.createDoctors)
router.get('/get', doctorsC.getDoctors);
router.get('/getId', doctorsC.getId);
router.post('/boking', doctorsC.boking);
router.get('/getBoking', doctorsC.getBokingDoctor);


module.exports = router;

