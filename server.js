const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const connectDB = require('./config/database');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/todos', todoRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({
    message: 'TODO API is running',
    endpoints: {
      'GET /api/todos': 'Get all todos',
      'GET /api/todos/:id': 'Get single todo',
      'POST /api/todos': 'Create new todo',
      'PUT /api/todos/:id': 'Update todo',
      'DELETE /api/todos/:id': 'Delete todo',
      'PATCH /api/todos/:id/toggle': 'Toggle todo completion'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Documentation: http://localhost:${PORT}`);
}); 