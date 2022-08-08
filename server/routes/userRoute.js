import { Router } from "express";
const router = Router();

import user from '../Models/user.js'

// & Create a User

router.post("/signup", async (req, res) => {
    const current = new user({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  
    try {
      const emailCheck = await user.findOne({email: current.email})
      if(emailCheck===null){
        const user1 = await current.save();
        res.status(200).send("Signup successful")
      }
      else{
        res.status(400).send("user already exist")
      }

    } catch {
      res.status(400).send("error post");
    }
  });

  // & To check for Login

  router.post("/login", async (req, res) => {
 
     const email = req.body.email
     const password = req.body.password

     try{

      const user1 = await user.findOne({email: email, password : password })
      res.json({token:user1._id,name:user1.name})

     }

     catch{
       res.status(400).send("login error")
     }
     

  })

  export default router