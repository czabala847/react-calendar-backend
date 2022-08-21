/**
 * Rutas de Eventos / Events
 * host + /api/events
 */

const { Router } = require("express");
const router = Router();

const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { validateJWT } = require("../middlewares/validateJWT");

//Todas las rutas tienen que pasar por la validación del JWT
router.use(validateJWT);

router.get("/", getEvents);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
