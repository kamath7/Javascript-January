const express = require("express");
const { check, validationResult } = require("express-validator");

const { login, signup, me } = require("../controller/AuthController");

const router = express.Router();

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name not meeting min length criteria")
      .trim(),
    check("email").isEmail().withMessage("Email not valid").normalizeEmail(),
    check("password")
      .isLength({ min: 8, max: 20 })
      .withMessage("Password needs to meet length requirements")
      .matches(/\d/)
      .withMessage("Password needs to have atleast one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("Atleast one special character required"),
    check("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Pwds not matching");
      }
      return true;
    }),
  ],
  (req, res, next) => {
    const err = validationResult(req).formatWith(({ msg }) => msg);
    if (!err.isEmpty()) return res.status(422).json({ error: err.array() });
    next();
  },
  signup
);

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .withMessage("Invalid credentials")
      .normalizeEmail(),
    check("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("Invalid credentials"),
  ],
  (req, res, next) => {
    let error = validationResult(req).formatWith(({ msg }) => msg);
    if (!error.isEmpty())
      return res.status(422).json({ errors: error.array() });

    next();
  },
  login
);

router.get("/me", me);
module.exports = router;
