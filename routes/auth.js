/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 */

const { Router } = require("express");
const router = Router();

const { createUser, login, validateToken } = require("../controllers/auth");

router.post("/new", createUser);

router.post("/", login);

router.get("/renew", validateToken);

module.exports = router;
