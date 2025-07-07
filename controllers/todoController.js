const todoService = require('../services/todoService');

class TodoController {
  // Get all todos
  async getAllTodos(req, res) {
    try {
      const todos = await todoService.getAllTodos();
      res.status(200).json({
        success: true,
        count: todos.length,
        data: todos
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  // Get single todo
  async getTodoById(req, res) {
    try {
      const todo = await todoService.getTodoById(req.params.id);
      res.status(200).json({
        success: true,
        data: todo
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  // Create new todo
  async createTodo(req, res) {
    try {
      const todo = await todoService.createTodo(req.body);
      res.status(201).json({
        success: true,
        data: todo
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  // Update todo
  async updateTodo(req, res) {
    try {
      const todo = await todoService.updateTodo(req.params.id, req.body);
      res.status(200).json({
        success: true,
        data: todo
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  // Delete todo
  async deleteTodo(req, res) {
    try {
      await todoService.deleteTodo(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Todo deleted successfully'
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  // Toggle todo completion status
  async toggleTodoStatus(req, res) {
    try {
      const todo = await todoService.toggleTodoStatus(req.params.id);
      res.status(200).json({
        success: true,
        data: todo
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new TodoController(); 