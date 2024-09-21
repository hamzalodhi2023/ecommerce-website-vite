const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const PORT = 3000;

app.use(cors());

app.get("/api/products", async (req, res) => {
  let stringData = await fs.readFileSync(
    "./data.json",
    "utf-8",
    (err, data) => {
      if (err) {
        return err;
      } else {
        return data;
      }
    },
  );

  let stringSearchData = await fs.readFileSync(
    "./searchData.json",
    "utf-8",
    (err, data) => {
      if (err) {
        return err;
      } else {
        return data;
      }
    },
  );

  let data = JSON.parse(stringData);
  let searchData = JSON.parse(stringSearchData);

  if (req.query.id) {
    let filteredData = searchData.filter((item) => item.id === req.query.id);
    res.json(filteredData[0]);
  } else {
    res.json(data);
  }
});

app.listen(PORT);
