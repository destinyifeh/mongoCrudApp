const Todo = require("../models/Todo");

exports.addTodo = (req, res) => {
  Todo.create(
    {
      title: "flight to canada",
      description: "flight going to canada",
    },
    (err, newTodo) => {
      if (err) {
        return res.status(500).json("Server error:" + "" + err);
      } else {
        return res
          .status(200)
          .json({ message: "New book created successfully", newTodo });
      }
    }
  );
};

exports.findTodos = (req, res) => {
  Todo.find({}, (err, todos) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "An error occurred while fetching data:" + "" + err });
    } else {
      return res.status(200).json(todos);
    }
  });
};

//Find single todo
exports.findTodo = (req, res) => {
  Todo.findOne({}, (err, todo) => {
    if (err) {
      return res.status(500).json({ messsage: err });
    } else if (!todo) {
      return res.status(404).json({ message: "No todo found" });
    } else {
      return res.status(200).json(todo);
    }
  });
};

exports.updateTodo = (req, res) => {
  Todo.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title, description: req.body.description },
    (err, todo) => {
      if (err) {
        return res.status(500).json({ messsage: err });
      } else if (!todo) {
        return res.status(404).json({ message: "No todo found" });
      } else {
        todo.save((err, saveTodo) => {
          if (err) {
            return res.status(500).json({ message: err });
          } else {
            return res.status(200).json({ message: "Todo updated", saveTodo });
          }
        });
      }
    }
  );
};

exports.deleteTodo = (req, res) => {
  Todo.findByIdAndDelete(req.params.id, (err, todo) => {
    if (err) {
      return res.status(500).json({ messsage: err });
    } else if (!todo) {
      return res.status(404).json({ message: "No todo found" });
    } else {
      return res.status(200).json({ message: "Todo deleted" });
    }
  });
};
