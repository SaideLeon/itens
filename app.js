const express = require("express");
const bodyParser = require("body-parser");
const itemsRoutes = require("./routes/items");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use("/items", itemsRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta $\{PORT\}`);
});
