const { Router} = require("express");
const {auth, authAdmin} = require("../middlewares/auth");
const { userReq } = require("../controllers/userCtrl");
const { adminReq } = require("../controllers/adminCtrl");
const router = Router();

// router.get("/", async(req,res) => {
//   res.json({msg:"Users endpoint"}); 
// })

// user requests
router.post("/signUp", userReq.signUp);
router.post("/login", userReq.login);
router.get("/getUserInfo", auth, userReq.getInfo);
router.get("/checkToken", auth, userReq.checkToken);

// admin requests
router.get("/usersList",auth, authAdmin, adminReq.usersList);
router.get("/checkAdminToken", auth, authAdmin, adminReq.checkAdminToken);
router.delete("/delete/:id", auth, authAdmin, adminReq.delteUserById);
router.patch("/changeRole/:id/:role",auth, authAdmin, adminReq.changeRole);

module.exports = router;


