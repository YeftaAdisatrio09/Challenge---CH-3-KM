const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const router = require("./routers/allRouter");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/default");

app.get("/", (reg, res) => {
    res.render("login");
});

app.use("/user", router.userRouter);

app.listen(port, () => {
    console.log(`localhost:${port} is running...`);
});
