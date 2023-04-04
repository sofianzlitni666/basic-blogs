const { check, validationResult } = require("express-validator");


exports.registerValidator = () => [
    check("firstname" , "firstname is required !").not().isEmpty(),
    check("lastname" , "lastname is required !").not().isEmpty(),
    check("email" , "enter a valid email").isEmail(),
    check("password" , " password must include at least 6 charcters").isLength({min:6})

]

exports.loginValidator = () => [
    check("email" , "enter a valid email").isEmail(),
    check("password" , "enter a valid password").isLength({min:6})
    
]

exports.validation = (req , res , next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
     }
    next();
}
