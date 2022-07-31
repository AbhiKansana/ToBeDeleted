import { Router } from "express";
const router = Router();
import cinfo from "../Models/Info.js";



// * Create a Todo

router.post("/", async (req, res) => {
    const user = new cinfo({
      country: req.body.country,
      city: req.body.city,
      population: req.body.population,
    });
  
    try {
      const a1 = await user.save();
      res.json(a1);

    } catch {
        console.log(user)
      res.send("error post");
    }
  });


  // * Get All Todos

router.get("/", async (req, res) => {
    try {
      const aliens = await cinfo.find();
      res.json(aliens);
    } catch {
      res.send("error");
    }
  });
  
  // * Get Single Todo
  
  router.get("/:id", async (req, res) => {
    try {
      const aliens = await cinfo.findById(req.params.id);
      res.json(aliens);
    } catch {
      res.send("error");
    }
  });

    // * Delete Single Todo
  
    router.delete("/:id", async (req, res) => {
        try {
          const aliens = await cinfo.findByIdAndDelete(req.params.id);
          res.json(aliens);
        } catch {
          res.send("error");
        }
      });


      // * Update Todo

router.patch("/:id", async (req, res) => {
    try {
      if (req.body.country) {
        const alien = await cinfo.findById(req.params.id);
        alien.country = req.body.country;
        const a1 = await alien.save();

      }
  
      if (req.body.city) {
        const alien = await cinfo.findById(req.params.id);
        alien.city = req.body.city;
        const a1 = await alien.save();

      }
  
      if (req.body.population) {
        const alien = await cinfo.findById(req.params.id);
        alien.population = req.body.population;
        const a1 = await alien.save();
       
      }

      const alien = await cinfo.findById(req.params.id);
      res.json(alien);

    } 
    
    catch {
      res.send("error");
    }
  });
      
  

  export default router