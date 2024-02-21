import express, { Request, Response} from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.post("/login", [

    //validate 

    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({min: 6}),

], async (req: Request, res: Response)=>{

    //check any errors in the requests

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({message: errors.array() });
    }

    const { email, password } = req.body;

    try{

        // check user email
        const user = await User.findOne({ email })
        if(!user){
            return res.status(400).json({ message: "Invalid Credentials"});
        }

        //check password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ message: "Invalid Credentials"});
        }

        // create access token
        const token = jwt.sign(
            { userId: user.id },
            process.env.JWT_SECRET_KEY as string,
            {
                expiresIn: "1d"
            }
            );
            
        // once we have token_HTTP cookie
        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
        });

        //pass user ID
        res.status(200).json({userId: user._id})

    }catch(error){
    console.log(error);
    res.status(500).json({ message: "Something went wrong"});
    }
});

// signout 
router.post("/logout", (req: Request, res: Response) => {
    res.cookie("auth_token","", {
        expires: new Date(0),
    });
    res.send();
});


router.get("/validate-token", verifyToken, (req: Request, res: Response)=>{
    res.status(200).send({userId: req.userId});
});

export default router;