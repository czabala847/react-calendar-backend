/**
 * Rutas de Eventos / Events
 * host + /api/events
 */

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { validateFields } = require("../middlewares/validateFields");
const { validateJWT } = require("../middlewares/validateJWT");
const { isDate } = require("../helpers/isDate");

//Todas las rutas tienen que pasar por la validación del JWT
router.use(validateJWT);

router.get("/", getEvents);
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    validateFields,
  ],
  createEvent
);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
