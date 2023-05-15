
const router = require("express").Router();
const grommC = require("../controllers/grommingController");
router.post("/create", grommC.creategrom)
router.get('/get', grommC.getgrommer);
router.get('/getId', grommC.getId);
router.post('/boking', grommC.boking);
router.get('/getBoking', grommC.getBokinggrom);


module.exports = router;
