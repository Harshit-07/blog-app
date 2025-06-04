import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "select * from posts where cat = ?"
    : "select * from posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const id = req.params.id;
  // const q = "select * from posts where id = ?";
  const q =
    "select `username`,`title`,`desc`, p.img, u.img as userImg, `cat`, `date` from users u join posts p on u.id = p.uid where p.id = ?";
  // ("SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ");

  db.query(q, id, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  res.status(200).send("This is the test endpoint");
};

export const deletePost = (req, res) => {
  res.status(200).send("This is the test endpoint");
};

export const updatePost = (req, res) => {
  res.status(200).send("This is the test endpoint");
};
