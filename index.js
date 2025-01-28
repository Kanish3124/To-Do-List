import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;
env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Setup GitHub" },
  { id: 2, title: "Setup LinkedIn" },
];

app.get("/", async (req, res) => {
  try{
    const result = await db.query(
      "SELECT * FROM items ORDER BY id ASC;"
    );
    items = result.rows;
    res.render("index.ejs", {
      listTitle: "To-do List",
      listItems: items,
    });
  }
  catch(err) {
    console.error("Error: ", err.stack);
  }
 
});

app.post("/add", async (req, res) => {
  try{
    const newItem = req.body.newItem;
    //items.push({ title: newItem });

    db.query(
      "INSERT INTO items (title) VALUES ($1)", [newItem]
    );

    res.redirect("/");
  }
  catch(err) {
    console.error("Error: ", err.stack);
  }
  
});

app.post("/edit", async (req, res) => {
  const editId = req.body.updatedItemId;
  const editTitle = req.body.updatedItemTitle;
  try{
    await db.query(
      "UPDATE items SET title = ($1) WHERE id = ($2)", [editTitle, editId]
    );

    res.redirect("/");
  }
  catch(err) {
    console.error("Error: ", err.stack);
  }

});

app.post("/delete", async (req, res) => {
    const delId = req.body.deleteItemId;
  try{
    await db.query(
      "DELETE FROM items WHERE id = ($1)", [delId]
    );

    res.redirect("/");
  }
  catch(err) {
    console.error("Error: ", err.stack);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
