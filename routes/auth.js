/**
 * Rutas de Usuarios / Auth
 * host + /api/auth
 */

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const { createUser, login, validateToken } = require("../controllers/auth");
const { validateFields } = require("../middlewares/validateFields");
const { validateJWT } = require("../middlewares/validateJWT");

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validateFields,
  ],
  login
);

router.get("/renew", validateJWT, validateToken);

module.exports = router;
