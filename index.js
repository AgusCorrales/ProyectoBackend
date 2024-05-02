const express = require("express")
const app = express()
const PORT = 3001

app.use(express.json())

app.use("/products",require("./routes/products"))
app.use("/categories",require("./routes/categories"))

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`))