const express = require("express") ;
const { register, login } = require("../controllers/user");
const { registerValidator, validation, loginValidator } = require("../middleware/validator");
const isAuth = require('../middleware/isAuth')


const router = express.Router();


// register
router.post('/register',registerValidator(),validation, register);
// login
router.post('/login',loginValidator(),validation, login);
// current
router.get ("/current", isAuth , (req,res) =>{
    res.send(req.user)
})







module.exports = router;
