const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { query } = require("express");
const { restart } = require("nodemon");

//middleware
app.use(cors());
app.use(express.json());

//router routes//

//creata a list employe

app.post("/employees/create", async (req, res) => {
  try {
    const { name, address, position } = req.body;
    const newList = await pool.query(
      "INSERT INTO list (name, address, position) VALUES ($1, $2, $3) RETURNING *",
      [name, address, position]
    );

    res.json(newList.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all employe

app.get("/employees/list", async (req, res) => {
  try {
    const allList = await pool.query("SELECT * FROM list");
    res.json(allList.rows);
  } catch (error) {
    console.error(err.message);
  }
});

//get a employe

app.get("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const List = await pool.query(" SELECT * FROM list WHERE id_employ = $1", [
      id,
    ]);
    res.json(List.rows[0]);
  } catch (error) {
    console.error(err.message);
  }
});

//update a employe

app.put("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { address, position } = req.body;
    const updateList = await pool.query(
      "UPDATE list SET address = $1, position = $2 WHERE id_employ = $3",
      [address, position, id]
    );
    res.json("your data successfully updated");
  } catch (error) {
    console.error(err.message);
  }
});

//delete a employe

app.delete("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteRequest = await pool.query(
      "DELETE FROM list WHERE id_employ = $1",
      [id]
    );
    res.json("data was deleted");
  } catch (error) {
    console.error(err.me);
  }
});

app.listen(4000, () => {
  console.log("server has started on port 4000");
});
