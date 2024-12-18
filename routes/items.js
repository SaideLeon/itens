const express = require("express");
const router = express.Router();

// Simulação de banco de dados
let items = [];

// 1. Listar todos os itens
router.get("/", (req, res) => {
  res.status(200).json(items);
});

// 2. Obter um item pelo ID
router.get("/:id", (req, res) => {
  const item = items.find((i) => i.id === req.params.id);
  if (!item) {
    return res.status(404).json({ message: "Item não encontrado" });
  }
  res.status(200).json(item);
});

// 3. Criar um novo item
router.post("/", (req, res) => {
  const { id, name, description, price } = req.body;
  if (!id || !name || !price) {
    return res.status(400).json({ message: "Campos obrigatórios ausentes" });
  }
  const newItem = { id, name, description, price };
  items.push(newItem);
  res.status(201).json(newItem);
});

// 4. Atualizar um item pelo ID
router.put("/:id", (req, res) => {
  const { name, description, price } = req.body;
  const itemIndex = items.findIndex((i) => i.id === req.params.id);

  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item não encontrado" });
  }

  items[itemIndex] = { ...items[itemIndex], name, description, price };
  res.status(200).json(items[itemIndex]);
});

// 5. Excluir um item pelo ID
router.delete("/:id", (req, res) => {
  const itemIndex = items.findIndex((i) => i.id === req.params.id);
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item não encontrado" });
  }

  items.splice(itemIndex, 1);
  res.status(200).json({ message: "Item excluído com sucesso" });
});

module.exports = router;
