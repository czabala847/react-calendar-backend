const { response } = require("express");

const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "registro",
  });
};

const login = (req, res = response) => {
  res.json({
    ok: true,
    msg: "login",
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
