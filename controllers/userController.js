const mongoose = require("mongoose");

const User = require("../models/userModel");

exports.getAll = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      data: {
        results: users.length,
        headers: req.headers,
        cookies: req.cookies,
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    //res.setHeader("Set-Cookie", ["foo=bar", "bar=baz"]); // setting multiple  cookies or
    res.cookie("cookie-token", "test1234", {
      httpOnly: true,
      secure: true,
      // maxAge: 1000000
      // signed: true
    });

    res.setHeader(
      "Set-Cookie",
      "mycookie=hello; Secure; HttpOnly; SameSite=None; Path=/; Max-Age=99999999;"
    );

    res.status(200).json({
      status: "success",
      data: {
        user: newUser,
      },
      cookie: ["jwt", "test1234"],
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    await User.deleteMany();

    res.status(200).json({
      status: "success",
      message: "User deleted",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
