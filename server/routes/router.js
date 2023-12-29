const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");


// for user registration

router.post("/register", async (req, res) => {
    console.log(req.body)
    const { fname, email, password, cpassword } = req.body;

    if (!fname || !email || !password || !cpassword) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {

        const preuser = await userdb.findOne({ email: email });
        console.log("hii")

        if (preuser) {
            res.status(422).json({ error: "This Email is Already Exist" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and Confirm Password Not Match" })
        } else {
            const finalUser = new userdb({
                fname, email, password, cpassword
            });

            // here password hasing

            const storeData = await finalUser.save();

         
// ------>
            const token = jwt.sign({ userId: storeData._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

            // Sending the token in the response
            res.status(201).json({ status: 201, storeData, token });




        }

    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error");
    }

});




// user Login

router.post("/login", async (req, res) => {
    // console.log(req.body);

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(422).json({ error: "fill all the details" })
    }

    try {
       const userValid = await userdb.findOne({email:email});

        if(userValid){

            const isMatch = await bcrypt.compare(password, userValid.password);

            if(!isMatch){
                res.status(422).json({ error: "invalid details"})
            }else{

                const token = jwt.sign({ userId: userValid._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

                // Sending the token in the response
                res.cookie("usercookie", token, {
                    expires: new Date(Date.now() + 9000000),
                    httpOnly: true
                });
    
                const result = {
                    userValid,
                    token
                };
    
                res.status(201).json({ status: 201, result });

                // // token generate
                // const token = await userValid.generateAuthtoken();

                // // cookiegenerate
                // res.cookie("usercookie",token,{
                //     expires:new Date(Date.now()+9000000),
                //     httpOnly:true
                // });

                // const result = {
                //     userValid,
                //     token
                // }
                // res.status(201).json({status:201,result})
            }
        }

    } catch (error) {
        res.status(401).json(error);
        console.log("catch block");
    }
});



// user valid
router.get("/validuser", authenticate,  async(req,res)=>{
    try {
        const ValidUserOne = await userdb.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserOne});
    } catch (error) {
        res.status(401).json({status:401,error});
    }
});


// user logout

router.get("/logout",authenticate,async(req,res)=>{
    try {
        req.rootUser.tokens =  req.rootUser.tokens.filter((curelem)=>{
            return curelem.token !== req.token
        });

        res.clearCookie("usercookie",{path:"/"});

        req.rootUser.save();

        res.status(201).json({status:201})

    } catch (error) {
        res.status(401).json({status:401,error})
    }
})


module.exports = router;






