const express = require("express");
const{typeError} = require ("./middleware/errors");
const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/users",require("./routes/users"));
app.use("/products",require("./routes/products"));
app.use("/orders",require("./routes/orders"));
app.use("/categories",require("./routes/categories"));

app.use(typeError);

app.listen(PORT,()=> console.log(`Servidor levantado en puerto ${PORT}`));