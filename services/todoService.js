const Todo = require('../models/Todo');

class TodoService {
  // Get all todos
  async getAllTodos() {
    try {
      const todos = await Todo.find().sort({ createdAt: -1 });
      return todos;
    } catch (error) {
      throw new Error('Error fetching todos');
    }
  }

  // Get single todo by ID
  async getTodoById(id) {
    try {
      const todo = await Todo.findById(id);
      if (!todo) {
        throw new Error('Todo not found');
      }
      return todo;
    } catch (error) {
      throw new Error('Error fetching todo');
    }
  }

  // Create new todo
  async createTodo(todoData) {
    try {
      const todo = new Todo(todoData);
      const savedTodo = await todo.save();
      return savedTodo;
    } catch (error) {
      throw new Error('Error creating todo');
    }
  }

  // Update todo
  async updateTodo(id, updateData) {
    try {
      const todo = await Todo.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      );
      if (!todo) {
        throw new Error('Todo not found');
      }
      return todo;
    } catch (error) {
      throw new Error('Error updating todo');
    }
  }

  // Delete todo
  async deleteTodo(id) {
    try {
      const todo = await Todo.findByIdAndDelete(id);
      if (!todo) {
        throw new Error('Todo not found');
      }
      return todo;
    } catch (error) {
      throw new Error('Error deleting todo');
    }
  }

  // Toggle todo completion status
  async toggleTodoStatus(id) {
    try {
      const todo = await Todo.findById(id);
      if (!todo) {
        throw new Error('Todo not found');
      }
      todo.completed = !todo.completed;
      const updatedTodo = await todo.save();
      return updatedTodo;
    } catch (error) {
      throw new Error('Error toggling todo status');
    }
  }
}

module.exports = new TodoService(); 