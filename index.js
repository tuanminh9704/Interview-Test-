const express = require("express");
const app = express();
const port = 3000;

// Nhúng pug
app.set('views', './views');
app.set('view engine', 'pug');
// End nhúng pug

// File static
app.use(express.static('public'))
//End file static

const router = require("./routes/client/index.route");

// router
router(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})