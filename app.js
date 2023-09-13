const express = require("express");
const app = express();
const path = require("path");

const pathPublic = path.join(__dirname, "./public")
app.use(express.static(pathPublic));

app.get("/", async (req, res) =>{
  res.render('index');
})

app.set('view engine', "hbs");

app.listen(3000, () => {
  console.log(`sever start on port: http://localhost:3000/}`);
});