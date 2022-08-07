import { Router } from "express";
const router = Router();

import user from '../Models/user.js'

// * Create a User

router.post("/", async (req, res) => {
    const current = new user({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  
    try {
      const user1 = await current.save();
      res.json(user1);

    } catch {
      console.log(current)
      res.send("error post");
    }
  });


  router.post("/", async (req, res) => {
     const name = req.body.name
     const password = req.body.password
     

  })

  export default router