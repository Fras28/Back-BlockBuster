const { Router } = require('express');
const router = Router();
const {allMovies} = require("../../build/src/Controllers/controller") 

router.get("/", allMovies)


module.exports = router;
