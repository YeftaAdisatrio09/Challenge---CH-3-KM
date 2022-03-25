const expressLayouts = require("express-ejs-layouts");
const express = require("express");
const router = require("./routers/allRouter"); // import router
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public")); // setup public folder
app.use(expressLayouts);
app.use((req, res, next) => {
    req.app.set("layout", "layouts/default"); // set up layout default tamplate
    next();
});

//Default
app.get("/", (reg, res) => {
    res.render("login");
});
// user
app.use("/user", router.userRouter);

app.listen(port, () => {
    console.log(`localhost:${port} is running...`);
});
