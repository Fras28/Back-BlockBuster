"use strict";
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerAllMovies = require("./Movies");
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/blockbuster", routerAllMovies);
module.exports = router;
