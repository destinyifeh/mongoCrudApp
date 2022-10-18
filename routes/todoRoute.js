const express = require("express");

const router = express.Router();
const controller = require("../controllers/todoController");

router.post("/todos", controller.addTodo);
router.get("/todos", controller.findTodos);
router.get("/todos/:id", controller.findTodo);
router.delete("/todos/:id", controller.deleteTodo);
router.put("/todos/:id", controller.updateTodo);
module.exports = router;
