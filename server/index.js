var express = require("express");
var indexRouter = require("./routes/index");
const dotenv = require("dotenv");
const cors = require("cors");

var app = express();
//Used Prisma Orm as it was mentioned in JD
//connectDb();
dotenv.config({ path: ".env" });
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
