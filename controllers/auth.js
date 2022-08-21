const { response } = require("express");
const User = require("../models/User");

const createUser = async (req, res = response) => {
  // const { name, email, password } = req.body;

  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      msg: "registro",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: true,
      msg: "Error!!!. Por favor hable con el administrador.",
    });
  }
};

const login = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const validateToken = (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  createUser,
  login,
  validateToken,
};
