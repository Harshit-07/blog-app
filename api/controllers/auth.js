import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //Check existing user
  const q = "SELECT * FROM users WHERE username = ? OR email = ?";

  db.query(q, [req.body.username, req.body.email], async (err, data) => {
    if (err) return res.status(500).json({ error: err });
    if (data.length) return res.status(409).json("User already exists!");

    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);

      //Insert new user
      const q =
        "INSERT INTO users(`username`,`email`,`password`) VALUES (?, ?, ?)";
      const values = [req.body.username, req.body.email, hash];

      db.query(q, values, (err, _) => {
        if (err) {
          return res.status(500).json({ error: err });
        }

        return res.status(201).json("The user has been created");
      });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  });
};

export const login = (req, res) => {
  //CHECK USER IN DB
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    //CHECK PASSWORD
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json("Wrong username or password");
    }

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out");
};
